let human1, human2, ceiling, r, sizeX, sizeY;

function preload(){
    human1 = loadImage('../../source/human/human1.png');
    human2 = loadImage('../../source/human/human2.png');
    ceiling = loadImage('../../source/human/ceiling.jpeg');
    
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("sketch-container-4");
    rectMode(CENTER);
    imageMode(CENTER);
    angleMode(DEGREES);
    r = 30;
    sizeX = 100;
    sizeY = 200;

}
function draw(){
    // background(255);
    strokeWeight(3);
    noFill();
    
    // human iamge
    image(human1, windowWidth/2, windowHeight/2, windowWidth-500, windowHeight-500);

    // ceiling image
    push();
    rotate(r);
    image(ceiling, windowWidth/2, 0, sizeX, sizeY);
    r += 5;
    sizeX += 1.2;
    pop();

    // draw shapes
    rect(windowWidth/2, windowHeight/2, windowWidth - 100, windowHeight - 100);
    rect(mouseX, mouseY, 20, 20);
    
}

function mousePressed(){
    line(mouseX, mouseY, windowWidth/2,windowHeight/2);
}
