//
// var scaling = "fit";
// var width = 1000;
// var height = 200;
// var frame = new zim.Frame(scaling, width, height);
// frame.on("ready", function() {
//
window.addEventListener("load", city);

function city(){
	var canvas = document.getElementById("myCanvas");
	var parent = document.getElementById("top");
	canvas.width = parent.offsetWidth;
	canvas.height = parent.offsetHeight;


	var stage = new createjs.Stage("myCanvas");
	stage.enableMouseOver(10);

	var stageW = stage.canvas.width;
	var stageH = stage.canvas.height;


			var spriteSheet = new createjs.SpriteSheet({
					framerate: 10,
					"images": ["images/skyline.png"],
					"frames": {"regX": 0, "height": 150, "count": 62, "regY": 0, "width": 725},
					// define two animations, run (loops, 1.5x speed) and jump (returns to run):
					"animations": {
						"draw": [0, 61, false]
					}

							});

					var skyline = new createjs.Sprite(spriteSheet, "draw");
					stage.addChild(skyline);

					skyline.x = stageW / 2;
					skyline.y = stageH / 2;

					skyline.setBounds(0,0,725,150);
					zim.centerReg(skyline);



					createjs.Ticker.timingMode = createjs.Ticker.RAF;
					createjs.Ticker.addEventListener("tick", stage);


				stage.update();
			}
	// });
