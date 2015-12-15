
window.addEventListener('load', interactive);

function interactive() {

	zog("Project");

	var canvas = document.getElementById("myCanvas");
	var parent = document.getElementById("header");
	canvas.width = parent.offsetWidth;
	canvas.height = parent.offsetHeight;


	var stage = new createjs.Stage("myCanvas");
	stage.enableMouseOver(10);

	var stageW = stage.canvas.width;
	var stageH = stage.canvas.height;

		var listener = createjs.Ticker.on("tick", stage);

		createjs.Ticker.framerate = 30;

	var bed = new createjs.Bitmap("images/bed.png");
	stage.addChild(bed);

	bed.x = stageW / 2;
	bed.y = -100;
	// zim.centerReg(bed);


	var bed2 = new createjs.Bitmap("images/bed2.png");
	stage.addChild(bed2);

	bed2.x = stageW / 2;
	bed2.y = -100;
	// zim.centerReg(bed2);


	var bed3 = new createjs.Bitmap("images/bed.png");
	stage.addChild(bed3);

	bed3.x = stageW / 2;
	bed3.y = -100;
	// zim.centerReg(bed3);

	var bed4 = new createjs.Bitmap("images/bed2.png");
	stage.addChild(bed4);

	bed4.x = stageW / 2;
	bed4.y = -100;
	// zim.centerReg(bed4);

	var oneBed = document.querySelector('#oneBed');
	var twoBed = document.querySelector('#twoBed');
	var threeBed = document.querySelector('#threeBed');
	var fourBed = document.querySelector('#fourBed');

	oneBed.addEventListener('click', dropBed);
	twoBed.addEventListener('click', dropBed);
	threeBed.addEventListener('click', dropBed);
	fourBed.addEventListener('click', dropBed);

	function tweenBed1(){
		var tween = createjs.Tween.get(bed);
		tween.to({y:150}, 300, createjs.Ease.linear)
		tween.to({y:130}, 200, createjs.Ease.bounceOut)
		tween.to({y:150}, 100, createjs.Ease.bounceIn);
	}

	function tweenBed2(){
		var tween2 = createjs.Tween.get(bed2);
		tween2.wait(700)
		tween2.to({y:110}, 300, createjs.Ease.linear)
		tween2.to({y:80, rotation: 5}, 200, createjs.Ease.bounceOut)
		tween2.to({y:110}, 100, createjs.Ease.bounceIn);

	}

	function tweenBed3(){
		var tween3 = createjs.Tween.get(bed3);
		tween3.wait(1400)
		tween3.to({y:80}, 300, createjs.Ease.linear)
		tween3.to({y:50, rotation: -2}, 200, createjs.Ease.bounceOut)
		tween3.to({y:80}, 100, createjs.Ease.bounceIn);
	}

	function tweenBed4(){
			var tween4 = createjs.Tween.get(bed4);
			tween4.wait(2100)
			tween4.to({y:40}, 300, createjs.Ease.linear)
			tween4.to({y:30, rotation: 5}, 200, createjs.Ease.bounceOut)
			tween4.to({y:40}, 100, createjs.Ease.bounceIn);
	}

	function dropBed(){
		if (oneBed.checked){
			zog("clicked 1");

				stage.removeAllChildren();
				stage.addChild(bed);
				bed.x = stageW / 2;
				bed.y = -100;

				tweenBed1();

		} else if (twoBed.checked) {
				zog("clicked 2");

					stage.removeAllChildren();
					stage.addChild(bed,bed2);

					bed.x = stageW / 2;
					bed.y = -100;

					bed2.x = stageW / 2;
					bed2.y = -100;

						tweenBed1();
						tweenBed2();

		} else if (threeBed.checked) {
				zog("clicked 3");

					stage.removeAllChildren();
					stage.addChild(bed,bed2,bed3);

					bed.x = stageW / 2;
					bed.y = -100;

					bed2.x = stageW / 2;
					bed2.y = -100;

					bed3.x = stageW / 2;
					bed3.y = -100;

					tweenBed1();
					tweenBed2();
					tweenBed3();


	} else if (fourBed.checked) {
			zog("clicked 4");
				stage.removeAllChildren();
				stage.addChild(bed,bed2,bed3,bed4);

				bed.x = stageW / 2;
				bed.y = -100;

				bed2.x = stageW / 2;
				bed2.y = -100;

				bed3.x = stageW / 2;
				bed3.y = -100;

				bed4.x = stageW / 2;
				bed4.y = -100;

			tweenBed1();
			tweenBed2();
			tweenBed3();
			tweenBed4();

}
	}

	var pets = new createjs.Bitmap("images/pets.png");
	stage.addChild(pets);

	pets.x = stageW / 2;
	pets.y = stageH / 2;
	pets.alpha = 0;
	pets.setBounds(0, 0, 132, 91);

	zim.centerReg(pets);

	var petsY = new createjs.Bitmap("images/pets-yes.png");
	stage.addChild(pets);

	petsY.x = stageW / 2;
	petsY.y = stageH / 2;
	petsY.alpha = 0;
	petsY.setBounds(0, 0, 102, 96);

	zim.centerReg(petsY);

	var petsN = new createjs.Bitmap("images/pets-no.png");
	stage.addChild(pets);

	petsN.x = stageW / 2;
	petsN.y = stageH / 2;
	petsN.alpha = 0;
	petsN.setBounds(0, 0, 79, 79);

	zim.centerReg(petsN);

	var yesPet = document.querySelector('#yesPet');
	var noPet = document.querySelector('#noPet');

	yesPet.addEventListener('click', petAppear);
	noPet.addEventListener('click', petAppear);


	function petAppear(){

		if (yesPet.checked){
			zog("clicked 1");

				stage.removeAllChildren();
				stage.addChild(pets,petsY);
				pets.alpha=0;
				petsY.alpha=0;

				pets.x = stageW / 2;
				pets.y = stageH / 2;
				petsY.x = stageW / 2;
				petsY.y = stageH / 2;

				var tween = createjs.Tween.get(pets);
				tween.to({alpha:1}, 300, createjs.Ease.linear);
				var tween2 = createjs.Tween.get(petsY);
				tween2.wait(350)
				tween2.to({alpha:1}, 500, createjs.Ease.bounceIn);
		}

		else if (noPet.checked){
			zog("clicked 2");

				stage.removeAllChildren();
				stage.addChild(pets);
				stage.addChild(petsN);
				pets.x = stageW / 2;
				pets.y = stageH / 2;
				petsN.x = stageW / 2-10;
				petsN.y = stageH / 2+3;
				pets.alpha=0;
				petsN.alpha=0;

				var tween = createjs.Tween.get(pets);
				tween.to({alpha:1}, 300, createjs.Ease.linear);
				var tween2 = createjs.Tween.get(petsN);
				tween2.wait(350)
				tween2.to({alpha:1}, 500, createjs.Ease.bounceIn);
		}

	}

				stage.update();
	}
