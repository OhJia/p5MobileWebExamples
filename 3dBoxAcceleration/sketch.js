// template http://bit.ly/1g8h17S

function setup(){
  var myCan = createCanvas(windowWidth, windowHeight, 'webgl');
  myCan.parent('p5Container');
}

function draw(){
  background(255, 255, 255, 255);

  translate(-width/2, 0, -600);
  
  normalMaterial();
  rotateX(accelerationX * 0.05);
  rotateY(accelerationY * 0.05);
  box(80, 80, 180);

}