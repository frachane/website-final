
window.addEventListener('load', form);

function form() {

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

		createjs.Ticker.framerate = 60;

	var bed = new createjs.Bitmap("images/bed.png");

	bed.x = stageW / 2;
	bed.y = -100;
	bed.setBounds(0, 0, 96, 46);
	zim.centerReg(bed);


	var bed2 = new createjs.Bitmap("images/bed2.png");

	bed2.x = stageW / 2;
	bed2.y = -100;
	bed2.setBounds(0, 0, 96, 46);
	zim.centerReg(bed2);


	var bed3 = new createjs.Bitmap("images/bed.png");

	bed3.x = stageW / 2;
	bed3.y = -100;
	bed3.setBounds(0, 0, 96, 46);
	zim.centerReg(bed3);

	var bed4 = new createjs.Bitmap("images/bed2.png");

	bed4.x = stageW / 2;
	bed4.y = -100;
	bed4.setBounds(0, 0, 96, 46);
	zim.centerReg(bed4);

	var bed5 = new createjs.Bitmap("images/bed.png");

	bed5.x = stageW / 2;
	bed5.y = -100;
	bed5.setBounds(0, 0, 96, 46);
	zim.centerReg(bed5);

	var oneBed = document.querySelector('#oneBed');
	var twoBed = document.querySelector('#twoBed');
	var threeBed = document.querySelector('#threeBed');
	var fourBed = document.querySelector('#fourBed');
	var fiveBed = document.querySelector('#fiveBed');

	oneBed.addEventListener('click', dropBed);
	twoBed.addEventListener('click', dropBed);
	threeBed.addEventListener('click', dropBed);
	fourBed.addEventListener('click', dropBed);
	fiveBed.addEventListener('click', dropBed);

	function tweenBed1(){
		var tween = createjs.Tween.get(bed);
		tween.to({y:170}, 300, createjs.Ease.linear)
		tween.to({y:150}, 200, createjs.Ease.bounceOut)
		tween.to({y:170}, 100, createjs.Ease.bounceIn);
	}

	function tweenBed2(){
		var tween2 = createjs.Tween.get(bed2);
		tween2.wait(700)
		tween2.to({y:140}, 300, createjs.Ease.linear)
		tween2.to({y:110, rotation: 5}, 200, createjs.Ease.bounceOut)
		tween2.to({y:140}, 100, createjs.Ease.bounceIn);

	}

	function tweenBed3(){
		var tween3 = createjs.Tween.get(bed3);
		tween3.wait(1400)
		tween3.to({y:110}, 300, createjs.Ease.linear)
		tween3.to({y:80, rotation: -2}, 200, createjs.Ease.bounceOut)
		tween3.to({y:110}, 100, createjs.Ease.bounceIn);
	}

	function tweenBed4(){
			var tween4 = createjs.Tween.get(bed4);
			tween4.wait(2100)
			tween4.to({y:80}, 300, createjs.Ease.linear)
			tween4.to({y:40, rotation: 5}, 200, createjs.Ease.bounceOut)
			tween4.to({y:80}, 100, createjs.Ease.bounceIn);
	}

	function tweenBed5(){
			var tween5 = createjs.Tween.get(bed5);
			tween5.wait(2800)
			tween5.to({y:50}, 300, createjs.Ease.linear)
			tween5.to({y:30, rotation: -2}, 200, createjs.Ease.bounceOut)
			tween5.to({y:50 }, 100, createjs.Ease.bounceIn);
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
else if (fiveBed.checked) {
		zog("clicked 5");
			stage.removeAllChildren();
			stage.addChild(bed,bed2,bed3,bed4,bed5);

			bed.x = stageW / 2;
			bed.y = -100;

			bed2.x = stageW / 2;
			bed2.y = -100;

			bed3.x = stageW / 2;
			bed3.y = -100;

			bed4.x = stageW / 2;
			bed4.y = -100;

			bed5.x = stageW / 2;
			bed5.y = -100;

		tweenBed1();
		tweenBed2();
		tweenBed3();
		tweenBed4();
		tweenBed5();

}
	}

	var toliet = new createjs.Bitmap("images/toliet.png");

	toliet.x = stageW / 2;
	toliet.y = -100;
	toliet.setBounds(0, 0, 85, 101);
	zim.centerReg(toliet);

	var toliet2 = new createjs.Bitmap("images/toliet2.png");

	toliet2.x = stageW / 2-8;
	toliet2.y = -100;
	toliet2.setBounds(0, 0, 85, 101);
	zim.centerReg(toliet2);

	var toliet3 = new createjs.Bitmap("images/toliet.png");

	toliet3.x = stageW / 2;
	toliet3.y = -100;
	toliet3.setBounds(0, 0, 85, 101);
	zim.centerReg(toliet3);


		var oneBath = document.querySelector('#oneBath');
		var twoBath = document.querySelector('#twoBath');
		var threeBath = document.querySelector('#threeBath');

		oneBath.addEventListener('click', dropBath);
		twoBath.addEventListener('click', dropBath);
		threeBath.addEventListener('click', dropBath);

	function tweenBath1(){
		var tween = createjs.Tween.get(toliet);
		tween.to({y:170}, 300, createjs.Ease.linear)
		tween.to({y:150}, 200, createjs.Ease.bounceOut)
		tween.to({y:170}, 100, createjs.Ease.bounceIn);
	}

	function tweenBath2(){
		var tween2 = createjs.Tween.get(toliet2);
		tween2.wait(700)
		tween2.to({y:130}, 300, createjs.Ease.linear)
		tween2.to({y:110}, 200, createjs.Ease.bounceOut)
		tween2.to({y:130, rotation: 2}, 100, createjs.Ease.bounceIn);

	}

	function tweenBath3(){
		var tween3 = createjs.Tween.get(toliet3);
		tween3.wait(1400)
		tween3.to({y:90}, 300, createjs.Ease.linear)
		tween3.to({y:70}, 200, createjs.Ease.bounceOut)
		tween3.to({y:90, rotation:-2}, 100, createjs.Ease.bounceIn);
	}

	function dropBath(){
		if (oneBath.checked){

				stage.removeAllChildren();
				stage.addChild(toliet);

				toliet.x = stageW / 2;
				toliet.y = -100;

				tweenBath1();

		} else if (twoBath.checked) {

					stage.removeAllChildren();
					stage.addChild(toliet,toliet2);

					toliet.x = stageW / 2;
					toliet.y = -100;

					toliet2.x = stageW / 2-8;
					toliet2.y = -100;

						tweenBath1();
						tweenBath2();

		} else if (threeBath.checked) {
				zog("clicked 3");

					stage.removeAllChildren();
					stage.addChild(toliet, toliet2, toliet3);

					toliet.x = stageW / 2;
					toliet.y = -100;

					toliet2.x = stageW / 2-8;
					toliet2.y = -100;

					toliet3.x = stageW / 2;
					toliet3.y = -100;

					tweenBath1();
					tweenBath2();
					tweenBath3();

	}
}


	var smoke = new createjs.Bitmap("images/smoke.png");
	stage.addChild(smoke);

	smoke.x = stageW / 2;
	smoke.y = stageH / 2;
	smoke.alpha = 0;
	smoke.setBounds(0, 0, 101, 101);
	zim.centerReg(smoke);

	var smokeY = new createjs.Bitmap("images/smoke-yes.png");
	stage.addChild(pets);

	smokeY.x = stageW / 2;
	smokeY.y = stageH / 2;
	smokeY.alpha = 0;
	smokeY.setBounds(0, 0, 101, 101);

	zim.centerReg(smokeY);

	var smokeN = new createjs.Bitmap("images/smoke-no.png");
	stage.addChild(pets);

	smokeN.x = stageW / 2;
	smokeN.y = stageH / 2;
	smokeN.alpha = 0;
	smokeN.setBounds(0, 0, 101, 101);

	zim.centerReg(smokeN);

	var yesSmoke = document.querySelector('#smoking_yes');
	var noSmoke = document.querySelector('#smoking_no');

	yesSmoke.addEventListener('click', smokeAppear);
	noSmoke.addEventListener('click', smokeAppear);


	function smokeAppear(){

		if (yesSmoke.checked){

				stage.removeAllChildren();
				stage.addChild(smoke,smokeY);
				smoke.alpha=0;
				smokeY.alpha=0;

				smoke.x = stageW / 2;
				smoke.y = stageH / 2;
				smokeY.x = stageW / 2;
				smokeY.y = stageH / 2;

				var tween = createjs.Tween.get(smoke);
				tween.to({alpha:1}, 300, createjs.Ease.linear);
				var tween2 = createjs.Tween.get(smokeY);
				tween2.wait(350)
				tween2.to({alpha:1}, 500, createjs.Ease.bounceIn);
		}

		else if (noSmoke.checked){

				stage.removeAllChildren();
				stage.addChild(smoke);
				stage.addChild(smokeN);
				smoke.x = stageW / 2;
				smoke.y = stageH / 2;
				smokeN.x = stageW / 2;
				smokeN.y = stageH / 2;
				smoke.alpha=0;
				smokeN.alpha=0;

				var tween = createjs.Tween.get(smoke);
				tween.to({alpha:1}, 300, createjs.Ease.linear);
				var tween2 = createjs.Tween.get(smokeN);
				tween2.wait(350)
				tween2.to({alpha:1}, 500, createjs.Ease.bounceIn);
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

	var yesPet = document.querySelector('#pets_yes');
	var noPet = document.querySelector('#pets_no');

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

			var january = new createjs.Bitmap("images/january.png");
			january.setBounds(0,0,228,182);
			zim.centerReg(january);
			january.alpha = 0;

			var february = new createjs.Bitmap("images/february.png");
			february.setBounds(0,0,228,182);
			zim.centerReg(february);

			var march = new createjs.Bitmap("images/march.png");
			march.setBounds(0,0,228,182);
			zim.centerReg(march);

			var april = new createjs.Bitmap("images/april.png");
			april.setBounds(0,0,228,182);
			zim.centerReg(april);

			var may = new createjs.Bitmap("images/may.png");
			may.setBounds(0,0,228,182);
			zim.centerReg(may);

			var june = new createjs.Bitmap("images/june.png");
			june.setBounds(0,0,228,182);
			zim.centerReg(june);

			var july = new createjs.Bitmap("images/july.png");
			july.setBounds(0,0,228,182);
			zim.centerReg(july);

			var august = new createjs.Bitmap("images/august.png");
			august.setBounds(0,0,228,182);
			zim.centerReg(august);

			var september = new createjs.Bitmap("images/september.png");
			september.setBounds(0,0,228,182);
			zim.centerReg(september);

			var october = new createjs.Bitmap("images/october.png");
			october.setBounds(0,0,228,182);
			zim.centerReg(october);

			var november = new createjs.Bitmap("images/november.png");
			november.setBounds(0,0,228,182);
			zim.centerReg(november);

			var december = new createjs.Bitmap("images/december.png");
			december.setBounds(0,0,228,182);
			zim.centerReg(december);



			var month = document.querySelector('#month');

			function calenderAppear(){
				createjs.Tween.get(january)
				.to({alpha:1}, 300, createjs.Ease.linear);
			}

			month.addEventListener("input", function calender(){
				if(month.value == "January"){
					stage.removeAllChildren();
					january.x = stageW / 2;
					january.y = stageH / 2+5;
					stage.addChild(january);
					// calenderAppear();
				}
				else if(month.value == "February"){
					stage.removeAllChildren();
					february.x = stageW / 2;
					february.y = stageH / 2+5;
					stage.addChild(february);
					calenderAppear();
				}
				else if(month.value == "March"){
					stage.removeAllChildren();
					march.x = stageW / 2;
					march.y = stageH / 2+5;
					stage.addChild(march);
				}
				else if(month.value == "April"){
					stage.removeAllChildren();
					april.x = stageW / 2;
					april.y = stageH / 2+5;
					stage.addChild(april);
				}
				else if(month.value == "May"){
					stage.removeAllChildren();
					may.x = stageW / 2;
					may.y = stageH / 2+5;
					stage.addChild(may);
				}
				else if(month.value == "June"){
					stage.removeAllChildren();
					june.x = stageW / 2;
					june.y = stageH / 2+5;
					stage.addChild(june);
				}
				else if(month.value == "July"){
					stage.removeAllChildren();
					july.x = stageW / 2;
					july.y = stageH / 2+5;
					stage.addChild(july);
				}
				else if(month.value == "August"){
					stage.removeAllChildren();
					august.x = stageW / 2;
					august.y = stageH / 2+5;
					stage.addChild(august);
				}
				else if(month.value == "September"){
					stage.removeAllChildren();
					september.x = stageW / 2;
					september.y = stageH / 2+5;
					stage.addChild(september);
				}
				else if(month.value == "October"){
					stage.removeAllChildren();
					october.x = stageW / 2;
					october.y = stageH / 2+5;
					stage.addChild(october);
				}
				else if(month.value == "November"){
					stage.removeAllChildren();
					november.x = stageW / 2;
					november.y = stageH / 2+5;
					stage.addChild(november);
				}
				else if(month.value == "December"){
					stage.removeAllChildren();
					december.x = stageW / 2;
					december.y = stageH / 2+5;
					stage.addChild(december);
				}

			})

				stage.update();
	}
