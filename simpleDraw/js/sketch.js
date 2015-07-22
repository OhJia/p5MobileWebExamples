// document.body.addEventListener('touchstart', function(e){ e.preventDefault(); });

function setup() {
	var myCan = createCanvas(windowWidth, windowHeight);
	myCan.parent('p5Container');

	strokeWeight(10)
	stroke(0);
}

function touchMoved() {
	line(touchX, touchY, ptouchX, ptouchY);
	return false;
}
