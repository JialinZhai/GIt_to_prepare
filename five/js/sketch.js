var leftX = 320;
var rightX = 820;
var bottomY = 600;
var topY = 100;
var percentage = ["100%", "80%", "60%", "40%", "20%", "0"];
var district = ["West Harlem", "Central Harlem", "East Harlem"];
var selectedButton;
var number1 = [0.1619, 0.1194, 0.1851, 0.1022, 0.4314];
var number2 = [0.1729, 0.1548, 0.1255, 0.0659,0.4809];
var number3 = [0.3231, 0.2701, 0.0290, 0.0691, 0.3087];

function setup() {
  createCanvas(1000, 1000);
  textFont('Roboto');
  noLoop();
}

// ***** Draw labels function ***** //
function drawLabels() {
  fill(0);
  textAlign(CENTER, CENTER);
  text('West Harlem', 375, 80);
  text('Central Harlem', 545, 80);
  text('East Harlem', 750, 80);
  text('Harlem', 880, 80);
  text('Total Buildings', 880, 530);
  text('2026', 375, 530);
  text('4645', 545, 530);
  text('2866', 750, 530);
  for (var i = 0; i < percentage.length; i++) {
    textSize(15);
    fill(0);
    text(percentage[i], 300, 100 + 80 * i);
    }
  textAlign(LEFT, CENTER);
  text('Multi-Family Walk Up', 390, 576);
  text('Multi-Family Elevator', 590, 576);
  text('One & Two Family', 390, 597);
  text('Mixed Residential & Commertial', 590, 596);
  text('Other Uses', 390, 616);
  textStyle(ITALIC);
  text('click the legent to see more statistics', 590, 650);

  }
// ***** Draw chart function ***** //
function drawchart(){

   var startingY1;
   startingY1 = topY;
    for (var i = 0; i < 5; i++) {
      if (i == 0){
      fill (214, 214, 194);
      }
      else if (i == 1){
      fill (255, 173, 51);
      }
      else if (i == 2){
      fill (159, 223, 159);
      }
      else if (i == 3){
      fill (128, 170, 255);
      }
      else{
      fill(102, 102, 255);
      }
      stroke(0);

      rect(leftX, startingY1, 106, map(number1[i], 0, 1, 0, 400));
      startingY1 = startingY1 + map(number1[i], 0, 1, 0, 400);
    }

    var startingY2;
    startingY2 = topY;
    for (var i = 0; i < 5; i++) {
      if (i == 0){
      fill (214, 214, 194);
      }
      else if (i == 1){
      fill (255, 173, 51);
      }
      else if (i == 2){
      fill (159, 223, 159);
      }
      else if (i == 3){
      fill (128, 170, 255);
      }
      else{
      fill(102, 102, 255);
      }
      stroke(0);

      rect(leftX + 106, startingY2, 244, map(number2[i], 0, 1, 0, 400));
      startingY2 = startingY2 + map(number2[i], 0, 1, 0, 400);
    }

    var startingY3;
    startingY3 = topY;
    for (var i = 0; i < 5; i++) {
      if (i == 0){
      fill (214, 214, 194);
      }
      else if (i == 1){
      fill (255, 173, 51);
      }
      else if (i == 2){
      fill (159, 223, 159);
      }
      else if (i == 3){
      fill (128, 170, 255);
      }
      else{
      fill(102, 102, 255);
      }
      stroke(0);

      rect(leftX + 350, startingY3, 150, map(number3[i], 0, 1, 0, 400));
      startingY3 = startingY3 + map(number3[i], 0, 1, 0, 400);
    }

    fill(102, 102, 255);
    rect (360, 570, 10, 10);
    fill(128, 170, 255);
    rect (560, 570, 10, 10);
    fill(159, 223, 159);
    rect (360, 590, 10, 10);
    fill(255, 173, 51);
    rect (560, 590, 10, 10);
    fill(214, 214, 194);
    rect (360, 610, 10, 10);
    fill(0, 102, 153);

  }


 function draw() {
      drawLabels();
      drawchart();
  }

function mousePressed() {

    textAlign(CENTER, CENTER);
    textSize(13);
    noStroke();
    fill(0);
     var startingY1;
     startingY1 = topY;
     var startingY2;
     startingY2 = topY;
     var startingY3;
     startingY3 = topY;
     var buttonLabels1 = ["16.19%", "11.94%", "18.51%", "10.22%", "43.14"];
     var buttonLabels2 = ["17.29%", "15.48%", "12.55%", "6.59%", "48.09%"];
     var buttonLabels3 = ["32.31%", "27.01%", "2.90%", "6.91%", "30.87%"];
     var number1 = [0.1619, 0.1194, 0.1851, 0.1022, 0.4314];
     var number2 = [0.1729, 0.1548, 0.1255, 0.0659,0.4809];
     var number3 = [0.3231, 0.2701, 0.0290, 0.0691, 0.3087];

   if (mouseX > 360 && mouseX < 550 && mouseY > 560 && mouseY < 580) {
      print('hello....4');
      selectedButton = 0;

      text("43.14%", 380, 500 - 172.56/2);
      text("48.09%", 550, 500 - 192.36/2);
      text("30.87%", 755, 500 - 123.48/2);
      text("41.87%", 880, 500 - 123.48/2);

      }
    else if (mouseX > 560 && mouseX < 800 && mouseY > 560 && mouseY < 580) {
      print('hello....5');
      selectedButton = 1;
      text("10.22%", 375, 500 - 172.56- 40.88/2);
      text("6.59%", 545, 500 - 192.36 - 26.36/2);
      text("6.91%", 750, 500 - 123.48 - 27.64/2);
      text("7.45%", 880, 500 - 123.48 - 27.64/2);

      }
    else if (mouseX > 360 && mouseX < 550 && mouseY > 590 && mouseY < 605) {
      print('hello....6');
      selectedButton = 2;
      text("18.51%", 375, 500 - 172.56 - 40.88 - 74.04/2);
      text("12.55%", 545, 500 - 192.36 - 26.36 - 50.2/2);
      text("2.90%", 750, 500 - 123.48 - 27.64 - 11.6/2);
      text("10.92%", 880, 500 - 123.48 - 27.64 - 11.6/2);
      }
    else if (mouseX > 560 && mouseX < 800 && mouseY > 590 && mouseY < 605) {
      print('hello....7');
      selectedButton = 3;
      text("11.94%", 375, 500 - 172.56 - 40.88 - 74.04 - 47.76/2);
      text("15.48%", 545, 500 - 192.36 - 26.36 - 50.2 - 61.92/2);
      text("27.01%", 750, 500 - 123.48 - 27.64 - 11.6 - 108.4/2);
      text("18.19%", 880, 500 - 123.48 - 27.64 - 11.6 - 108.4/2);
      }
    else if (mouseX > 360 && mouseX < 550 && mouseY > 610 && mouseY < 625) {
      print('hello....8');
      selectedButton = 4;
      text("16.19%", 375, 500 - 172.56 - 40.88 - 74.04 - 47.76 - 64.76/2);
      text("17.29%", 545, 500 - 192.36 - 26.36 - 50.2 - 61.92 - 69.16/2);
      text("32.31%", 750, 500 - 123.48 - 27.64 - 11.6 - 108.4 - 129.24/2);
      text("21.57%", 880, 500 - 123.48 - 27.64 - 11.6 - 108.4 - 129.24/2);
      }

  }
