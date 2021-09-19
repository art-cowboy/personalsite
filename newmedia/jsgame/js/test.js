
let carmove;
let canvas;
let c1;
let c2;
let ouch = [];
let oops = [];
let x;
let x1, x2, x3, x4;
let y1, y2;

function preload(){

	carmove = createImg("images/drive.gif");


}

function setup(){

  	x = windowWidth + 50;
  	x1 = windowWidth - 20;
  	x2 = windowWidth;
  	x3 = windowWidth - 25;
  	x4 = windowWidth + 5;
  	y1 = 210;
  	y2 = 220;

}
	

function draw(){

	noStroke();

	push();
	x1 = x1 + 3;
	x2 = x2 + 3;
	x3 = x3 + 3;
	x4 = x4 + 3;
	quad(x1, y1, x2, y1, x3, y2, x4, y2);
	pop();

}



