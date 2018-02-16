var mona; //declare variable 'mona'
var monaSmile; //declare other variale as monaSmile
var textType; //declare variable for text font

function preload () { //using preload to make sure that the images are ready when
  //the program starts
  mona = loadImage('monalisa.jpg'); //inniciate variable mona
  monaSmile = loadImage('monalisaSmile.png'); //iniciate other variable monaSmile
  textType = loadFont ('typewriterfont.ttf'); //inniciate variable for text font

}

function setup() {
  createCanvas(mona.width/2, mona.height/2) //create a canvas that is the exact
  //size as the image


}

function draw() {
  image(mona, 0, 0, mona.width/2, mona.height/2); //load image that is half the
  //size of the original, because it was too big :)

  noStroke(); //drawing an ellipse that is see-through because i need an area
  //that is defined.
  fill(100, 200, 255, 0);
  ellipse(223,217,55);
  fill(0)
  textSize(30);
  textFont(textType); //I wanted to use my own text font
  text("poke my nose", 200, 150);

}


// When mouse is pressed
function mousePressed() {
  //check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 223, 217);
  if (d < 27) {
    //When mouse is inside the circle, then change the image from mona to
    //monaSmile
mona=monaSmile;

  }
}
