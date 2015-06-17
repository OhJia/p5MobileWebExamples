document.body.addEventListener('touchstart', function(e){ e.preventDefault(); });

function setup() {
	var myCan = createCanvas(windowWidth, windowHeight);
	myCan.parent('p5Container');

	background(255, 200, 200);
	var c = color(255, 255, 0);
	fill(c);
	noStroke();
}

function draw() {
	// var c = color(255, 255, 0);
	// fill(c);
	// noStroke();
	// rect(mouseX, mouseY, 50, 50); for web, don't work on mobile
	//ellipse(touchX, touchY, 30, 30); // for mobile web

}

function touchMoved() {
	ellipse(touchX, touchY, 30, 30);
	return false;
}
