// Created by Livia Brown & Laura Eise
// Last edited on 3/12/2017
// Final Project: The 598 Trail
// Learning Objectives: Demonstrate knowledge of variables, functions, parameters, conditional statements, loops and arrays
// Purpose: Experience "HCDE 598: Introduction to Computational Concepts" through the format of the classic computer game "The Oregon Trail"

var hasTyped = false;
var computer; // image of computer
var tombstone; // image of grave
var fireworks; // image of fireworks
var raft; // image of wagon on raft
var snowman; // image of snowman
var drowning; // image of drowning wagon
var wagon; // image of wagon
var wagonX = 900; // horizontal location of image of wagon
var song; // mp3 of Oregon Trail song
var dir = 10; // speed and direction of image of wagon
var font; // text font
var page = 0; // screen start value
var selection = "";
var classDay = ["Class", "February 6, 2017"];
var classDetails = ["Weather:  Snowing", "Health:  Good", "Pace:  Stalled"];
var classOptions = ["Oh no! Class is cancelled due to snow.", " ",  "1. Go to office hours over the weekend.", "2. Do nothing and hope for the best.", " ", "What will you do?", " ","Select a number and press enter."];
var codingOptions = ["Many kinds of people make the journey to learn Javascript.","Are you:","1.  a total n00b","2.  dabble a bit", "3.  hacker wannabe", "What is your choice?","Select a number and press enter."];
var officeDay = ["Office Hours", "February 11, 2017"];
var officeDetails = ["Weather:  Cloudy", "Health:  Excellent", "Pace:  Rapid"];
var officeOptions = ["After spending time at office hours,", "you understand the concept.", " ", "You go home and finish your project!", " ", "Press enter to continue coding."];
var finalProject = ["Class", "February 27, 2017"];
var finalProjectDescription = ["Weather: Cloudy... BECAUSE SEATTLE", "Health: Fair", "Pace: Strenuous"];
var finalProjectChoices = ["Your final project has been assigned.", " ", "1. You decide to wait until the last minute.", "2. You work really hard.", " ", "What will you do?", " ","Select a number and press enter."];
var stayHome = ["At Home, Ignoring Problems", "February 11, 2017"];
var stayDetails = ["Weather: Cloudy", "Health: Dire", "Pace: Stuck"];
var failedAssignment = ["You decided to stay home and cannot", "figure out the assignment.", " ", "You drown in your own tears.", " ", "Press enter to continue coding."];

function preload() { // pull in saved files from project folder
  computer = loadImage("computer.gif"); // load image
  wagon = loadImage("wagon.png"); // load image
  tombstone = loadImage("tombstone.jpg"); // load image
  fireworks = loadImage("fireworks.jpg"); // load image
  snowman = loadImage("snowman.png"); // load image
  raft = loadImage("office-hours.png"); // load image
  drowning = loadImage("drowning.png"); // load image
  font = loadFont("OCRAEXT.TTF"); // load font
  song = loadSound("song.mp3"); // load the mp3 file of Oregon Trail song
}

// create canvas
function setup() {
  createCanvas(900, 600) // set canvas size
  textFont(font); // set font size
  song.play(); // play mp3 file
  song.setVolume(0.5); // set the volume of the mp3 file
}

function draw() {
  background(0); // canvas color
  
  if(page == 0) {
    pageOne(); // start page
  } else if(page == 1) {
    wagonRoll(); // wagon roll page
  } else if(page == 2) {
    pageThree(); // coding level question
  } else if(page == 3) {
    pageFour(); // snow storm notification & homework question
  } else if(page == 4) {
    pageFive(); // office hours page
  } else if(page == 5) {
    pageSix(); // stay home
  } else if(page == 6) {
    pageSeven(); // final project
  } else if(page == 7) {
    pageEight(); // dysentery
  } else if(page == 8) {
    pageNine(); // do well on project
  } 
  
}

// start page content and functionality
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

// rolling wagon
function wagonRoll() {
  image(wagon, wagonX, 250, 600, 175);
  wagonX = wagonX - dir;
  if(wagonX < -500) {
    page = 2;
    wagonX = 900;
  } 
}

// coding level
function pageThree() {
  textSize(18);
  for(i = 0; i < codingOptions.length; i++) {
    text(codingOptions[i], 120, 120 + i * 60);
   }
  text(selection, 370, 421);
}

// snow storm & homework
function pageFour() {
  image(snowman, 420, 53, 78, 78);
  fill(255);
  rect(200, 120, 500, 130);
  for(i = 0; i < classDay.length; i++) {
    text(classDay[i], 220, 60 + i * 30);
  } for(i = 0; i < classDetails.length; i++) {
    fill(0);
    text(classDetails[i], 220, 160 + i * 30);
  }for(i = 0; i < classOptions.length; i++) {
    fill(255);
    text(classOptions[i], 220, 300 + i * 30);
  }
  text(selection, 440, 451);
}

// office hours
function pageFive() {
  fill(34, 34, 255);
  rect(200, 135, 500, 78);
  fill(255);
  rect(200, 200, 500, 130);
  image(raft, 380, 50, 318, 146);
  for(i = 0; i < officeDay.length; i++) {
    text(officeDay[i], 220, 60 + i * 30);
  } for(i = 0; i < officeDetails.length; i++) {
    fill(0);
    text(officeDetails[i], 220, 240 + i * 30);
  } for(i = 0; i < officeOptions.length; i++) {
    fill(255);
    text(officeOptions[i], 220, 380 + i * 30);
  }
}

// stay home
function pageSix() {
  fill(22,131, 252);
  rect(200, 35, 500, 180);
  image(drowning, 320, 35, 336, 156);
  fill(255);
  rect(200, 160, 500, 120);
  noStroke();
  for(i = 0; i < stayHome.length; i++) {
    text(stayHome[i], 220, 60 + i * 30);
  } for(i = 0; i < stayDetails.length; i++) {
    fill(0);
    text(stayDetails[i], 220, 200 + i * 30);
  } for(i = 0; i < failedAssignment.length; i++) {
    fill(255);
    text(failedAssignment[i], 220, 330 + i * 30);
  }
}

// final project
function pageSeven() {
  fill(198, 201, 206);
  for (x = 0; x < 12; x ++) {
    ellipse(235 + x * 40, 10, 100, 80);
  }
  noStroke();
  fill(255);
  rect(200, 150, 500, 130);
  for(i = 0; i < finalProject.length; i++) {
    text(finalProject[i], 220, 90 + i * 30);
  } for(i = 0; i < finalProjectDescription.length; i++) {
    fill(0);
    text(finalProjectDescription[i], 220, 190 + i * 30);
  } for(i = 0; i < finalProjectChoices.length; i++) {
    fill(255);
    text(finalProjectChoices[i], 220, 330 + i * 30);
  }
  text(selection, 440, 481);
}

// dysentery
function pageEight() {
  fill(255);
  text("You did not finish the project.", 250, 210);
  text("You die of dysentery.", 300, 250);
  image(tombstone, 220, 300, 400, 300);
  fill(0);
  text("RIP Coder.", 400, 500);
  fill(95, 95, 95);
  rect(360, 530, 200, 50);
  fill(255);
  text("Replay", 425, 560); // button text and placement
  if(mouseX > 350 && mouseX < 600 && mouseY > 500 && mouseY < 590) { // parameters of replay button
    fill(255);
    rect(360, 530, 200, 50);
    fill(0);
    text("Replay", 425, 560);
  }
}

// do well on project
function pageNine () {
  text("Congratulations!", 340, 110);
  text("You finished the project and got an A in the class.", 150, 150);
  image(fireworks, 330, 220, 200, 200);
  fill(95, 95, 95);
  rect(310, 500, 250, 50);
  fill(255);
  text("Replay", 398, 530); // button text and placement
  if(mouseX > 285 && mouseX < 475 && mouseY > 480 && mouseY < 600) { // parameters of replay button
    fill(255);
    rect(310, 500, 250, 50);
    fill(0);
    text("Replay", 398, 530);
  }
}

function mousePressed() {
  console.log(page);
  if(page == 0 && mouseX > 325 && mouseX < 575 && mouseY > 500 && mouseY < 550) {
    page = 1 + page;
  } else if (page == 7 && mouseX > 325 && mouseX < 575 && mouseY > 480 && mouseY < 600) {
    console.log("here");
    page = 0;
  } else if (page == 8 && mouseX > 325 && mouseX < 575 && mouseY > 450 && mouseY < 550) {
   console.log("here two");
   page = 0;
  }
}

function keyPressed() {
  if((hasTyped == true || selection == "") && page !=2 && (key == "1" || key == "2")) {
    selection = key;
    hasTyped = true;
  } else if((hasTyped == true || selection == "") && page == 2 && (key == "1" || key == "2" || key == "3")) {
    selection = key;
    hasTyped = true;
  } else {
    if(page == 2 && keyCode == ENTER || key == RETURN) {
      page = 1 + page; // coding level
    } else if(page == 3 && selection == "1" && keyCode == ENTER || key == RETURN) {
      page = 4;
    } else if(page == 3 && selection == "2" && keyCode == ENTER || key == RETURN) {
      page = 5;
    } else if(page == 4 && keyCode == ENTER || key == RETURN) {
      page = 6;
    } else if(page == 5 && keyCode == ENTER || key == RETURN) {
      page = 6;
    } else if(page == 6 && selection == "1" && keyCode == ENTER || key == RETURN) {
      page = 7;
    } else if(page == 6 && selection == "2" && keyCode == ENTER || key == RETURN) {
      page = 8;
    }
    hasTyped = false;
    selection = "";
  }
}
