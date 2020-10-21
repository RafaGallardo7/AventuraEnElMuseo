function preloadC () {
	this.load.image('fondo_menu','assets/fondo_menu.png');

	this.load.image('btn_menu1','assets/btn_menu1.png');
	this.load.image('btn_menu2','assets/btn_menu2.png');
	this.load.image('btn_menu3','assets/btn_menu3.png');
}

function createC () {
	audio_intro.stop();  
	
	this.add.image(640, 400, 'fondo_menu');

	var btn1 = this.add.image(640, 400, 'btn_menu1').setInteractive();
	// var btn1 = this.add.image(300, 400, 'btn_menu1').setInteractive();
	// var btn2 = this.add.image(600, 400, 'btn_menu2');
	// var btn3 = this.add.image(900, 400, 'btn_menu3');

	// btn1.inputEnabled = true;
	// text = game.add.text(250, 16, '', { fill: '#ffffff' });
    // btn1.events.onInputDown.add(listener, this);

	
	btn1.once('pointerup', avanzar_game1, this);
   
}

function avanzar_game1 () {
    // counter++;
    // text.text = "You clicked " + counter + " times!";
    // this.scene.switch('sceneD'); 
    // this.scene.stop('sceneC');
    var left=false;
	var right=false;
	var jump=false;
    this.scene.start('sceneD');
    // this.scene.manager.bootScene(this);   
}


function updateC () {

}