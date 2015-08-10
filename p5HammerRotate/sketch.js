var diameter;
var ex, ey;
var mc;
var rotation = 0;
var size;

function setup(){
  var myCan = createCanvas(windowWidth, windowHeight);
  mc = new Hammer(myCan.elt);
  mc.get('rotate').set({ enable: true });
  
  diameter = 100;
  ex = int(windowWidth/2);
  ey = int(windowHeight/2);
  size = ey / 10;

  setupRotate();
}

function draw(){
  background(255);
  stroke(0);
  strokeWeight(5);
  noFill();
  
  translate(ex, ey);
  for (var i = 0; i < ey; i++) {
    rotate(rotation);
    diameter = i * size + 50; 
    rect(-diameter/2, -diameter/2, diameter, diameter); 
  }
   
}

function setupRotate() {  
  mc.on("rotate", function(e){
    rotation = e.rotation/10;
  });  
}