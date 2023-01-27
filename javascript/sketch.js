let hand= [];
let handPlay;
let handDraw = false;

let heart=[];
let r,g,b;
let poem;

function preload(){
  hand[0]= loadImage('javascript/hand/hand1副本.png');
  hand[1]= loadImage('javascript/hand/hand2副本.png');
  hand[2]= loadImage('javascript/hand/hand3副本.png');
  hand[3]= loadImage('javascript/hand/hand4副本.png');
  hand[4]= loadImage('javascript/hand/hand5副本.png')
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    handPlay=0;
    r=0
    strokeWeight(1);
poem = 'Tell me it was for the hunger & nothing less. For hunger is to give the body what it knowsit cannot keep. That this amber light whittled down by another waris all that pins my hand to your chest.'
 
        heart[0]= createVector(random(width/2),random(height/2));
        heart[1]= createVector(random(width/2,width),random(height/2));
        heart[3]= createVector(random(width/2),random(height/2,height));
        heart[2]= createVector(random(width/2,width),random(height/2,height));

    
  }
  
  function draw() {
    background(220);
fill(r,52,49);
noStroke();

//draw heart here;
beginShape();
curveVertex(heart[0].x, heart[0].y);
for(let i=0; i<4;i++){
    curveVertex(heart[i].x, heart[i].y);
}
curveVertex(heart[3].x, heart[3].y);
endShape(CLOSE);

//text here
fill(0,52,49);
push();
translate((heart[0].x+heart[1].x)/2,(heart[0].x+heart[3].x)/2);
text(poem,0,0,200);
pop();


//draw hand here
if(handDraw){
    push();
    translate(mouseX,mouseY);
    scale(0.5,0.5);
    image(hand[handPlay],0,0);
    pop();
}
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

  function mouseDragged(){
   handDraw = true;
   if(frameCount%10 ===0){
    if(handPlay<4){
        handPlay++;
       if(r<222){
        r+=10;
       }else{
        r--;
       }
    
    }else{
        handPlay=0;
    }   
   }
  }
  function mouseReleased(){
    handDraw = false;
    handePlay=0;
   }