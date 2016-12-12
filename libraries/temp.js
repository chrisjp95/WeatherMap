function temperature(temp){
  
  for(var i = 0; i < 1; i++){
    var speed = (0.0005 * weatherData.main.temp);
    var correlation = 15;
    var time = (frameCount * speed);
    var up = map(noise(time),0,1,0,height);
    var turn = map(noise(time),0,1,0,height);
    var spacer = 25;
      
      if(weatherData.main.temp < 50){
        fill(100,225,255,75);
      }else if(weatherData.main.temp > 51){
        fill(255,150,0,75);
      }
    
     push();
        translate(790,360);
        rotate(turn);
        //fill(207,224,252,75);
        noStroke();
        ellipse(0,0,330,335);
        
     pop();
  
  }

}