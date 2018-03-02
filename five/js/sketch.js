var leftX = 320;
var rightX = 820;
var bottomY = 600;
var topY = 100;
var percentage = ["100%", "80%", "60%", "40%", "20%", "0"];
var district = ["West Harlem", "Central Harlem", "East Harlem"];
var buttonLabels1 = ["16.19%", "11.94%", "18.51%", "10.22%", "43.14"];
var buttonLabels2 = ["17.29%", "15.48%", "12.55%", "6.59%", "48.09%"];
var buttonLabels3 = ["32.31%", "27.01%", "2.90%", "6.91%", "30.87%"];
var buttonLabels4 = ["43.14%", "48.09%", "30.87%", "41.87%"];
var buttonLabels5 = ["10.22%", "6.59%", "6.91%", "7.45%"];
var buttonLabels6 = ["18.51%", "12.55%", "2.90%", "10.92%"];
var buttonLabels7 = ["11.94%", "15.48%", "27.01%", "18.19%"];
var buttonLabels8 = ["16.19%", "17.29%", "32.31%", "21.57%"];
var number1 = [0.1619, 0.1194, 0.1851, 0.1022, 0.4314];
var number2 = [0.1729, 0.1548, 0.1255, 0.0659,0.4809];
var number3 = [0.3231, 0.2701, 0.0290, 0.0691, 0.3087];
var startingY1;
startingY1 = topY;
var startingY2;
startingY2 = topY;
var startingY3;
startingY3 = topY;

function setup() {
  createCanvas(1000, 1000);
  textFont('Roboto');
  textAlign(RIGHT, CENTER);
  noLoop();
}
// ***** Draw buttons function ***** //
function drawButtons(){

  var selectedButton;
  if (selectedButton == 0){
    textAlign(CENTER, CENTER);
    text(buttonLabels1[i], 390, startingY1 + map(number1[i], 0, 1, 0, 400)/2);
    startingY1 = startingY1 + map(number1[i], 0, 1, 0, 400);
    }
  else if (selectedButton == 1){
    textAlign(CENTER, CENTER);
    text(buttonLabels2[i], 560, startingY2 + map(number2[i], 0, 1, 0, 400)/2);
    startingY2 = startingY2 + map(number2[i], 0, 1, 0, 400);
    }
  else if (selectedButton == 2){
    textAlign(CENTER, CENTER);
    text(butonLabels3[i], 760, startingY3 + map(number3[i], 0, 1, 0, 400)/2);
    startingY3 = startingY3 + map(number3[i], 0, 1, 0, 400);
    }
  else if (selectedButton == 3){
    textAlign(CENTER, CENTER);
    text("43.14%", 350, 600 - 172.56/2);
    text("48.09%", 560, 600 - 192.36/2);
    text("30.87%", 760, 600 - 123.48/2);
    }
  else if (selectedButton == 4){
    textAlign(CENTER, CENTER);
    text("10.22%", 350, 600 - 172.56- 40.88/2);
    text("6.59%", 560, 600 - 192.36 - 26.36/2);
    text("6.91%", 760, 600 - 123.48 - 27.64/2);
    }
  else if (selectedButton == 5){
    textAlign(CENTER, CENTER);
    text("18.51%", 350, 600 - 172.56 - 40.88 - 74.04/2);
    text("12.55%", 560, 600 - 192.36 - 26.36 - 50.2/2);
    text("2.90%", 760, 600 - 123.48 - 27.64 - 11.6/2);
    }
  else if (selectedButton == 6){
    textAlign(CENTER, CENTER);
    text("11.94%", 350, 600 - 172.56 - 40.88 - 74.04 - 47.76/2);
    text("15.48%", 560, 600 - 192.36 - 26.36 - 50.2 - 61.92/2);
    text("27.01%", 760, 600 - 123.48 - 27.64 - 11.6 - 108.4/2);
    }
  else if (selectedButton == 7){
    textAlign(CENTER, CENTER);
    text("16.19%", 350, 600 - 172.56 - 40.88 - 74.04 - 47.76 - 64.76/2);
    text("17.29%", 560, 600 - 192.36 - 26.36 - 50.2 - 61.92 - 69.16/2);
    text("32.31%", 760, 600 - 123.48 - 27.64 - 11.6 - 108.4 - 129.24/2);
    }
  }

function draw() {
  for (var i = 0; i < percentage.length; i++) {
    textSize(15);
    fill(0);
    text(percentage[i], 300, 100 + 80 * i);
    line (leftX, 100 + 80 * i, rightX, 100 + 80 * i);
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

  fill(0);
  text('West Harlem', 415, 80);
  text('Central Harlem', 590, 80);
  text('East Harlem', 780, 80);
  text('Total Buildings', 915, 530);
  text('2026', 390, 530);
  text('4645', 560, 530);
  text('2866', 760, 530);
  textAlign(LEFT, CENTER);
  text('Multi-Family Walk Up', 390, 576);
  text('Multi-Family Elevator', 590, 576);
  text('One & Two Family', 390, 597);
  text('Mixed Residential & Commertial', 590, 596);
  text('Other Uses', 390, 616);


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


  function mousePressed(){
    if (mouseX > 320 && mouseX < 426 && mouseY > 50 && mouseY < 100) {
      print('hello....1');
      selectedButton = 0;
      redraw();
      }
    else if (mouseX > 440 && mouseX < 660 && mouseY > 50 && mouseY < 100) {
      print('hello....2');
      selectedButton = 1;
      redraw();
      }
    else if (mouseX > 670 && mouseX < 820 && mouseY > 50 && mouseY < 100) {
      print('hello....3');
      selectedButton = 2;
      redraw();

    else if (mouseX > 360 && mouseX < 550 && mouseY > 560 && mouseY < 575) {
      print('hello....4');
      selectedButton = 3;
      redraw();
    }
    else if (mouseX > 560 && mouseX < 800 && mouseY > 560 && mouseY < 575) {
      print('hello....5');
      selectedButton = 4;
      redraw();
    }
    else if (mouseX > 360 && mouseX < 550 && mouseY > 590 && mouseY < 605) {
      print('hello....6');
      selectedButton = 5;
      redraw();
    }
    else if (mouseX > 560 && mouseX < 800 && mouseY > 590 && mouseY < 605) {
      print('hello....7');
      selectedButton = 6;
      redraw();
    }
    else if (mouseX > 360 && mouseX < 550 && mouseY > 610 && mouseY < 625) {
      print('hello....8');
      selectedButton = 7;
      redraw();
    }
}
