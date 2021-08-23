function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES)
  }
  
  function draw() {
    background("#f96d6d");
    translate(width/2,height/2);
    rotate(-90)
    
    
    let sec=second();
    let min=minute();  
    let hr=hour();
    
   
    strokeWeight(8);
    stroke("#a9d7f6");
    noFill();
    
    
    let secAngle=map(sec,0,60,0,360);
      arc(0,0,350,350,0,secAngle);
  
    stroke("#8fb1e9")
    let minAngle=map(min,0,60,0,360);
     arc(0,0,300,300,0,minAngle);
    
    stroke("#ebe534")
    let hrAngle=map(hr%12,0,12,0,360);
     arc(0,0,250,250,0,hrAngle);
    
      push();
      rotate(secAngle)
      stroke("#34ebbd")
      line(0,0,175,0)
    pop();
    
  
    push();
     rotate(minAngle);
      stroke("#2b8770");
      line(0,0,150,0);
    pop();
    
  
    
    push()
     rotate(hrAngle)
      stroke("#1b4d40")
      line(0,0,125,0)
    pop()
    
    
    push()
      stroke("orange")
      point(0,0)
    pop()
  }