// **** Global Variables ***** //
var apiKey = '06cd1411e9da072272277dcf88028591';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
var advanceURL = 'http://api.openweathermap.org/data/2.5/forecast?q='
var weatherData;
var button;
var cityInput;
var country;
var description = '';
var temperature = 0;
var temperature_min;
var temperature_max;
var humidity = 0;
var pressure = 0;
var rain = '';
var date = '';
var dt = '';
var wind = 0;
var list;

// **** Setup Function ****** //
function setup(){
  createCanvas(800, 800);
  button = select('#submit');
  cityInput = select('#city');
  button.mousePressed(queryAPI);
  noLoop();
}

// **** Query API Function *** //
function queryAPI(){
  var request1 = baseURL + cityInput.value() + '&apikey=' + apiKey;
  var request2 = advanceURL + cityInput.value() + '&apikey=' + apiKey;
  loadJSON(request1, getWeatherData);
  loadJSON(request2, getWeatherData);
}

function getWeatherData(apiData){
  weatherData = apiData;
  country = weatherData.sys.country;
  description = weatherData.weather[0].description;
  temperature = weatherData.main.temp;
  humidity = weatherData.main.humidity;
  pressure = weatherData.main.pressure;
  temperature_min = weatherData.main.temp_min;
  temperature_max = weatherData.main.temp_max;
  wind = weatherData.wind.speed;

  date = weatherData.dt;
  print(weatherData);
  redraw();
}

// **** Draw Function **** //
function draw(){
  background(225);
  if (weatherData){
    fill(66,122,244);
    noStroke;
    rect(50, 50, 450, 240);
    noStroke;
    fill(255);
    textSize(25);
    text(cityInput.value() + ' ' + country, 80, 100);
    textSize(50);
    text(temperature + ' F', 80, 170);
    textSize(15);
    console.log(rain['3h']);
    text('Wind Speed' + ' ' + wind, 80, 250);
    text(description, 370, 250);
    text(temperature_max + ' F', 80, 220);
    text(temperature_min + ' F', 150, 220);
    text(date, 370, 100);
    textSize(20);



    fill(132, 164,216);
    noStroke;
    rect(50, 380, 650, 350);
    line(50, 430, 700, 430);
    text(weatherData.list.date(), 50, 428);
    text(weatherData.list.main.temp(), 50, 800);
  }
}
