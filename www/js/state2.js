function preloadB () {
    this.load.image('game','assets/game.png');

    // this.load.image('player_intro','assets/player_intro.png');
    this.load.spritesheet('player_intro', 'assets/player_intro.png', {frameWidth:197.4, frameHeight:400});

    this.load.spritesheet('avanzarC', 'assets/avanzar_sprite.png', {frameWidth:100, frameHeight:94});

    this.load.audio('audio_intro', [        
        'assets/saludo_intro.mp3'
    ]);
}

var player_intro;

var audio_intro;


function createB () {
    this.add.image(640, 400, 'game');

    // this.add.image(600, 400, 'player_intro');
    player_intro = this.add.sprite(859, 550, 'player_intro',0).setInteractive();

    var brn_avanzarC = this.add.sprite(1180, 720, 'avanzarC',0).setInteractive();

    brn_avanzarC.on('pointerover', function (event) {         
        this.setFrame(1);       
    });
    brn_avanzarC.on('pointerout', function (event) {
        this.setFrame(0);        
    });
    brn_avanzarC.on('pointerdown', function (event) {
        this.setFrame(1);        
    });
    brn_avanzarC.on('pointerup', function (event) {
        this.setFrame(0);        
    });

    brn_avanzarC.on('pointerdown', avanzarC, this);

    // setTimeout(function(){
    // 	player_intro.setFrame(1);        
    // 	setTimeout(function(){
    // 		player_intro.setFrame(2);        
    // 	}, 500);
    // }, 500);
    
    // this.anims.create({
    //     key: 'animation',
    //     frames: this.anims.generateFrameNames('player_intro', {prefix: 'p1_walk', start: 1, end: 8, zeroPad: 2}),
    //     frameRate: 10,
    //     repeat: -1
    // });
    // this.animations.play('animation', 30, true);

   	playerAnimation = this.time.addEvent({
		delay:250,
		callback:onEvenAnimation,
		callbackScope:this,
		repeat:100
	});



    // this.input.on('pointerdown', function () {    
    //     this.input.stopPropagation();
    //     this.scene.switch('sceneC');    
    //     this.scene.manager.bootScene(this);
    // }, this);  

    audio_intro = this.sound.add('audio_intro');
    audio_intro.play();  
}

var cntFrame = 0;

function avanzarC () {      
    audio_intro.stop();  

    this.scene.start('sceneC');  
}

function onEvenAnimation () {
	// console.log('aa');
	cntFrame++;
	player_intro.setFrame(cntFrame);        
	if (cntFrame == 7) {
		cntFrame = 0;
	}
}

function updateB () {
	
}
