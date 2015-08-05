var diameter;
var distance;
var ex, ey;
var moveH;

// new Hammer 
var mc

function setup(){
  var myCan = createCanvas(windowWidth, windowHeight);
  myCan.parent('p5Container');
  var element = document.getElementById('p5Container');
  mc = new Hammer(element);
  
  moveH = 0;
  diameter = 100;
  ex = int(windowWidth/2);
  ey = int(windowHeight/2);

  hammerSwiped();
}

function draw(){
  background(255);
  
  noStroke();
  fill(color(0));
  
  if (moveH != 0) {
    ex = ex + moveH;
    if (ex + diameter < 0) {
      ex = width;
    } else if (ex > width) {
      ex = 0;
    }
  } 
  
  rectMode(CENTER);
  rect(ex, ey, diameter, diameter); 
  
}
function touchMoved() {
  return false;
}

function hammerSwiped() {  
  mc.on("swipeleft swiperight", function(e){
      if (e.type === "swipeleft") { 
        moveH = -3;
      } else if (e.type === "swiperight") { 
        moveH = 3; 
      }
  });  
}