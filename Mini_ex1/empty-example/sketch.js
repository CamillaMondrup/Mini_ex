var spotx, spoty;

var r, g, b;

var size;

function setup() {
  createCanvas(1440, 700);
  background(255,255,200,);

      r = random(255);
      g = random(255);
      b = random(255);

}

function draw() {


  spotx = random(0, width);
  spoty = random(0, height);

  size = random(0,500);

  noStroke();
  fill(r, g, b, 100);
  ellipse(spotx, spoty, size);


text
textSize(40);
fill(0,102,153);

text('Hello, press the screen!',550,350);


if(mouseIsPressed) {

  r = random(255);
  g = random(255);
  b = random(255);
}


}
//
