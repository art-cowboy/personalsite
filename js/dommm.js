
let canvas;
let button;

let modem;
let modemSlider;

let baby;
let babyX = 400;


function preload(){
	modem = loadSound("audio/ModemSound.mp3");
}

function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.style('z-index','-1');
	canvas.position(0,0);
	background(120);

	button = createButton("play");
	button.mousePressed(playToggle);

	modemSlider = createSlider(0, 3, 1.5, 0.01);

	modem.setVolume(0.5);
	print(modem.duration());

	baby = createImg('images/dancingbaby2.gif');

}

function playToggle(){

	if (!modem.isPlaying()) {
		modem.play();
		button.html("pause")
	}else{
		modem.pause();
		button.html("play")
	}
}

function draw(){
	modem.rate(modemSlider.value());
	baby.position(babyX, 400);
	babyX = babyX + 2;

	if (babyX > windowWidth){
		babyX = -10;
	}

}

