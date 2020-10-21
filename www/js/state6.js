
function preloadF () {
	this.load.image('game1_c','assets/game1_c.png');

	// this.load.image('regresarE','assets/regresar.png');
 //    this.load.image('avanzarG','assets/avanzar.png');

 	this.load.spritesheet('regresarE', 'assets/regresar_sprite.png', {frameWidth:100, frameHeight:94});
    this.load.spritesheet('avanzarG', 'assets/avanzar_sprite.png', {frameWidth:100, frameHeight:94});  

    this.load.audio('audio_pintura', [        
        'assets/pintura_azul.mp3'
    ]);
    
}

var audio_pintura;


function createF () {
    this.add.image(640, 400, 'game1_c');

    // this.input.on('pointerdown', function () {    
    //     this.input.stopPropagation();
    //     this.scene.switch('sceneG');    
    // }, this);

	// var btn_regresarE = this.add.image(150, 720, 'regresarE').setInteractive();
 //    var btn_avanzarG = this.add.image(1050, 720, 'avanzarG').setInteractive();

 	var btn_regresarE = this.add.sprite(150, 720, 'regresarE',0).setInteractive();
    var btn_avanzarG = this.add.sprite(1130, 720, 'avanzarG',0).setInteractive();

    btn_regresarE.on('pointerover', function (event) {                 
        this.setFrame(1);        
    });
    btn_regresarE.on('pointerout', function (event) {
        this.setFrame(0);        
    });
    btn_regresarE.on('pointerdown', function (event) {        
        this.setFrame(1);               
    });
	btn_regresarE.on('pointerup', function (event) {
        this.setFrame(0);        
    });

    btn_avanzarG.on('pointerover', function (event) {         
        this.setFrame(1);       
    });
    btn_avanzarG.on('pointerout', function (event) {
        this.setFrame(0);        
    });
    btn_avanzarG.on('pointerdown', function (event) {
        this.setFrame(1);        
    });
	btn_avanzarG.on('pointerup', function (event) {
        this.setFrame(0);        
    });

    // btn_regresarE.once('pointerup', regresarE, this);
    // btn_avanzarG.once('pointerup', avanzarG, this);
    btn_regresarE.on('pointerdown', regresarE, this);
    btn_avanzarG.on('pointerdown', avanzarG, this);

    audio_pintura = this.sound.add('audio_pintura');
    audio_pintura.play();
}


function regresarE () {
	audio_pintura.stop();
	// this.scene.stop('sceneF');   
    this.scene.switch('sceneE');    
    // this.scene.start('sceneE');
    // this.scene.manager.bootScene(this);    
}


function avanzarG () {   
	audio_pintura.stop(); 
    // this.scene.switch('sceneG'); 
    // this.scene.stop('sceneF');   
    this.scene.start('sceneG');
    // this.scene.manager.bootScene(this);
    
}

function updateF () {

}
