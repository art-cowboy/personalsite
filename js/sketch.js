
//just demontating the custom variable, global variable
var hehe = 300;



//stuff in setup runs one time
function setup() {
 
	createCanvas(windowWidth, windowHeight);

	//call this once, then all rectangles are centered	
	rectMode(CENTER);

	//want to call this earlier bc it comes first it will be behind
	background(116, 158, 184)

	//goes up by 1 as long as its true (loop until the 500 number)
	//and will do this once, then go back to draw
	for (var i = 0; i < 500; i++) {
		ellipse(random(windowWidth), random(windowHeight), 20, 20);
	}


}

//if you put bg in setup, it will run once
//so the ellipse will draw over it, if not
//it draws it everytime and so it will  cover  th tracer


//stuff in draw runs in a loop
function draw() {

	// if (mouseX > windowWidth/2){

	// 		background(255,0, 0)

	// 	} else {
	// 		background(116, 158, 184)
	// 	}

		
	strokeWeight(20);
	stroke(255);
	point(400,200);

	stroke(255);
	//x, y, x2 , y2
	line(700, hehe, 500, 500,);

	strokeWeight(10);
	fill(173, 209, 125);
	stroke(0);
	//center point, w, h
	ellipse(mouseX, mouseY, 200, 100);

	noStroke(); 
 	fill(227, 186, 245);
 	//changed rectMode to center, so x,y is center the w, h
	rect(hehe, 600, 200, hehe);

	noFill();
	stroke(0);
	//3 different (x,y)	pairs 
	triangle(500, 500, hehe, 500, 500, 400);



}

function windowResized(){
	//resises the canvas on resize event 
	resizeCanvas(windowWidth, windowHeight);
	
}