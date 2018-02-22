//***** Global variable ****//
var movieTable;
var startX = 50;
var endX = 700;
var startY = 400;
var endY = 100;
var startYear = 1900;
var endYear = 2020;
var startScore =0;
var endScore = 10;
function preload() {
  movieTable = loadTable('../data/tmdb_5000_movies.csv', 'csv', 'header');
}
function setup() {
  createCanvas(800, 800);
  textFont('Roboto');
  print(movieTable.getRowCount());
  print(movieTable.getColumCount());

  // background(100);

  noLoop();

}

function draw() {
  for (var i = 0; i < movieTable.getrowCount(); i++) {
    var score = movieTable.getNum(i, 'Vote_average');
    var releaseData = movieTable.getString(i, 'release_data');
    var dataArray = releasaData.split('-');
    var year = parseInt(dataArray[0]);
    var positionX = map(year, startYear, endYear, startX, endX);
    var positionY = map(score, startScore, endScore, startY, endY);
    ellips(positionX, positionY, 3, 3);

  }
}
