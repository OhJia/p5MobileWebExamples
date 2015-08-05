// template http://bit.ly/1g8h17S

var diameter;
var distance;
var ex, ey;
var mc
var count;

function setup(){
  var myCan = createCanvas(windowWidth, windowHeight);
  myCan.parent('p5Container');
  var element = document.getElementById('p5Container');
  mc = new Hammer(element);
  mc.get('pinch').set({ enable: true });
  
  count = 0;
  diameter = 50;
  ex = int(windowWidth/2);
  ey = int(windowHeight/2);
  
  pinched();
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

// function touchMoved() {
//   ex = touchX;
//   ey = touchY;
//   return false;
// }

function pinched() {  
  mc.on("pinch", function(e){
    distance = int(dist(e.center.x, e.center.y, ex, ey));
    //console.log(e.center.x, e.center.y, ex, ey);
    //console.log(distance, diameter/2);
    //e.preventDefault();
    if (distance < diameter/2) {
      //console.log('on ellipse')
      count = 25;    
    }
  });  
}






