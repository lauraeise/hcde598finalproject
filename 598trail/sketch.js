// Created by Livia Brown & Laura Eise
// Last edited on 3/6/2017
// Final Project: The 598 Trail
// Learning Objectives: Demonstrate knowledge of variables, functions, parameters, conditional statements, loops, and arrays
// Purpose: Experience "HCDE 598: Introduction to Computational Concepts" through the format of the classic computer game "The Oregon Trail"

var computer; // saved image of computer
var wagon; // saved image of wagon
var wagonX = 900; // x location of image of wagon
var dir = 10; // speed and direction of image of wagon
var font; // saved text font
var page = 0; // screen start value
var selection = "";
var classDay = ["Class", "February 6, 2017"];
var classDetails = ["Weather:  Snowing", "Health:  Good", "Pace:  Haven't Started"];
var classOptions = ["Oh no! Class is cancelled because of snow.", "What will you do?", "1. Go to office hours over the weekend.", "2. Do nothing. Hope for the best.", "Which will you choose?"];
var codingOptions = ["Many kinds of people make the journey to learn Javascript.","Are you:","1.  a total n00b","2.  dabble a bit", "3.  hacker wannabe", "What is your choice?" ];
var officeDay = ["Office Hours", "February 11, 2017"];
var officeDetails = ["Weather:  Cloudy", "Health:  Fantastic", "Pace:  Almost there!"];
var officeOptions = ["After spending time at office hours", 
                      "you understand the concept. You go home and finish your project!" ];

function preload() { // pull in saved files from project folder
  computer = loadImage("computer.gif"); // load image
  wagon = loadImage("wagon.png"); // load image
  font = loadFont("OCRAEXT.TTF"); // load font
}

// create canvas
function setup() {
  createCanvas(900, 600)
  textFont(font);
}

function draw() {
  background(0); // canvas color
  if(page == 0) {
    pageOne(); // start page
  } else if(page == 1) {
    pageTwo(); // wagon roll page
  } else if(page == 2) {
    pageThree(); // coding level question
  } else if(page == 3) {
    pageFour(); // snow storm notification & homework question
  } else if(page == 4) {
    pageFive(); // office hours page
  }
}

// START
function pageOne() {
  image(computer, 275, 175, 300, 300); // computer image
  
  fill(255); // button color
  rect(325, 500, 250, 50); // button size and placement

  noStroke(); // removes stroke from text
  fill(255); // title color
  textSize(60); // sets text size
  text("The 598 Trail", 220, 125); // create title
  fill(0); // button color 
  textSize(30); // button text size
  text("Start Game", 355, 535); // button text and placement
  
if(mouseX > 325 && mouseX < 575 && mouseY > 500 && mouseY < 550) { // parameters of Start Page button
  fill(95, 95, 95);
  rect(325, 500, 250, 50);
  fill(255);
  textSize(30); // button text size
  text("Start Game", 355, 535); // button text and placement
}
}

// ROLLING WAGON
function pageTwo() {
  image(wagon, wagonX, 250, 600, 175);
  wagonX = wagonX - dir;
  if(wagonX < -500) {
    page = page + 1;
  }
}

// CODING LEVEL
function pageThree() {
  textSize(18);
  for(i = 0; i < codingOptions.length; i++) {
    text(codingOptions[i], 120, 150 + i * 60);
   }
  text(selection, 800, 580);
}

// SNOW STORM & HOMEWORK
function pageFour() {
  if (random(1) < 0.5) {   
  // fill with a darker stroke
  stroke(255);
} else {
  // otherwise fill with a lighter stroke
  stroke(200, 200, 255);
}
// repeats 10 times
for (i = 0; i < 10; i++) {
  // save the random size (to draw a circle)
  ellipseSize = random(5, 10);
  // draw the circle at a random location
  ellipse(random(1, 900), random(1, 150), ellipseSize, ellipseSize);
}
  fill(255);
  rect(200, 200, 500, 150);
  for(i = 0; i < classDay.length; i++) {
    text(classDay[i], 220, 140 + i * 30);
   }
   for(i = 0; i < classDetails.length; i++) {
    fill(0);
    text(classDetails[i], 220, 240 + i * 40);
   }
   for(i = 0; i < classOptions.length; i++) {
    fill(255);
    text(classOptions[i], 220, 400 + i * 30);
   }
}

function pageFive() {
  fill(255);
  rect(200, 200, 500, 150);
  noStroke();
  for(i = 0; i < officeDay.length; i++) {
    text(officeDay[i], 220, 140 + i * 30);
   }
   for(i = 0; i < officeDetails.length; i++) {
    fill(0);
    text(officeDetails[i], 240, 250 + i * 40);
   }
   for(i = 0; i < officeOptions.length; i++) {
    fill(255);
    text(officeOptions[i], 240, 400 + i * 30);
   }
}

function mousePressed() {
  if(page == 0 && mouseX > 325 && mouseX < 575 && mouseY > 500 && mouseY < 550) {
      page = 1 + page;
  }
}

function keyPressed() {
  if(page == 2 && key == "1" || key == "2" || key == "3") {
    selection = key
  } else if (page == 2 && keyCode == ENTER || key == RETURN) {
    page = 1 + page;
  } else if (page == 3 && keyCode == ENTER || key == RETURN) {
    page = 1 + page;
  }
}