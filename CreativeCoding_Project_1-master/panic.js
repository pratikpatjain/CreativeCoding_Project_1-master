/*Project 1
Pick an adjective and make a program that illustrates
that adjective interactively.You may not use images.

Use only the drawing functions - stuff found in the 
Shape, Color, Events and Math sections. Create custom
functions that are triggered on some event, and make
those functions vary. The focus of this project is 
procedural intensity. How expressive can you be with 
only line, shapes, color and movement?
*/

/* Panic
Panic: Sudden uncontrollable fear or anxiety, often causing wildly unthinking behavior. 
*/

// Constants
var x1 = 480;
var y1 = 320;
var x2 = 250;
var y2 = 280;
var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2, c1, c2;
var rotation = 0.1;
var ringNumber = 0;
var ringCounter = [63, 63];
//var flag = 1;

function setup() { 
  createCanvas(1080, 720);
  noiseDetail(2, 0.9); 
  frameRate(60);
  // Define colors
  b1 = color(255);
  b2 = color(0);
  c1 = color(133,147,152, 10);
  c2 = color(35,37,38, 10); 
  strokeWeight = 2; //Increase stroke weight
  //background(34, 22, 53);
} 

function draw() { 
  background(34, 22, 53);
	setGradient(0, 0, width, height-160, c1, c2, Y_AXIS);
  rotation = rotation + 0.1;
  
  //Fear Mode//
  if (mouseIsPressed) {
    background(25,25,25);
    breakdown();
  }

  clock(rotation);
  evileye();
  hazymind();

}

function setGradient(x, y, w, h, c1, c2, axis) {
  
  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  } 
}

//The clock signifies time which causes panic//
function clock(rotation) {

  push();
  translate(width/2,height/2);
  rotate(rotation);
  stroke(255, 23, 38);
  noFill();
  ellipse(0,0,80,80);
  line(0,0,0,27);
	pop();

}

//The line pattern shows how things fall apart. It also symbolises as an evil eye along with the clock//
function evileye(){
  push();
  translate(width/2,height/2);
  for (var i = 0; i < ringCounter[ringNumber]; i++) {
    rotate(0.1);
    //stroke(217, 164, 155);
    stroke(255, 23, 38);
    fu = random (40,70);
    line(0,ringNumber*fu+45, 0, ringNumber*fu+75);
  }
  if(ringNumber < ringCounter.length)
    ringNumber++;
  else
    ringNumber = 0;
  pop();
} 

//The hazy background describes the state of mind.//
function hazymind(){

  fill(0);
  noStroke();
  rectMode(CENTER);
  for (var x = 10; x < width; x += 10) {
    for (var y = 10; y < height; y += 10) {
      var n = noise(x * 0.007, y * 0.007, frameCount * 0.07);
      push();
      translate(x, y);
      rotate(TWO_PI * n);
      fill(255,100*n);
      scale(20*n);
      ellipse(0, 0, 1, 1);
      pop();
    }
  }
}

//Blood Tears//
function breakdown() {

  //frameRate(5);
  noStroke();
  fill(255, 23, 38, 150);
  var x;
  x = random(width);
  var y;
  y = random(height);
  ellipse(x, y, 10, 20);
  ellipse(width-x, height-y, 10, 20);
  ellipse(x/2, y/2, 10, 20);
  ellipse(x/3, y/3, 10, 20);
  ellipse(x/4, y/4, 10, 20);
}





