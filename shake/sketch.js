var balls = []; // array of Jitter objects
var value = 0;

function setup() {
   var myCan = createCanvas(windowWidth, windowHeight);
   myCan.parent('p5Container');
   //background(0);
  //createCanvas(710, 400);
  // Create objects
  //setMoveThreshold(2000);
  for (var i=0; i<50; i++) {
    balls.push(new Ball());
  }
}

function draw() {
  background(value);
  for (var i=0; i<balls.length; i++) {
    balls[i].move();
    balls[i].turn();
    balls[i].display();
  }
  checkForShake();
}

// Jitter class
function Ball() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.xspeed = random(-1, 1);
  this.yspeed = random(-1, 1);
  this.direction = 1;


//   this.move = function() {
//     this.x += random(-this.speed, this.speed);
//     this.y += random(-this.speed, this.speed);
//   };
    this.move = function() {
        this.x += this.xspeed * this.direction;
        this.y += this.yspeed * this.direction;       
    };
    
    this.turn = function() {
        if (this.x >= windowWidth || this.x <= 0){
            this.direction = this.direction * -1;
        }
        else if (this.y >= windowHeight || this.y <= 0){
            this.direction = this.direction * -1;
        }
    }
    
    this.shake = function() {
       this.xspeed += random(0, 5);
       this.yspeed += random(0, 5);
       return false;
    }

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

// function onDeviceTurn() {
// 	value = value + 5;
// 	if (value > 255) {
// 	value = 0;
// 	}
// 	for (var i=0; i<balls.length; i++) {
// 		balls[i].shake();
//   	}
// }

function checkForShake() {
    accSpeed = abs(accelerationX - pAccelerationX)
    if (abs(accelerationX - pAccelerationX) > 20) {
        for (var i=0; i<balls.length; i++) {
     	    balls[i].shake();
       	}
    }
}