function wind(windspeed){
  /*for(var i = 0; i < 15; i++){
    var speed = 0.0050 *(i+= weatherData.wind.speed);
    var correlation = 1;
    var time = (frameCount * speed) + (i * correlation);
    var up = map(noise(time),0,1,0,height);
    var spacer = 80;
    var rotation = map(noise(time),0,1,360,720);
    var turn = map(noise(time),0,1,0,height);
    time = time + 100;
    */
    
     var time = frameCount*weatherData.wind.speed;
     var spacerH = 20;
     var amplitude = map(weatherData.wind.speed,0,20,displayWidth,height/2);
     var speed = 0.0050 *(i+= weatherData.wind.speed);
     var offset = height/2;
    
    for(var i = 0;i*spacerH < 500; i++){
      
      noStroke();
      fill(255,50);
     
      //the output of sin by default is between -1 and 1
      var tempY = (sin(time+(i*10))*amplitude)+offset;
      ellipse(i*spacerH,tempY,30,30);
    }
    if(weatherData.wind.speed>20){
      ellipse(i*spacerH+offset,tempY*speed,30,30);
    }
  }
//}  