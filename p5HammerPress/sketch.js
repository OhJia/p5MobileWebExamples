var diameter;
var distance;
var ex, ey;
var mc
var count;

function setup(){
  var myCan = createCanvas(windowWidth, windowHeight);
  var element = document.getElementById(myCan.elt);
  mc = new Hammer(element);
  
  count = 0;
  diameter = 50;
  ex = int(windowWidth/2);
  ey = int(windowHeight/2);
  
  setupPress();
}

function draw(){
  background(255);
  noStroke();
  if (count > 0){
    fill(color(ex, ey, count * 10.2, count * 10.2));
    ellipse(ex, ey, 100 + (40 - count), 100 + (40 - count));
    --count;
  }
  fill(color(ex, ey, 0));
  ellipse(ex, ey, diameter, diameter);  
}

function touchMoved() {
  ex = touchX;
  ey = touchY;
  return false;
}

function setupPress() {  
  mc.on("press", function(e){
    distance = int(dist(e.center.x, e.center.y, ex, ey));
    //console.log(e.center.x, e.center.y, ex, ey);
    //console.log(distance, diameter/2);
    if (distance < diameter/2) {
      //console.log('on ellipse')
      count = 25;    
    }
  });  
}






