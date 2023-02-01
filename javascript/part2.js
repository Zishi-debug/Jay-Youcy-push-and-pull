let sky, body, lotus, lotus2;
let x, y, x_, y_;
function preload() {
  sky = loadImage('../source/lotus/sky.jpeg');
  body = loadImage('../source/lotus/body.png');
  lotus = loadImage('../source/lotus/lotus.png');
  lotus2 = loadImage('../source/lotus/lotus2.png');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container");
  x = 0;
  y = 0;
  x_ = windowWidth/2;
  y_ = windowHeight;
}

function draw() {
  background(255);
  
  fill(0);
  rect(0, windowHeight/2, windowWidth, windowHeight/2);
  
  // Draw images
  image(sky, 0, 0, windowWidth, windowHeight/2);
  image(lotus, x_, y_, 400, 400);
  image(lotus2, windowWidth - 200, 300, 200, 400);
  image(body, x, y, 300, 500);
  x ++;
  y +=2;
  
  if(y > windowHeight) {
    y_ --;
    }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}