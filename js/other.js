let x = [];

let y = [];

let furby;

function preload(){
	furby = loadImage("images/furby.png")
}

function setup(){

	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);
}

function draw(){

	background(0);
	for(var i = 0; i < x.length; i++){
		image(furby, x[i], y[i], 60, 60);
		if(dist(mouseX, mouseY, x[i], y[i]) < 30){
			x.splice(i,1);
			y.splice(i,1);
		}
	}

	print(x.length);
}

function keyPressed(){

	if(key === 'a'){
		x.push(random(windowWidth));
		y.push(random(windowHeight));
	}
}