var posX=0
var speedX=2

var posY=0
var speedY=2

function rain(rainfall){
  
  for(var j = 0; j<25; j++){
    var speed = 0.7;
    //var correlation = 0.005;
    var time = (frameCount * speed);
    var up = map(noise(time),0,1,0,width);
    //offset the across variable in time
    var spacer = 100;
    //var turn = map(noise(time),0,1,0,height);
   
    //use 0,0 if the location is already defined in translate
      if(weatherData.weather[0].main === "Rain"){
        ellipse(posX,posY,50,40);
        fill(100,228,255,55);
        posX+=speedX;
        posY+=speedY;
        
      }
      if(weatherData.weather[0].main === "Drizzle"){
        ellipse(posX,posY,50,50);
        fill(100,228,255,40);
        posX+=speedX;
        posY+=speedY;
      }
    }
    
    if(posX > width){
      posX = 0;
      
    }
    if(posY > height){
      posY = 0;
      
    }
 }
