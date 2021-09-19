

let ballX;
let ballY;

let ballXspeed;
let ballYspeed;

let mouseCollide;

let score = 0;


function preload(){


}


function setup(){
	createCanvas(windowWidth, windowHeight);

	ballX = random(15, windowWidth - 15);
	ballY = random(15, windowHeight - 15);

	ballXspeed = 2;
	ballYspeed = 2;
}

function draw(){

	background(0);
	fill(255);

	textAlign(CENTER);
	textSize(40);
	text("Score: " + score + "00", windowWidth/2, 50);

	mouseCollide = dist(mouseX, mouseY, ballX, ballY);

	ellipse(ballX, ballY, 30,30);

	ballX = ballX + ballXspeed;
	ballY = ballY + ballYspeed;

	if(ballX >= windowWidth - 15 || ballX <=15){
		ballXspeed = ballXspeed * -1;

	}

	if(ballY >= windowHeight - 15 || ballY <=15){
		ballYspeed = ballYspeed * -1;
	}

	if (mouseCollide < 15){
		print("got it");
		score++;
		ballX = random(15, windowWidth - 15);
		ballY = random(15, windowHeight - 15);
		ballXspeed = ballXspeed * 1.2;
		ballYspeed = ballYspeed * 1.2;
	}

}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}







