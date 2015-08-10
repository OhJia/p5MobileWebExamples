var x, y;
var diameter = 100;

var tDistance; // Distance between two touches
var pTDistance = 0; //Previous distance between two touches

// Distance between touch[0] and touch[1] to center of element
var distance0, distance1; 
var touchingElement = false;

function setup() {
  var myCan = createCanvas(displayWidth, displayHeight);
  myCan.parent('p5Container');
  x = width/2;
  y = height/2;
  rectMode(CENTER);
}

function draw() {
  background(255);
  stroke(0);
  strokeWeight(5);
  rect(x, y, diameter, diameter);
}

// When touch event starts, check it's two touches
// and whether both touches are on the element
function touchStarted() {
  if (touches.length === 2) {
    touchingElement = false;
    pTDistance = 0;
    distance0 = floor(dist(touches[0].x, touches[0].y, x, y));
    distance1 = floor(dist(touches[1].x, touches[1].y, x, y));
    if (distance0 <= diameter/2 + 15 && distance1 <= diameter/2 + 15) {
      touchingElement = true;      
    } 
  }
}

// Update diameter based on different between tDistance and pTDistance 
function touchMoved() {
  if (touches.length === 2) {
    if (touchingElement === true) {
      tDistance = floor(dist(touches[0].x, touches[0].y, touches[1].x, touches[1].y));
      if (pTDistance > 0) {
        diameter += tDistance - pTDistance;
      }
      pTDistance = tDistance;     
    }    
  }   
  return false;
}





