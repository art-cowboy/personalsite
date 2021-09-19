
let sqrBrushBool = false;
let ellBrushBool = false;

function setup(){

	createCanvas(windowWidth, windowHeight);

	background(255);

	rectMode(CENTER);
}


function draw(){

	if(ellBrushBool == true){
		ellBrush();
	}

	if(sqrBrushBool == true){
		sqrBrush();
	}

}

function keyPressed(){
	if(key === 'e'){
		sqrBrushBool = false;
		ellBrushBool = true;
	}

	if(key === 'r'){
		sqrBrushBool = true;
		ellBrushBool = false;
	}
}

function sqrBrush(){

	fill(random(255),random(255),random(255),50);
	rect(mouseX, mouseY, 50, 50);

}

function ellBrush(){
	fill(random(255),random(255),random(255),50);
	ellipse(mouseX, mouseY, 80, 80);
}