var diameter;
var ex, ey;
var mc;
var rotation = 0;
var size;
var s;

function setup(){
  var myCan = createCanvas(windowWidth, windowHeight);
  mc = new Hammer(myCan.elt);
  mc.get('rotate').set({ enable: true });
  
  diameter = 100;
  ex = int(windowWidth/2);
  ey = int(windowHeight/2);
  s = ex - 100;
  size = s / 5;

  setupRotate();
}

function draw(){
  background(255);
  noStroke();
  
  translate(ex, ey);
  for (var i = s; i > 0; i--) {
     if (i % 2 === 0) {
        fill(255, 0, 0);
     } else {
        fill(255);
     }
    rotate(rotation);
    diameter = i * size + 20; 
    rect(-diameter/2, -diameter/2, diameter, diameter, 20 + i * 3); 
  }
   
}

function setupRotate() {  
  mc.on("rotate", function(e){
    rotation = e.rotation/10;
  });  
}