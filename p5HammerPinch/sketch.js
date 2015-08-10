var diameter;
var distance;
var ex, ey;
var mc

function setup(){
  var myCan = createCanvas(windowWidth, windowHeight);
  var element = document.getElementById(myCan.elt);
  mc = new Hammer(element);
  mc.get('pinch').set({ enable: true });
  
  diameter = 50;
  ex = int(windowWidth/2);
  ey = int(windowHeight/2);

  setupPinch();
}

function draw(){
  background(255);
  noStroke();
  fill(color(0));
  ellipse(ex, ey, diameter, diameter);  
}

function setupPinch() {  
  mc.on("pinchout pinchin", function(e){
    distance = int(dist(e.center.x, e.center.y, ex, ey));
    //console.log(e);
    if (distance < diameter/2) {
      if (e.type === "pinchin") { 
        diameter = diameter - 3; 
      } else if (e.type === "pinchout") { 
        diameter = diameter + 3; 
      }     
    }
  });  
}