// Created by Livia Brown & Laura Eise
// Last edited on 3/4/2017
// Final Project: The 598 Trail
// Learning Objectives: Demonstrate knowledge of variables, functions, parameters, conditional statements, loops, and arrays
// Purpose: Experience "HCDE 598: Introduction to Computational Concepts" through the format of the classic computer game "The Oregon Trail"

var computer; // saved image of computer
var font; // saved text font
var page = 0;
var classDay = ["Class", "February 6, 2017"];
var classDetails = ["Weather:  Snowing", "Health:  Good", "Pace:  Haven't Started"];
var classOptions = ["Womp, womp. Class is cancelled, because of snow. What will you do?", 
                    "1. Go to office hours over the weekend.", "2. Do nothing. Hope for the best.", "Which will you choose?"];
var codingOptions = ["Many kinds of people made the journey of learning Javascript","Are you:","1.a total n00b","2.dabbled a bit", "What is your choice" ];


function preload() { // pull in saved files from project folder
  computer = loadImage("computer.gif"); // load image
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
    pageOne();
  } else if(page == 1) {
    pageTwo();
  }
}

function pageOne() {
  image(computer, 275, 175, 300, 300); // computer image
  
  fill(255); // button color
  rect(325, 500, 250, 50); // button size and placement

  noStroke(); // removes stroke from text
  fill(255); // title color
  textSize(60); // sets text size
  text("The 598 Trail", 225, 125); // create title
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

function pageTwo() {
  fill(255);
  rect(200, 200, 500, 150);
  for(i = 0; i < classDay.length; i++) {
    text(classDay[i], 340, 50 + i * 30);
   }
   for(i = 0; i < classDetails.length; i++) {
    fill(0);
    text(classDetails[i], 240, 250 + i * 40);
   }
   for(i = 0; i < classOptions.length; i++) {
    fill(255);
    text(classOptions[i], 240, 400 + i * 30);
   }
}

function mousePressed() {
    if(mouseX > 325 && mouseX < 575 && mouseY > 500 && mouseY < 550) {
      page = 1 + page;
    }
}
