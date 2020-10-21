

function preloadD () {
	this.load.image('game1_a','assets/game1_a.png');

	this.load.tilemapTiledJSON('map', 'assets/map.json');
	// this.load.spritesheet('tiles', 'assets/tiles.png', {frameWidth: 70, frameHeight: 70});
	this.load.spritesheet('tiles', 'assets/tiles.png', {frameWidth:30, frameHeight:30});
	this.load.image('pieza', 'assets/pieza.png');

    this.load.image('count_ficha', 'assets/count_ficha.png');
    
	this.load.atlas('player', 'assets/player.png', 'assets/player.json');

    // this.load.image('izquierda', 'assets/izquierda.png');
    // this.load.image('derecha', 'assets/derecha.png');
    // this.load.image('saltar', 'assets/saltar.png');

    this.load.spritesheet('izquierda', 'assets/izquierda_sprite.png', {frameWidth:93, frameHeight:100});
    this.load.spritesheet('derecha', 'assets/derecha_sprite.png', {frameWidth:93, frameHeight:100});
    this.load.spritesheet('saltar', 'assets/saltar_sprite.png', {frameWidth:100, frameHeight:94});


    this.load.audio('jump_player', [        
        'assets/jump_effect.mp3'
    ]);
    this.load.audio('catch_coin', [        
        'assets/catch_effect.mp3'
    ]);
    this.load.audio('bass', [        
        'assets/game_mario.mp3'
    ]);

    var left=false;
    var right=false;
    var jump=false;
}

var map;
var player;
var cursors;
var groundLayer, coinLayer;
var text;
var score = 0;

var left=false;
var right=false;
var jump=false;

var jump_player;
var catch_coin;
var bass;


function createD () {

	var fondo = this.add.image(640, 400, 'game1_a').setInteractive();;

	map = this.make.tilemap({key: 'map'});
	
	// tiles for the ground layer
    var groundTiles = map.addTilesetImage('tiles');
    // create the ground layer
    groundLayer = map.createDynamicLayer('World', groundTiles, 0, 0);
    // the player will collide with this layer
    groundLayer.setCollisionByExclusion([-1]);

    // coin image used as tileset
    var coinTiles = map.addTilesetImage('pieza');
    // add coins as tiles
    coinLayer = map.createDynamicLayer('Coins', coinTiles, 0, 0);

    // set the boundaries of our game world
    this.physics.world.bounds.width = groundLayer.width;
    this.physics.world.bounds.height = groundLayer.height;

    // create the player sprite    
    player = this.physics.add.sprite(300, 500, 'player');
    player.setBounce(0.2); // our player will bounce from items
    player.setCollideWorldBounds(true); // don't go out of the map    
    
    // small fix to our player images, we resize the physics body object slightly
    player.body.setSize(player.width, player.height-8);
    
    // player will collide with the level tiles 
    this.physics.add.collider(groundLayer, player);

    // coinLayer.setTileIndexCallback([5,6,7,8], collectCoin, this);
    coinLayer.setTileIndexCallback([5], collectCoin, this);
    // when the player overlaps with a tile with index 17, collectCoin 
    // will be called    
    this.physics.add.overlap(player, coinLayer);

    // player walk animation
    this.anims.create({
        key: 'walk',
        frames: this.anims.generateFrameNames('player', {prefix: 'p1_walk', start: 1, end: 11, zeroPad: 2}),
        frameRate: 10,
        repeat: -1
    });
    // idle with only one frame, so repeat is not neaded
    this.anims.create({
        key: 'idle',
        frames: [{key: 'player', frame: 'p1_stand'}],
        frameRate: 10,
    });

    cursors = this.input.keyboard.createCursorKeys();

    // set bounds so the camera won't go outside the game world
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    // make the camera follow the player
    this.cameras.main.startFollow(player);

    // set background color, so the sky is not black    
    this.cameras.main.setBackgroundColor('#ccccff');

    this.add.image(1150, 50, 'count_ficha');
    // this text will show the score
    text = this.add.text(1070, 33, '0', {
        fontSize: '40px',
        fill: '#ffffff'
    });
    // fix the text to the camera
    text.setScrollFactor(0);

    // var izquierda = this.add.image(200, 730, 'izquierda');
    // var derecha = this.add.image(293, 730, 'derecha');
    // var saltar = this.add.image(1000, 730, 'saltar');    

    var izquierda = this.add.sprite(200, 730, 'izquierda',0).setInteractive();
    // var derecha = this.add.sprite(290, 730, 'derecha',0).setInteractive();
    var derecha = this.add.sprite(350, 730, 'derecha',0).setInteractive();
    var saltar = this.add.sprite(1100, 730, 'saltar',0).setInteractive();

    jump_player = this.sound.add('jump_player');    
    catch_coin = this.sound.add('catch_coin');
    bass = this.sound.add('bass');


    // izquierda.on('pointerover', function (event) { 
    //     // player.body.setVelocityY(-500);        
    //     this.setFrame(1);

    //     left = true;

    //     player.body.setVelocityX(-200);
    //     player.anims.play('walk', true); // walk left
    //     player.flipX = true; // flip the sprite to the left
    // });
    // izquierda.on('pointerout', function (event) {
    //     // player.body.setVelocityY(-500);        
    //     this.setFrame(0);
    //     derecha.setFrame(0);
    //     saltar.setFrame(0);

    //     left = false;
    //     right = false;
    //     jump = false;           
    // });
    izquierda.on('pointerdown', function (event) {
        // player.body.setVelocityY(-500);        
        this.setFrame(1);
        derecha.setFrame(0);

        left = true;
        right = false;
        jump = false;

        // player.body.setVelocityX(-200);
        // player.anims.play('walk', true); // walk left
        // player.flipX = true; // flip the sprite to the left
    });
	
	izquierda.on('pointerup', function (event) {
        // player.body.setVelocityY(-500);        
        this.setFrame(0);
        derecha.setFrame(0);
        saltar.setFrame(0);

        left = false;
        right = false;
        jump = false;       

        // player.body.setVelocityX(0);
        // player.anims.play('idle', true);
    });

    fondo.on('pointerup', function (event) {
        // player.body.setVelocityY(-500);        
        izquierda.setFrame(0);
        derecha.setFrame(0);
        saltar.setFrame(0);

        left = false;
        right = false;
        jump = false;       

        // player.body.setVelocityX(0);
        // player.anims.play('idle', true);
    });

   

    // derecha.on('pointerover', function (event) { 
    //     // player.body.setVelocityY(-500);        
    //     this.setFrame(0);
    //     izquierda.setFrame(0);
    //     saltar.setFrame(0);

    //     left = false;
    //     right = false;
    //     jump = false;
    // });
    // derecha.on('pointerout', function (event) {
    //     // player.body.setVelocityY(-500);        
    //     this.setFrame(0);
    //     izquierda.setFrame(0);
    //     saltar.setFrame(0);

    //     left = false;
    //     right = false;
    //     jump = false;

    // });
    derecha.on('pointerdown', function (event) {
        // player.body.setVelocityY(-500);        
        this.setFrame(1);
        izquierda.setFrame(0);

        right = true;
        left = false;
        jump = false;

        // player.body.setVelocityX(200);
        // player.anims.play('walk', true);
        // player.flipX = false; // use the original sprite looking to the right
    });
	
	derecha.on('pointerup', function (event) {
        // player.body.setVelocityY(-500);        
        this.setFrame(0);
        izquierda.setFrame(0);
        saltar.setFrame(0);

        left = false;
        right = false;
        jump = false;

        // player.body.setVelocityX(0);
        // player.anims.play('idle', true);
    });

    

    // saltar.on('pointerover', function (event) { 
    //     // player.body.setVelocityY(-500);        
    //     this.setFrame(1);

    //     jump_player.play();    
    //     jump = true;

    //     player.body.setVelocityY(-500);        
    // });
    // saltar.on('pointerout', function (event) {
    //     // player.body.setVelocityY(-500);        
    //     this.setFrame(0);
    //     derecha.setFrame(0);
    //     izquierda.setFrame(0);

    //     left = false;
    //     right = false;
    //     jump = false;
    // });
    saltar.on('pointerdown', function (event) {
        // player.body.setVelocityY(-500);        
        this.setFrame(1);  

        jump_player.play();    
        jump = true;

        // player.body.setVelocityY(-500);             
    });
	
	saltar.on('pointerup', function (event) {
        // player.body.setVelocityY(-500);        
        this.setFrame(0);
        derecha.setFrame(0);
        izquierda.setFrame(0);

        left = false;
        right = false;
        jump = false;

        // player.body.setVelocityX(0);
        // player.anims.play('idle', true);
    });

   

    var loopMarker = {
        name: 'loop',
        start: 0,
        duration: 12,
        config: {
            loop: true
        }
    };

    bass.addMarker(loopMarker);
    bass.play('loop', {
        delay: 0
    });
    
   
}


// this function will be called when the player touches a coin
function collectCoin(sprite, tile) {
    // coinLayer.removeTileAt(tile.x, tile.y); // remove the tile/coin
    catch_coin.play();

    for (var i=-1; i<=1; i++) {
        for (var j=-1; j<=1; j++) {
            coinLayer.removeTileAt(tile.x+i, tile.y+j); // remove the tile/coin
            // score++;
        }    
    }
    score++;
     // add 10 points to the score
    text.setText(score); // set the text to show the current score

    if (score == 6) {
        score = 0;
        left = false;
        right = false;
        jump = false;
        // this.scene.switch('sceneE');
        // this.scene.stop('sceneD');
        this.scene.stop('sceneD');
        this.scene.start('sceneE');
        bass.stop();
        // this.scene.manager.bootScene(this);
    }

    return false;
}

function updateD(time, delta) {
    // console.log(player.body.onFloor());

    // if (cursors.left.isDown || left)
    if (left)
    {
        // left = false;
        player.body.setVelocityX(-200);
        player.anims.play('walk', true); // walk left
        player.flipX = true; // flip the sprite to the left
    }
    // else if (cursors.right.isDown || right)
    else if (right)
    {
        // right = false;
        player.body.setVelocityX(200);
        player.anims.play('walk', true);
        player.flipX = false; // use the original sprite looking to the right
    } else {
        player.body.setVelocityX(0);
        player.anims.play('idle', true);
    }
    // jump 
    // if ((cursors.up.isDown || jump) && player.body.onFloor())
    if ((jump) && player.body.onFloor())
    {
        jump = false;
        player.body.setVelocityY(-500);        
    }


}
