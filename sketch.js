var weatherData;
var mapImage;
var myFont;
var centerX;
var centerY;
//selects the location of the circle
var pin;
var selectionX;
var selectionY;
var mapLocationX = 100;
var mapLocationY = 150;
var mapSizeX = 540;
var mapSizeY = 360;
var temperature;
var wind;
var rain;

function preload(){
  myFont = loadFont("TCB_____.ttf");
  mapImage = loadImage("map1.png");
  pin = loadImage("pin.png");
  
}

function setup() {
  createCanvas(1080,720);
  angleMode(DEGREES);
  
  textFont(myFont);
  textSize(24);
  textAlign(LEFT);
  fill('white');
  
  centerX = width/2;
  centerY = height/2;
  
  loadJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=586c247ad8d56d6dce5eaa3184b383e1&units=imperial", gotData);
  
}

function gotData(data){
  //this callback function executes once the json has arrived
  //takes the json in the data argument and dumps it in the weatherData variable
  weatherData = data;
}

function draw() {
  background(70);
  /*var time = frameCount * 0.001;
  var up = map(noise(time),0,1,0,height);
  */
  
  image(mapImage,mapLocationX,mapLocationY,mapSizeX,mapSizeY);
  //mapImage = (mapLocationX,mapSizeX,mapLocationY,mapSizeY);
  fill('white');
  textSize(30);
  text("WEATHER",width/2,100);
  textSize(24);
  //image(pin,selectionX,selectionY,20,20);
  ellipse(selectionX,selectionY,10,10);
  fill('white');
    
  //if the mouse is over the map
  if(mouseX > mapLocationX &&
    mouseX < (mapLocationX + mapSizeX) &&
    mouseY > mapLocationY &&
    mouseY < (mapLocationY + mapSizeY)
    ){
    //draw the crosshair lines
    line(mouseX,mapLocationY,mouseX,mapLocationY + mapSizeY);
    line(mapLocationX,mouseY,mapLocationX + mapSizeX,mouseY);
    textSize(20);
    //noStroke();
    fill(255);
    
    //draw the lat and long coordinates
    text(floor(map(mouseY,mapLocationY,mapLocationY + mapSizeY,90,-90)),mapSizeX+30,mouseY - 4);
    text(floor(map(mouseX,mapLocationX,mapLocationX + mapSizeX,-180,180)),mouseX - 20,mapLocationY + 20);
    
    }
  
    
 //if weatherData is undefined, then this code will not execute undefined = FALSE anything
  if(weatherData){
    
    temperature();
    wind();
    rain();
    
    fill('white');
    //Latitude & Longitude
    text("Latitude: " + weatherData.coord.lat +"°" + " Longitude: " + weatherData.coord.lon + "°",300,600);
    
    //City Name
    text("City: " + weatherData.name + " | Country: " + weatherData.sys.country,300,580);

    
    //////////////////////////////////////////////////////////////////////////////////////////
    //City Name & Country Name
    text("City: " + weatherData.name + " | Country: " + weatherData.sys.country,650,height/2);
    
    //Temperature & Weather Type
    text(weatherData.main.temp + " °F |" + weatherData.weather[0].main,650,390);
    
    //Wind speed
    text("Wind Speed(MPH): "+ weatherData.wind.speed,650,420);
    
  }

}


function mousePressed(){
  if(mouseX > mapLocationX &&
    mouseX <(mapLocationX + mapSizeX) &&
    mouseY > mapLocationY &&
    mouseY < (mapLocationY + mapSizeY)
    ){
      selectionX = mouseX;
      selectionY = mouseY;
      //grab the JSON based on the new selection
      var lon = map(selectionX,mapLocationX,mapLocationX + mapSizeX, -180,180);
      var lat = map(selectionY,mapLocationY,mapLocationY + mapSizeY, 90,-90);
      var start = "http://api.openweathermap.org/data/2.5/weather?lat="
      var end = "&appid=586c247ad8d56d6dce5eaa3184b383e1&units=imperial"
      var url = start + lat + "&lon=" + lon + end;
      loadJSON(url, gotData);
      //println(mousePressed);
    }
}
