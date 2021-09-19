
let furby;
let baby;
let babyX;
let babyY;

//this is for big media files
// so they load up before they need to show up in code
function preload(){

	//js is loaded in the HTML head, so its the files
	//relative to the HTML file in question
	furby = loadImage("images/furby.png");
	baby = loadImage("images/dancingbaby2.gif");

}

function setup(){

	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);

	babyX = random(windowWidth);
	babyY = random(200, 500);	
}

function draw(){

	background(0);

	image(furby, mouseX, mouseY);

	image(baby, babyX, babyY, 500, 500);

}


function mouseReleased(){
		
	babyX = random(windowWidth);
	babyY = random(200, 500);

	}







