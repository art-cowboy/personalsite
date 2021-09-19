


let carmove;
let canvas;
let c1;
let c2;
let ouch = [];
let oops = [];
let x;
let x1, x2, x3, x4;
let w1, w2, w3, w4;
let y1, y2;



function preload(){

	carmove = createImg("images/drive2.gif");


}

function setup(){

	canvas = createCanvas(windowWidth, windowHeight);
	c1 = color(0);
  	c2 = color(64, 55, 115);
  	imageMode(CENTER);
  	x = windowWidth + 50;
  	x1 = windowWidth;
  	x2 = windowWidth + 30;
  	x3 = windowWidth + 35;
  	x4 = windowWidth -5;
  	w1 = windowWidth/2 ;
  	w2 = windowWidth/2 + 30;
  	w3 = windowWidth/2 + 35;
  	w4 = windowWidth/2 - 5;
  	y1 = 455;
  	y2 = 460;

}
	

function draw(){

	noStroke();
	setGradient(c1, c2);

	fill(75, 82, 97)
	rect(0, 425, windowWidth, 200);
	fill(101, 105, 115)
	rect(0, 450, windowWidth, 50);
	carmove.position(400, 410);


	push();
	fill(169, 178, 201);
	x = x - .3;
	ellipse(x, 200, 100, 100);
	if (x < -50 ){
		x = windowWidth + 50;
	}
	pop();

	push();
	fill(237, 220, 66);
	x1 = x1 - 20;
	x2 = x2 - 20;
	x3 = x3 - 20;
	x4 = x4 - 20;
	quad(x1, y1, x2, y1, x3, y2, x4, y2) ;

	if (x3 < 0){
	x1 = windowWidth;
  	x2 = windowWidth + 30;
  	x3 = windowWidth + 35;
  	x4 = windowWidth -5;
	}
	pop();

	push();
	fill(237, 220, 66);
	w1 = w1 - 20;
	w2 = w2 - 20;
	w3 = w3 - 20;
	w4 = w4 - 20;
	quad(w1, y1, w2, y1, w3, y2, w4, y2) ;

	if (w3 < 0){
	w1 = windowWidth;
  	w2 = windowWidth + 30;
  	w3 = windowWidth + 35;
  	w4 = windowWidth -5;
	}
	pop();




}

function setGradient(c1, c2) {
	noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}



