function preloadE () {
    this.load.image('game1_b','assets/game1_b.png');

    this.load.image('game1_b1','assets/game1_b1.png');
    this.load.image('game1_b2','assets/game1_b2.png');
    this.load.image('game1_b3','assets/game1_b3.png');
    this.load.image('game1_b4','assets/game1_b4.png');
    this.load.image('game1_b5','assets/game1_b5.png');
    this.load.image('game1_b6','assets/game1_b6.png');

    // this.load.image('regresarD','assets/regresar.png');
    // this.load.image('avanzarF','assets/avanzar.png');

    this.load.spritesheet('regresarD', 'assets/regresar_sprite.png', {frameWidth:100, frameHeight:94});
    this.load.spritesheet('avanzarF', 'assets/avanzar_sprite.png', {frameWidth:100, frameHeight:94});    

    this.load.audio('audio_puzzle', [        
        'assets/audio_rompecabezas.mp3'
    ]);
}

var audio_puzzle;

function createE () {

    var left=false;
    var right=false;
    var jump=false;

    
    this.add.image(640, 400, 'game1_b'); 

    var btn_ficha1 = this.add.image(200, 160, 'game1_b1').setInteractive();
    var btn_ficha2 = this.add.image(200, 360, 'game1_b2').setInteractive();
    var btn_ficha3 = this.add.image(200, 560, 'game1_b3').setInteractive();
    var btn_ficha4 = this.add.image(1050, 160, 'game1_b4').setInteractive();
    var btn_ficha5 = this.add.image(1050, 360, 'game1_b5').setInteractive();
    var btn_ficha6 = this.add.image(1070, 560, 'game1_b6').setInteractive();

    // btn_ficha1.on('pointerup', build_pintura(btn_ficha1)), this);
    // btn_ficha2.on('pointerup', build_pintura2, this);
    // btn_ficha3.on('pointerup', build_pintura3, this);
    // btn_ficha4.on('pointerup', build_pintura4, this);
    // btn_ficha5.on('pointerup', build_pintura5, this);
    // btn_ficha6.on('pointerup', build_pintura6, this);

    var ficha1 = this.input.setDraggable(btn_ficha1);
    var ficha2 = this.input.setDraggable(btn_ficha2);
    var ficha3 = this.input.setDraggable(btn_ficha3);
    var ficha4 = this.input.setDraggable(btn_ficha4);
    var ficha5 = this.input.setDraggable(btn_ficha5);
    var ficha6 = this.input.setDraggable(btn_ficha6);    

    
    this.input.on('dragstart', function (pointer, gameObject) {
        // gameObject.setTint(0xff0000);
    });

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        // console.log('X: '+JSON.stringify(gameObject));
        // console.log(gameObject.textureKey);
        gameObject.x = dragX;
        gameObject.y = dragY;
    });

    this.input.on('dragend', function (pointer, gameObject) {
        // gameObject.clearTint();

        // gameObject.x = dropZone.x;
        // gameObject.y = dropZone.y;
        
    });

    // var zone = this.add.zone(500, 300, 300, 500).setDropZone();

    // //  Just a visual display of the drop zone
    // var graphics = this.add.graphics();
    // graphics.lineStyle(2, 0xffff00);
    // graphics.strokeRect(zone.x + zone.input.hitArea.x, zone.y + zone.input.hitArea.y, zone.input.hitArea.width, zone.input.hitArea.height);

    // var btn_regresarD = this.add.image(150, 720, 'regresarD').setInteractive();
    // var brn_avanzarF = this.add.image(1050, 720, 'avanzarF').setInteractive();
    var btn_regresarD = this.add.sprite(150, 720, 'regresarD',0).setInteractive();
    var brn_avanzarF = this.add.sprite(1130, 720, 'avanzarF',0).setInteractive();

    btn_regresarD.on('pointerover', function (event) {                 
        this.setFrame(1);        
    });
    btn_regresarD.on('pointerout', function (event) {
        this.setFrame(0);        
    });
    btn_regresarD.on('pointerdown', function (event) {        
        this.setFrame(1);               
    });
	btn_regresarD.on('pointerup', function (event) {
        this.setFrame(0);        
    });

    brn_avanzarF.on('pointerover', function (event) {         
        this.setFrame(1);       
    });
    brn_avanzarF.on('pointerout', function (event) {
        this.setFrame(0);        
    });
    brn_avanzarF.on('pointerdown', function (event) {
        this.setFrame(1);        
    });
	brn_avanzarF.on('pointerup', function (event) {
        this.setFrame(0);        
    });


    // btn_regresarD.once('pointerup', regresarD, this);
    // brn_avanzarF.once('pointerup', avanzarF, this);
    btn_regresarD.on('pointerdown', regresarD, this);
    brn_avanzarF.on('pointerdown', avanzarF, this);

    audio_puzzle = this.sound.add('audio_puzzle');
    // audio_puzzle.play(); 


    var loopMarker1 = {
        name: 'loop1',
        start: 0,
        duration: 15,
        config: {
            loop: true
        }
    }; 


    audio_puzzle.addMarker(loopMarker1);
    audio_puzzle.play('loop1', {
        delay: 0
    });

}



function regresarD () {
    audio_puzzle.stop();  
    // this.scene.switch('sceneD'); 
    // this.scene.stop('sceneE');
    this.scene.start('sceneD');    
    // this.scene.manager.bootScene(this);       
}


function avanzarF () {    
    audio_puzzle.stop();  
    // this.scene.switch('sceneF');   
    // this.scene.stop('sceneE');
    this.scene.start('sceneF');  
    // this.scene.manager.bootScene(this);
}

// function build_pintura1 (pieza) {
//     pieza.destroy();
// }
// function build_pintura2 () {
    
// }
// function build_pintura3 () {
    
// }
// function build_pintura4 () {
    
// }
// function build_pintura5 () {
    
// }
// function build_pintura6 () {
    
// }

function updateE () {
    var left=false;
    var right=false;
    var jump=false;
}
