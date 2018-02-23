//While you wait - by Camilla Mondrup
//21 February 2018

var size;
var song;
var a = 0;
var tekst=false;
var waitingWords=[];
var count=0;
var starttekst=true;
var frames=0;
var fr = 8;

function preload(){
  song = loadSound('JohnMayer.mp3');
}

function setup() {
//the canvas
  createCanvas(windowWidth, windowHeight);
  background(250,179,184);
//determines how quickly the throbber is going to rotate
  frameRate(fr);


//The box in the middle
  push();
  rectMode(CENTER);
  stroke(255,204,0);
  strokeWeight(10);
  fill(255);
  rect(width/2,height/2,windowWidth-700,windowHeight-300);
  pop();

//defining text in my array:
  waitingWords = ["Loading...", "Please wait...", "While you wait, take a deep breath...", "Listen to the song...","sit back and relax...", "enjoy a moment of not doing anything...", "take the time to reflect...","...upon the positive things in life...","think about: what really makes you happy?", "what do you really want to do with your life?"];
}

function draw() {
//the box that keeps drawing on top of the throbber to create an illusion of a trail behind the throbber
  push();
  stroke(255,204,0);
  strokeWeight(10);
  rectMode(CENTER);
  fill(255,80);
  rect(width/2,height/2,windowWidth-700,windowHeight-300);
  pop();

//making the size random, so that the circles change in size
  size = random(10,35);
  drawThrobber(11);

//the box that keeps drawing over the bottom text, so that the text at the bottom wont be on top of the each other
  push();
  rectMode(CENTER);
  noStroke();
  fill(250,179,184);
  rect(windowWidth/2,windowHeight-50,windowWidth,100);
  pop();

//start text
  push();
  textAlign(CENTER);
  fill(255);
  textSize(32);
  text('Click to see the most amazing thing ever!',windowWidth/2,100);
  pop();

//The box on top of the start text, that hides the text when mouse is pressed
  push();
  noStroke();
  rectMode(CENTER);
  fill(250,179,184,a);
  rect(windowWidth/2,0,windowWidth,250);
  pop();

  if(tekst) {
    textAlign(CENTER);
    textSize(25);
    fill(255);
    text(waitingWords[count],windowWidth/2,windowHeight-50);

  if(second()%3==0){
     frames++;
    if (count < waitingWords.length && frames==fr) {
      count=count+1;
      frames=0;

      }
    }
  }

}


function drawThrobber(num) {
  push();
  translate(width/2, height/2);
  // 360/num >> degree of each ellipse' move ;frameCount%num >> get the remainder that indicates the movement of the ellipse
  var cir = 360/num*(frameCount%num);  //to know which one among 9 possible positions.
  rotate(radians(cir));
  noStroke();
  fill(70,a);
  ellipse(40,0,size);  //the moving dot(s), the x is the distance from the center
pop();
}


function mousePressed (){
  a = 255;
  tekst=true;
  song.loop();
}
