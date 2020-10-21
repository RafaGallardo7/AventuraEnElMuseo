document.addEventListener('deviceready', function() {
	
	var sceneConfigA = {key:'sceneA', create:createA, preload:preloadA, update:updateA};
	var sceneConfigB = {key:'sceneB', create:createB, preload:preloadB, update:updateB};
	var sceneConfigC = {key:'sceneC', create:createC, preload:preloadC, update:updateC};
	var sceneConfigD = {key:'sceneD', create:createD, preload:preloadD, update:updateD};
	var sceneConfigE = {key:'sceneE', create:createE, preload:preloadE, update:updateE};
	var sceneConfigF = {key:'sceneF', create:createF, preload:preloadF, update:updateF};
	var sceneConfigG = {key:'sceneG', create:createG, preload:preloadG, update:updateG};

	var GAME_WIDTH = 1280;
	var GAME_HEIGHT = 800;
	// var GAME_HEIGHT = screen.height;
	// var GAME_WIDTH = screen.width;
	
	//var GAME_WIDTH = window.innerWidth * window.devicePixelRatio;
//	var GAME_HEIGHT = window.innerHeight * window.devicePixelRatio;

var w = window.innerWidth * window.devicePixelRatio;
var h = window.innerHeight * window.devicePixelRatio;
// var GAME_WIDTH = (h > w) ? h : w;
// var GAME_HEIGHT = (h > w) ? w : h;

		
	var gameConfig = {
		// type: Phaser.Auto,
		type: Phaser.CANVAS,
		//type: Phaser.WEBGL,
		parent: 'phaser-example',
		width: GAME_WIDTH,
		height: GAME_HEIGHT,
		backgroundColor: '#000000',
		physics: {
			default: 'arcade',
			arcade: {
				gravity: {y: 500},
				debug: false
			}
		},
		scene: [sceneConfigA,sceneConfigB,sceneConfigC,sceneConfigD,sceneConfigE,sceneConfigF,sceneConfigG]
		// audio: {
		// 	disableWebAudio: true
		// }
	};

	//var gameConfig1 = {
	  //  type: Phaser.CANVAS,
	  //  parent: 'phaser-example',
	  //  width: window.innerWidth * window.devicePixelRatio,
	  //  height: window.innerHeight * window.devicePixelRatio,
	  // 	scene: [sceneConfigA,sceneConfigB,sceneConfigC,sceneConfigD,sceneConfigE,sceneConfigF,sceneConfigG]
	//};

	//document.addEventListener("deviceready", onDeviceReady, false);

	var game = new Phaser.Game(gameConfig);
	// var game = new Phaser.Game(gameConfig);

	//function onDeviceReady() {
		//game.state.start('Boot');
	//	this.scene.start('sceneB');
	//}

	var scaleRatio = window.devicePixelRatio / 3;
	// console.log(scaleRatio);

	function preloadA () {
		this.load.image('init','assets/init.png');
		this.load.image('icon_init','assets/icon_init.png');
		this.load.image('btn_init','assets/btn_init.png');
	}

	var isInitializedInPortrait;

	function createA () {

		//game.stage.backgroundColor = "#4488AA";

		window.addEventListener('resize', resize);
    	resize();

		// this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		
		//this.scale.forceOrientation(true,false);
		//this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

		var init = this.add.image(640, 400, 'init');

		// var icon_init = this.add.image(640, 400, 'icon_init');
		var btn_init = this.add.image(640, 500, 'btn_init').setInteractive();

		// var icon_init = this.add.image(640, 400, 'icon_init');
		// setTimeout(function(){ 
		// 	var icon_init = this.add.image(640, 400, 'icon_init');
		// }, 1000);

		// setTimeout(function(){
  //   		// player_intro.setFrame(2);        
  //   		this.add.image(640, 400, 'icon_init');
  //   	}, 500)

		animacionName = this.time.addEvent({
			delay:500,
			callback:onEventName,
			callbackScope:this,
			repeat:1
		});

		btn_init.once('pointerup', avanza_screen2, this);

		


		// this.input.on('pointerdown', function () {
		// 	this.input.stopPropagation();
		// 	this.scene.switch('sceneB');
		// 	this.scene.manager.bootScene(this);
		// }, this);
	}

	function onEventName () {
		var icon_init = this.add.image(640, 300, 'icon_init');
	}

	function avanza_screen2 () {
		this.scene.switch('sceneB');
	}

	function updateA () {

	}

	function resize() {
	    var canvas = game.canvas, width = window.innerWidth, height = window.innerHeight;
	    var wratio = width / height, ratio = canvas.width / canvas.height;
	 
	    if (wratio < ratio) {
	        canvas.style.width = width + "px";
	        canvas.style.height = (width / ratio) + "px";
	    } else {
	        canvas.style.width = (height * ratio) + "px";
	        canvas.style.height = height + "px";
	    }
	}


	//btn1.destroy();
	//btn1 = null;

	// function update () {
	//     if (btn1) {
	//         btn1.rotation += 0.01;
	//     }
	// }

});

if (!window.cordova) {
    window.dispatchEvent('deviceready');
}
