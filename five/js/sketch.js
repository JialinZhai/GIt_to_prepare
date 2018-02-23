var leftX = 120;
var rightX = 620;
var bottomY = 500;
var topY = 100;
var percentage = ["100%", "80%", "60%", "40%", "20%", "0"];
var district = ["West Harlem", "Central Harlem", "East Harlem"];
function setup() {
  createCanvas(800, 800);
  textFont('Roboto');
  // background(100);
  textAlign(RIGHT, CENTER);
  noLoop();
}
function draw() {
  for (var i = 0; i < percentage.length; i++) {
    textSize(15);
    fill(0, 102, 153);
    text(percentage[i], 100, 100 + 80 * i);
    stroke(214, 214, 194);
    line (leftX, 100 + 80 * i, rightX, 100 + 80 * i);
  }

  line (leftX, bottomY, rightX, bottomY);
  text('West Harlem', 215, 80);
  text('Central Harlem', 390, 80);
  text('East Harlem', 580, 80);
  text('Total Buildings', 715, 530);
  text('2026', 190, 530);
  text('4645', 360, 530);
  text('2866', 560, 530);

  var startingY1 = topY;
  fill(0);
  stroke(255);
  for (var i = 0; i < 5; i++) {
    var number1 = [0.1619, 0.1194, 0.1851, 0.1022, 0.4314];
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
    rect(leftX, startingY1, 106, map(number1[i], 0, 1, 0, 400));
    startingY1 = startingY1 + map(number1[i], 0, 1, 0, 400);
  }

  var startingY2 = topY;
  for (var i = 0; i < 5; i++) {
    var number2 = [0.1729, 0.1548, 0.1255, 0.0659,0.4809];
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
      rect(leftX + 106, startingY2, 244, map(number2[i], 0, 1, 0, 400));
    print(map(number2[i], 0, 1, 0, 400));
    startingY2 = startingY2 + map(number2[i], 0, 1, 0, 400);
  }

  var startingY3 = topY;
  for (var i = 0; i < 5; i++) {
    var number3 = [0.3231, 0.2701, 0.0290, 0.0691, 0.3087];
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
    rect(leftX + 350, startingY3, 150, map(number3[i], 0, 1, 0, 400));
    print(map(number3[i], 0, 1, 0, 400));
    startingY3 = startingY3 + map(number3[i], 0, 1, 0, 400);
  }

}
