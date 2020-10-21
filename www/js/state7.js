
function preloadG () {
	this.load.image('game1_d','assets/game1_d.png');

	// this.load.image('regresarF','assets/regresar.png');
 //    this.load.image('menu','assets/menu.png');

 	this.load.spritesheet('regresarF', 'assets/regresar_sprite.png', {frameWidth:100, frameHeight:94});
    this.load.spritesheet('menu', 'assets/menu_sprite.png', {frameWidth:100, frameHeight:94});    

    this.load.audio('audio_autor', [        
        'assets/honorato_vazquez.mp3'
    ]); 
}

var audio_autor;

function createG () {
    this.add.image(640, 400, 'game1_d');

    // var btn_regresarF = this.add.image(150, 720, 'regresarF').setInteractive();
    // var btn_menu = this.add.image(1050, 720, 'menu').setInteractive();

    var btn_regresarF = this.add.sprite(150, 720, 'regresarF',0).setInteractive();
    var btn_menu = this.add.sprite(1130, 720, 'menu',0).setInteractive();

    btn_regresarF.on('pointerover', function (event) {                 
        this.setFrame(1);        
    });
    btn_regresarF.on('pointerout', function (event) {
        this.setFrame(0);        
    });
    btn_regresarF.on('pointerdown', function (event) {        
        this.setFrame(1);               
    });
	btn_regresarF.on('pointerup', function (event) {
        this.setFrame(0);        
    });

    btn_menu.on('pointerover', function (event) {         
        this.setFrame(1);       
    });
    btn_menu.on('pointerout', function (event) {
        this.setFrame(0);        
    });
    btn_menu.on('pointerdown', function (event) {
        this.setFrame(1);        
    });
	btn_menu.on('pointerup', function (event) {
        this.setFrame(0);        
    });

    // btn_regresarF.once('pointerup', regresarF, this);
    // btn_menu.once('pointerup', regresarC, this);
    btn_regresarF.on('pointerdown', regresarF, this);
    btn_menu.on('pointerdown', regresarC, this);

    audio_autor = this.sound.add('audio_autor');
    audio_autor.play();
}

function regresarF () {
    audio_autor.stop();
    // this.scene.switch('sceneF');  
    // this.scene.stop('sceneG');  
    this.scene.start('sceneF'); 
    // this.scene.manager.bootScene(this);
    
}


function regresarC () {
	audio_autor.stop();  
    var left=false;
    var right=false;
    var jump=false;  
    // this.scene.switch('sceneC');    
    // this.scene.stop('sceneG');  
    this.scene.start('sceneC');
    // this.scene.manager.bootScene(this);    
}

function updateG () {

}