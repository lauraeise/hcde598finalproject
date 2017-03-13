// Created by Livia Brown & Laura Eise
// Last edited on 3/12/2017
// Final Project: The 598 Trail
// Learning Objectives: Demonstrate knowledge of variables, functions, parameters, conditional statements, loops and arrays
// Purpose: Experience "HCDE 598: Introduction to Computational Concepts" through the format of the classic computer game "The Oregon Trail"

var hasTyped = false; // set up variable of typing selection as false
var computer;         // image of computer
var tombstone;        // image of grave
var fireworks;        // image of fireworks
var raft;             // image of wagon on raft
var snowman;          // image of snowman
var drowning;         // image of drowning wagon
var wagon;            // image of wagon
var wagonX = 900;     // horizontal location of image of wagon
var song;             // mp3 of Oregon Trail song
var dir = 5;         // speed and direction of image of wagon
var font;             // text font
var page = 0;         // screen start value
var selection = "";   // open selection options
var classDay = ["Class", "February 6, 2017"];
var classDetails = ["Weather:  Snowing", "Health:  Good", "Pace:  Stalled"];
var classOptions = ["Oh no! Class is cancelled due to snow.", " ",  "1. Go to office hours over the weekend.", 
                    "2. Do nothing and hope for the best.", " ", "What will you do?", " ","Select a number and press enter."];
var codingOptions = ["Many kinds of people make the journey to learn Javascript.","Are you:",
                     "1.  a total n00b","2.  dabble a bit", "3.  hacker wannabe", "What is your choice?",
                     "Select a number and press enter."];
var officeDay = ["Office Hours", "February 11, 2017"];
var officeDetails = ["Weather:  Cloudy", "Health:  Excellent", "Pace:  Rapid"];
var officeOptions = ["After spending time at office hours,", "you understand the concept.", " ", 
                     "You go home and finish your project!", " ", "Press enter to continue coding."];
var finalProject = ["Class", "February 27, 2017"];
var finalProjectDescription = ["Weather: Cloudy... BECAUSE SEATTLE", "Health: Fair", "Pace: Strenuous"];
var finalProjectChoices = ["Your final project has been assigned.", " ", "1. You decide to wait until the last minute.", 
                           "2. You work really hard.", " ", "What will you do?", " ","Select a number and press enter."];
var stayHome = ["At Home, Ignoring Problems", "February 11, 2017"];
var stayDetails = ["Weather: Cloudy", "Health: Dire", "Pace: Stuck"];
var failedAssignment = ["You decided to stay home and cannot", "figure out the assignment.", 
                        " ", "You drown in your own tears.", " ", "Press enter to continue coding."];

function preload() {                            // pull in saved files from project folder
  computer = loadImage("computer.gif");         // load computer image
  wagon = loadImage("wagon.png");               // load wagon image
  tombstone = loadImage("tombstone.jpg");       // load tombstone image
  fireworks = loadImage("fireworks.jpg");       // load fireworks image
  snowman = loadImage("snowman.png");           // load snowman image
  raft = loadImage("office-hours.png");         // load raft image
  drowning = loadImage("drowning.png");         // load drowning image
  font = loadFont("OCRAEXT.TTF");               // load font
  song = loadSound("song.mp3");                 // load the mp3 file of Oregon Trail song
}

function setup() {
  createCanvas(900, 600)    // set canvas size
  textFont(font);           // put font into canvas
  song.play();              // play mp3 file
  song.setVolume(0.5);      // set the volume of the mp3 file
}

function draw() {
  background(0);            // set canvas color
  if(page == 0) {           // run function pageOne when page is at 0
    pageOne();              // start page
  } else if(page == 1) {    // otherwise play wagonRoll function (if page is at 1)
    wagonRoll();            // start wagon roll page
  } else if(page == 2) {    // otherwise run pageThree (if page is at 2)
    pageThree();            // run coding level page
  } else if(page == 3) {    // otherwise run pageFour (if page is at 3)
    pageFour();             // run class page
  } else if(page == 4) {    // otherwise run pageFive (if page is at 4)
    pageFive();             // run office hours page
  } else if(page == 5) {    // otherwise run pageSix (if page is at 5)
    pageSix();              // run tears page
  } else if(page == 6) {    // otherwise run PageSeven (if page is at 6)
    pageSeven();            // run final project page
  } else if(page == 7) {    // otherwise run pageEight (if page is at 7)
    pageEight();            // run dystentery page
  } else if(page == 8) {    // otherwise run pageNine (if page is at 8)
    pageNine();             // run final page
  } 
}

// Create the start page with the wagon image and a start button
// Start button changes color within set parameters; clicking the button moves code to next page.
function pageOne() {
  image(computer, 275, 175, 300, 300);  // computer image
  fill(255);                            // button color
  rect(325, 500, 250, 50);              // button size and placement
  noStroke();                           // remove stroke from text
  fill(255);                            // title color
  textSize(60);                         // set text size
  text("The 598 Trail", 220, 125);      // create title
  fill(0);                              // button color 
  textSize(30);                         // button text size
  text("Start Game", 355, 535);         // button text and placement
  if(mouseX > 325 && mouseX < 575 &&    // parameters of Start Page button
     mouseY > 500 && mouseY < 550) {  
    fill(95, 95, 95);
    rect(325, 500, 250, 50);
    fill(255);
    textSize(30); 
    text("Start Game", 355, 535); 
  }
}

// Wagon image rolls across the screen
// If statement moves game to page 2 and resets wagonX for replay
function wagonRoll() {
  image(wagon, wagonX, 250, 600, 175);
  wagonX = wagonX - dir;
  if(wagonX < -500) {
    page = 2;
    wagonX = 900;
  } 
}

// This page displays coding levels 
// Coding levels are displayed through arrays + for loop 
function pageThree() {
  textSize(18);
  text(selection, 370, 421);
  for(i = 0; i < codingOptions.length; i++) {
    text(codingOptions[i], 120, 120 + i * 60);
  }
}

// This page displays first class details with snowman.
// Options are displayed for user to choose. 
function pageFour() {
  image(snowman, 420, 53, 78, 78);
  fill(255);
  rect(200, 120, 500, 130);
  text(selection, 440, 451);
  for(i = 0; i < classDay.length; i++) {        // display class title & day of class
    text(classDay[i], 220, 60 + i * 30);
  } for(i = 0; i < classDetails.length; i++) {  // display explanation text
    fill(0);
    text(classDetails[i], 220, 160 + i * 30);
  } for(i = 0; i < classOptions.length; i++) {   // display options users can choose
    fill(255);
    text(classOptions[i], 220, 300 + i * 30);
  }
}

// Page five lists an image, shape, and text about going to office hours 
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

// Page displays an image, shape, and text about not going to class 
// Page is about failing class assignment
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

// This lists details about the final project
// Shapes form clouds through a for loop
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

// If user chooses to do nothing on final project they go to this page
// Image, shape, and text explain they don't finish the project
// A replay button is displayed to start the game over
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

// If user chooses to do nothing on final project they do well on this project
// Image, shape, and text explain that the user has won
// A replay button is displayed to start the game over
function pageNine () {
  fill(255);
  text("Congratulations!", 340, 110);
  text("You finished the project and got an A in the class.", 150, 150);
  image(fireworks, 330, 220, 200, 200);
  fill(95, 95, 95);
  rect(310, 500, 250, 50);
  fill(255);
  text("Replay", 398, 530); // button text and placement
  if(mouseX > 295 && mouseX < 575 && mouseY > 480 && mouseY < 600) { // parameters of replay button
    fill(255);
    rect(310, 500, 250, 50);
    fill(0);
    text("Replay", 398, 530);
  }
}

// This function runs when the mouse pressed
// If the mouse is on certain pages and within certain parameters, it will go to the appropriate page
function mousePressed() {
  if(page == 0 && mouseX > 325 && mouseX < 575 && mouseY > 500 && mouseY < 550) {
    page = 1 + page;
  } else if (page == 7 && mouseX > 325 && mouseX < 575 && mouseY > 480 && mouseY < 600) {
    page = 0;
  } else if (page == 8 && mouseX > 325 && mouseX < 575 && mouseY > 450 && mouseY < 550) {
   page = 0;
  }
}

// This function allows user to select a number option
// The user can enter an option, and it will go to specific page
function keyPressed() {                                             // calls the keyPressed function
  if((hasTyped == true || selection == "") &&                       // if the user has typed a selection
      page != 2 && (key == "1" || key == "2")) {                    // and page is not 2, enter key 1 or 2
    selection = key;                                                // selection is equal to key options
    hasTyped = true;                                                // the user has type is true  
  } else if((hasTyped == true || selection == "") && page == 2      // otherwise if same parameters but if it's
             && (key == "1" || key == "2" || key == "3")) {         // on page 2 and there is an additional key 3
    selection = key;                                                // selection is key                          
    hasTyped = true;                                                // selection is entered 
  } else {                                                          // otherwise 
    if(page == 2 && keyCode == ENTER || key == RETURN) {            // if page 2 and enter/return key pressed
      page = 1 + page;                                              // go to the next page
    } else if(page == 3 && selection == "1"                         // otherwise if page 3 and selection is 1
              && keyCode == ENTER || key == RETURN) {               // and enter/return key pressed
      page = 4;                                                     // go to page 4 
    } else if(page == 3 && selection == "2"                         // these follow same ideas as the lines above 
              && keyCode == ENTER || key == RETURN) {
      page = 5;
    } else if(page == 4 && keyCode == ENTER || key == RETURN) {
      page = 6;
    } else if(page == 5 && keyCode == ENTER || key == RETURN) {
      page = 6;
    } else if(page == 6 && selection == "1"
              && keyCode == ENTER || key == RETURN) {
      page = 7;
    } else if(page == 6 && selection == "2"
              && keyCode == ENTER || key == RETURN) {
      page = 8;
    }
  hasTyped = false;
  selection = "";
  }
}
