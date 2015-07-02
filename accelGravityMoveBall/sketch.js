// Position Variables
var x = 0;
var y = 0;
 
// Speed - Velocity
var vx = 0;
var vy = 0;
 
// Acceleration
var ax = 0;
var ay = 0;
 
var delay = 10;
var vMultiplier = 0.01;

function setup() {
    var myCan = createCanvas(windowWidth, windowHeight);
    myCan.parent('p5Container');
    frameRate(2000);
    fill(0);
}

function draw() {
    background(255);
    ballMove();
	ellipse(x, y, 30, 30);
}

function ballMove() {

	window.ondevicemotion = function(event) {
		ax = event.accelerationIncludingGravity.x;
		ay = event.accelerationIncludingGravity.y;
	}

	// ax = accelerationX;
	// ay = accelerationY;

	vy = vy + -(ay);
	vx = vx + ax;
	y = y + vy * vMultiplier; // Rounding removed - Omiod
	x = x + vx * vMultiplier; // Rounding removed - Omiod

	if (x < 0) { 
		x = 0; 
		vx = -vx * 0.7; 
	}
 	if (y < 0) { 
 		y = 0; 
 		vy = -vy * 0.7; 
 	}
 	if (x > windowWidth - 20) { 
 		x = windowWidth - 20; 
 		vx = -vx * 0.7; 
 	}
 	if (y > windowHeight - 20) { 
 		y = windowHeight - 20; 
 		vy = -vy * 0.7; 
 	}
	
}