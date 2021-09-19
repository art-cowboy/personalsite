

let canvas;
let buttonAsk;
let selectOne;
let buttonAsk2;
let buttonAsk3;
let buttonAsk4;
let buttonAsk5;
let buttonAsk6;
let buttonAsk7;
let hahajk;
let vroom;
let piss = [];
let shit = [];
let evilButton;
let check;
let check1;
let check2;
let check3;
let check4;
let check5;
let check6;
let check7;
let check8;
let check9;
let check10;
let check11;
let check12;
let highway;
let driveloop;
let ouch = [];
let oops = [];
let loserButton;
let selectHouse;
let pretty;
let spooky;
let funky;
let bland;
let neato;
let yes;
let oof;
let no;
let oop;

let sOneOptions = ['how did i get here?','how do i work this?','where is that large automobile?',
'what is that beautiful house?','where does that highway go to?','am i right?','am i wrong?']

function preload(){
	vroom = loadSound("audio/lets ride-loop.mp3");
	hahajk = loadSound("audio/hahajk.mp3");
	driveloop = loadSound("audio/drive-loop.mp3")

}

function setup(){

	canvas = createCanvas(windowWidth, windowHeight);
	canvas.style('z-index','-2');
	canvas.position(0,0);
	background(200);
	imageMode(CENTER);
	
	
	selectOne = createSelect();
	selectOne.position(50,50);
	selectOne.option(sOneOptions[0]);
	selectOne.option(sOneOptions[1]);
	selectOne.option(sOneOptions[2]);
	selectOne.option(sOneOptions[3]);
	selectOne.option(sOneOptions[4]);
	selectOne.option(sOneOptions[5]);
	selectOne.option(sOneOptions[6]);


	buttonAsk = createButton('ask yourself')
	buttonAsk.position(50, 75);
	buttonAsk.mousePressed(ask);

}


function ask(){

	if (buttonAsk.mousePressed() && selectOne.value() == sOneOptions[0]){
		buttonAsk1 = createButton('u must have clicked something');
		buttonAsk1.position(350,400);
		buttonAsk1.mousePressed(click);

	}

	if (buttonAsk.mousePressed() && selectOne.value() == sOneOptions[1]){
		buttonAsk2 = createButton('click me, i^ll help');
		buttonAsk2.position(150,150);
		background(237, 219, 130);

	}

	if (buttonAsk.mousePressed() && selectOne.value() == sOneOptions[2]){
		buttonAsk3 = createButton('over here loser');
		buttonAsk3.position(300,250);
		background(53, 68, 135);
		buttonAsk3.mouseReleased(vroomvroom);
		vroom.play();
		vroom.loop();

	}

	if (buttonAsk.mousePressed() && selectOne.value() == sOneOptions[3]){
		buttonAsk4 = createButton('what is it?');
		buttonAsk4.position(windowWidth/2 - 50 , 200);
		background(190, 201, 250);
		buttonAsk4.mousePressed(house);

	}

	if (buttonAsk.mousePressed() && selectOne.value() == sOneOptions[4]){
		buttonAsk5 = createButton('lets find out');
		buttonAsk5.position(100,100);
		background(64, 55, 115);
		buttonAsk5.mouseReleased(drive);

	}

	if (buttonAsk.mousePressed() && selectOne.value() == sOneOptions[5]){
		buttonAsk6 = createButton('who^s to say');
		buttonAsk6.position(100,100);
		background(237, 189, 185);
		buttonAsk6.mousePressed(right);

	}

	if (buttonAsk.mousePressed() && selectOne.value() == sOneOptions[6]){
		buttonAsk7 = createButton('who^s to say');
		buttonAsk7.position(100,100);
		background(119, 90, 143);
		buttonAsk7.mousePressed(wrong);

	}
}

function mousePressed(){

	if (buttonAsk2.mousePressed){
		piss.push(random(windowWidth));
		shit.push(random(windowHeight));
		hahajk.play();
	}
}

function drive(){
	driveloop.play();
	driveloop.loop();
	window.open("drive.html");
}

function vroomvroom(){
	if (buttonAsk3.mousePressed){
	carspin = createImg("images/carspin.gif")
	carspin.position(300,300);
	ouch.push(random(windowWidth));
	oops.push(random(windowHeight));

	}
}

function right(){
	yes = createInput(' ');
	yes.position(windowWidth/2 - 100, windowHeight/2);
	oof = createButton('go ahead and ask');
	oof.position(windowWidth/2 + 50, windowHeight/2)
	oof.mousePressed(gone);
}

function gone(){
	yes.value(' ');
	createElement('h1', 'WRONG');
}

function wrong(){
	no = createInput(' ');
	no.position(windowWidth/2 - 100, windowHeight/2);
	oop = createButton('dont ask me');
	oop.position(windowWidth/2 + 50, windowHeight/2)
	oop.mousePressed(back);
}

function back(){
	no.value(' ');
	createElement('h1', 'go back');
	createElement('h2', 'ask if you^re right?')
}

function house(){

	selectHouse = createSelect();
	selectHouse.position(windowWidth/2 - 50, 250);
	selectHouse.option('pretty');
	selectHouse.option('spooky');
	selectHouse.option('funky');
	selectHouse.option('bland');
	selectHouse.option('neato');
	selectHouse.changed(which);
}

function draw(){

	for(var i = 0; i < piss.length; i++){
		evilButton = createButton('haha jk');
		evilButton.position(piss[i],shit[i]);
		}

	for(var i = 0; i < ouch.length; i++){
		loserButton = createButton('over here loser');
		loserButton.position(ouch[i],oops[i]);
		carspin.position(ouch[i], oops[i] + 50);
		}
}


function which(){
	if (selectHouse.value() == 'pretty'){
		pretty = createImg("images/icon_home_chick.gif");
		pretty.position(windowWidth/2, 300);
		spooky.remove();
		funky.remove();
		bland.remove();
		neato.remove();
	}

	if (selectHouse.value() == 'spooky'){
		spooky = createImg("images/hauntedhouse.gif");
		spooky.position(windowWidth/2,300);
		pretty.remove();
		funky.remove();
		bland.remove();
		neato.remove();
	}

	if (selectHouse.value() == 'funky'){
		funky = createImg("images/yellow.gif");
		funky.position(windowWidth/2,300);
		pretty.remove();
		spooky.remove();
		bland.remove();
		neato.remove();
	}
	if (selectHouse.value() === 'bland'){
		bland = createImg("images/home.gif");
		bland.position(windowWidth/2, 300);
		pretty.remove();
		spooky.remove();
		funky.remove();
		neato.remove();
	}
	if (selectHouse.value() === 'neato'){
		neato = createImg("images/lochouse.gif");
		neato.position(windowWidth/2, 300);
		pretty.remove();
		spooky.remove();
		funky.remove();
		bland.remove();
		
	}
}

function click(){
	background(230);
	check = createCheckbox(false); 
	check.position(100,300);
	check.changed(checkChange); 
		

	check1 = createCheckbox(false);
	check1.position(250, 200);
	check1.changed(check1Change);
	
	check2 = createCheckbox(false);
	check2.position(175, 400);
	check2.changed(check2Change);
	
	check3 = createCheckbox(false);
	check3.position(300, 600);
	check3.changed(check3Change);
	
	check4 = createCheckbox(false);
	check4.position(350, 320);
	check4.changed(check4Change); 

	
	check5 = createCheckbox(false);
	check5.position(400, 450);
	check5.changed(check5Change);
	
	check6 = createCheckbox(false);
	check6.position(450, 100);
	check6.changed(check6Change);
	
	check7 = createCheckbox(false);
	check7.position(500, 200);
	check7.changed(check7Change);
	
	check8 = createCheckbox(false);
	check8.position(550, 400);
	check8.changed(check8Change);
	
	check9 = createCheckbox(false);
	check9.position(600, 300);
	check9.changed(check9Change);
	
	check10 = createCheckbox(false);
	check10.position(650, 500);
	check10.changed(check10Change);
	
	check11 = createCheckbox(false);
	check11.position(700, 150);
	check11.changed(check11Change);
	
	check12 = createCheckbox(false);
	check12.position(750, 350);
	check12.changed(check12Change);	
}
function checkChange(){
	//check to see if the checkbox is checked, if so generate random color
	if (check.checked()) {
    	background(random(255), random(255), random(255));
  	} else {	
    	background(random(255), random(255), random(255));
  	} 
}
function check1Change(){
	if (check1.checked()) {	
    	background(random(255), random(255), random(255));
  	} else { 	
    	background(random(255), random(255), random(255));
  	} 
}
function check2Change(){
	if (check2.checked()) {	
    	background(random(255), random(255), random(255));
  	} else { 	
    	background(random(255), random(255), random(255));
  	} 
}
function check3Change(){
	if (check3.checked()) {
    	background(random(255), random(255), random(255));
  	} else {	
    	background(random(255), random(255), random(255));
	} 
}
function check4Change(){
	if (check4.checked()) {
    	background(random(255), random(255), random(255));
  	} else {	
    	background(random(255), random(255), random(255));
	} 
}
function check5Change(){
	if (check5.checked()) {
    	background(random(255), random(255), random(255));
  	} else {	
    	background(random(255), random(255), random(255));
	} 
}
function check6Change(){
	if (check6.checked()) {
    	background(random(255), random(255), random(255));
  	} else {	
    	background(random(255), random(255), random(255));
	} 
}
function check7Change(){
	if (check7.checked()) {
    	background(random(255), random(255), random(255));
  	} else {	
    	background(random(255), random(255), random(255));
	} 
}	
function check8Change(){
	if (check8.checked()) {
    	background(random(255), random(255), random(255));
  	} else {	
    	background(random(255), random(255), random(255));
	} 
}
function check9Change(){
	if (check9.checked()) {
    	background(random(255), random(255), random(255));
  	} else {	
    	background(random(255), random(255), random(255));
 } 
}
function check10Change(){
	if (check10.checked()) {
    	background(random(255), random(255), random(255));
  	} else {	
    	background(random(255), random(255), random(255));
  	} 
}
function check11Change(){
	if (check11.checked()) {
    	background(random(255), random(255), random(255));
  	} else {	
    	background(random(255), random(255), random(255));
 } 
}
function check12Change(){
	if (check12.checked()) {
    	background(random(255), random(255), random(255));
  	} else {	
    	background(random(255), random(255), random(255));
  	} 
}
function check13Change(){
	if (check13.checked()) {
    	background(random(255), random(255), random(255));
  	} else {	
    	background(random(255), random(255), random(255));
	} 
}