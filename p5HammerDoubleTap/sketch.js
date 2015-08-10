var xspacing = 4;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 15.0; // Height of wave
var period = 500.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave

// Hammer
var mc;

var changeValue = 0;
var changeAmp = 0;

function setup() {
  var myCan = createCanvas(windowWidth, windowHeight);
  mc = new Hammer(myCan.elt);
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
  
  setupDoubleTap(); 
}

function draw() {
  background(0);
  calcWave();
  renderWave();
}

function calcWave() {
  // Increment theta (try different values for 
  // 'angular velocity' here
  theta = theta + 0.02 + changeValue;

  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*(amplitude+changeAmp);
    x+=dx;
  }
}

function renderWave() {
  stroke(255);
  fill(255);
  // A simple way to draw the wave with an ellipse at each location
  for (var x = 0; x < yvalues.length; x++) {
    line(x*xspacing, height, x*xspacing, height/2+yvalues[x]);
    //ellipse(x*xspacing, height/2+yvalues[x], 16, 16);
  }
}

function setupDoubleTap() {  
  mc.on("doubletap", function(e){
    changeValue = 0.6;
    changeAmp = 35;       
  }); 
  setInterval(function(){ 
      if (changeValue > 0){
        changeValue = changeValue / 1.5;
      }
      if (changeAmp > 0){
        changeAmp = changeAmp / 5;
      }
  }, 900);
}