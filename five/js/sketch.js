var leftX = 320;
var rightX = 820;
var bottomY = 600;
var topY = 100;
var percentage = ["100%", "80%", "60%", "40%", "20%", "0"];
var district = ["West Harlem", "Central Harlem", "East Harlem"];
function setup() {
  createCanvas(1000, 1000);
  textFont('Roboto');
  textAlign(RIGHT, CENTER);
  noLoop();
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
    var number1 = [0.1619, 0.1194, 0.1851, 0.1022, 0.4314];
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
    var number2 = [0.1729, 0.1548, 0.1255, 0.0659,0.4809];
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
    var number3 = [0.3231, 0.2701, 0.0290, 0.0691, 0.3087];
    rect(leftX + 350, startingY3, 150, map(number3[i], 0, 1, 0, 400));
    startingY3 = startingY3 + map(number3[i], 0, 1, 0, 400);
  }
}
