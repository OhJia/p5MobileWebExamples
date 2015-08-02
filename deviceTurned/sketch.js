var value = 0;

function setup() {
    var myCan = createCanvas(windowWidth, windowHeight);
    myCan.parent('p5Container');
}

function draw() {
  background(value);
}
function deviceTurned() {
	value = value + 5;
	if (value > 255) {
	value = 0;
	}
}

