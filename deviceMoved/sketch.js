var bgColor;

function setup() {
  var myCan = createCanvas(windowWidth, windowHeight);
  myCan.parent('p5Container');
  bgColor = [
     random(50, 255),
     random(0, 200),
     random(50, 255)
  ]
}

function draw() {
  background(bgColor[0], bgColor[1], bgColor[2]);
}

function deviceMoved() {
    bgColor = [
       map(accelerationX, -90, 90, 100, 175),
       map(accelerationY, -90, 90, 100, 200),
       map(accelerationZ, -90, 90, 100, 200)
    ]    
}

