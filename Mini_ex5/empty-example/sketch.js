let stars = [];
let buttonStart;
let s;
let sEnd;
let space;
var begin = false;
var tekst = false;

function preload(){
  space = loadImage('space.jpeg');
}

function setup() {
  createCanvas(800, 500);

  //making an array called 'stars'
  for (let i = 0; i<15; i++){
    let xpos = random(width);
    let ypos = random(height);
    let r = random(10, 50);
    let farve = color(random(200, 255), random(200, 255), random(200, 255));
    stars[i] = new Planets(xpos, ypos, r, farve);
  }

  //the start button:
  buttonStart = createButton('start game');
  buttonStart.mousePressed(beginGame);
  buttonStart.position(370, 20);
}

//the program removes one the index in my array everytime the user clicks inside one of the circles
function mousePressed(){
  for (let i = 0; i < stars.length; i++) {
    if (stars[i].contains(mouseX, mouseY)) {
      stars.splice(i, 1);
      if (stars.length == 0) { //when all the circles are removed the text appears:
        tekst = true;
        sEnd = second()-s; //this line is calculating how much time has passed between pressing the button and when the circles are gone
      }
    }
  }
}


function draw() {
  image(space, 0, 0, 800, 500);

  if (begin) {
    for (let i = 0; i < stars.length; i++) {
      stars[i].move();
      stars[i].show();
      }
    }

  if (tekst) {
    push();
    textAlign(CENTER);
    textSize(32);
    fill(255);
    text('You finished in \n' + sEnd + ' seconds\n \n Refresh the page to try again!', 800/2, 500/2);
    pop();
  }
}

class Planets {
  constructor(xpos, ypos, r, farve) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.r = r;
    this.farve = farve;
  }

  contains(px, py) {
    let d = dist(px, py, this.xpos, this.ypos);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.xpos = this.xpos + random(-1, 1);
    this.ypos = this.ypos + random(-1, 1);
  }

  show() {
    noStroke();
    fill(this.farve);
    ellipse(this.xpos, this.ypos, this.r * 2);
  }
}

function beginGame(){
  begin = true;
  s = second();
}
