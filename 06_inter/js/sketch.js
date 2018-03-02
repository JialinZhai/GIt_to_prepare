// ***** Global variables ***** //
var moviesTable;
var topY = 50;
var bottomY = 500;
var leftX = 50;
var rightX = 700;
var textLeft = 30;
var buttonLabels = ['All Movies', '10M+ Budget', '< 10M Budget'];
var buttonStartX = 320;
var buttonStartY = 15;
var buttonLength = 120;
var buttonHeight = 20;
var buttonSpacing = 10;
var selectedButton = 0;
var topBudget = new p5.Table;
var lowBudget = new p5.Table;

// ***** Preload function ***** //
function preload(){
  moviesTable = loadTable('../data/tmdb_5000_movies.csv', 'csv', 'header');
  console.log('Done loading table...');
}

// ***** Setup function ***** //
function setup(){
  createCanvas(800, 800);
  textSize(12);
  textFont('Roboto');
  console.log('Setup complete...');
  print(moviesTable.getRowCount() + ' rows loaded...');
  print(moviesTable.getColumnCount() + ' columns loaded...');
  noLoop();
}


// ***** Labels Function ********* //
function drawLabels() {
  fill(0);
  textAlign(LEFT, CENTER);
  text("AVERAGE RATING OF SELECTED MOVIES", textLeft - 15, topY - 25);
  textAlign(RIGHT, CENTER);
  for (var i = 0; i < 11; i++) {
    noStroke();
    text(i, textLeft, map(i, 0, 10, bottomY, topY));
    stroke(200);
    line(textLeft + 10, map(i, 0, 10, bottomY, topY), rightX + 10, map(i, 0, 10, bottomY, topY));
  }
  textAlign(CENTER, CENTER);
  for (var i = 1900; i < 2021; i+=20) {
    noStroke();
    text(i, map(i, 1900, 2020, leftX, rightX), bottomY + 25);
    stroke(200);
    line(map(i, 1900, 2020, leftX, rightX), bottomY + 12, map(i, 1900, 2020, leftX, rightX), bottomY + 5);
  }
}

// ***** Draw movies function ***** //

// ***** Draw buttons function ***** //
function drawButtons(){
  textAlign(CENTER, TOP);
  for (var i = 0; i < buttonLabels.length; i++) {
    if (selectedButton == i){
      fill(200);
    }
    else {
      fill(230);
    }
    stroke(0);
    rect(buttonStartX + i * (buttonLength + buttonSpacing), buttonStartY, buttonLength, buttonHeight);
    fill(0);
    noStroke();
    text(buttonLabels[i], buttonStartX + i * (buttonLength + buttonSpacing) + buttonLength/2, buttonStartY + 2);
  }
}
// ***** Draw function *****//
function draw(){
  background(255);
  drawLabels();
  drawButtons();
}

function mousePressed(){
  if (mouseX > buttonStartX && mouseX < (buttonStartX + buttonLength) && mouseY > buttonStartY && mouseY < (buttonStartY + buttonHeight)) {
  print('hello....1');
  selectedButton = 0;
  redraw();
  }
  else if (mouseX > (buttonStartX + buttonLength + buttonSpacing) && mouseX < (buttonStartX + buttonSpacing + buttonLength * 2) && mouseY > buttonStartY & mouseY < (buttonStartY + buttonHeight)) {
  print('hello....2');
  selectedButton = 1;
  redraw();
  }
  else if (mouseX > (buttonStartX + 2 * buttonLength + 2 * buttonSpacing) && mouseX < (buttonStartX + buttonSpacing * 2 + 3 * buttonLength) && mouseY > buttonStartY && mouseY < (buttonStartY + buttonHeight)) {
  print('hello....3');
  selectedButton = 2;
  redraw();
  }
}
