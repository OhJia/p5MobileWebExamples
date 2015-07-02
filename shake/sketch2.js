 
/*
Curious about the code? Great! Welcome to this code ;)
Feel free to copy and use this code
If you are going to blog or tweet about it or if you are going to create a better
code, please mantain the link to www.mobilexweb.com or @firt in Twitter.
*/

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
 
if (window.DeviceMotionEvent==undefined) {
	document.getElementById("no").style.display="block";
	document.getElementById("yes").style.display="none";
 
} else {
	window.ondevicemotion = function(event) {
		ax = event.accelerationIncludingGravity.x;
		ay = event.accelerationIncludingGravity.y;
	}
 
	setInterval(function() {
		vy = vy + -(ay);
		vx = vx + ax;
 
		var ball = document.getElementById("ball");
		y = y + vy * vMultiplier; // Rounding removed - Omiod
		x = x + vx * vMultiplier; // Rounding removed - Omiod
		
		if (x<0) { x = 0; vx = -vx*0.7; }
		if (y<0) { y = 0; vy = -vy*0.7; }
		if (x>document.documentElement.clientWidth-20) { x = document.documentElement.clientWidth-20; vx = -vx*0.7; }
		if (y>document.documentElement.clientHeight-20) { y = document.documentElement.clientHeight-20; vy = -vy*0.7; }
		
		ball.style.top = parseInt(y) + "px"; // Rounding added here - Omiod
		ball.style.left = parseInt(x) + "px"; // Rounding added here - Omiod
	}, delay);
} 
 
