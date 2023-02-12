//I tried to use loadSound but it said it's undefined fucntion.
// I add <script src="path/to/p5.sound.js"></script> in the header of index.html. But it doesn't work.
let rose, chainsaw;
let moveX, moveY;
let shake;
function preload(){
    rose = loadImage('./../source/rose/rose.png');
    //chainsaw = loadSound('../../source/rose/chainsaw.wav');
    
}
function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("sketch-container-3");
    imageMode(CENTER);

    moveX = 0;
    moveY = 0;
    shake = false;
}
function draw(){
    background(51, 24, 54);
    push();
    translate(windowWidth/2+ moveX, windowHeight/2+ moveY);
    scale(0.1,0.1);
    image(rose,0,0);
    pop();
    if(shake){
        moveX =random(-5,5);
        moveY =random(-5,5);
        //chainsaw.play();
    }
}
function mousePressed(){
   shake= true;
}

function mouseReleased(){
    shake= false;
 }
 