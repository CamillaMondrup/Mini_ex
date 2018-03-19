//Generative paint
//A program by Camilla Mondrup
//15/03 2018

//The rules for my program:
//1. Use only circles
//2. The circles fall from the top of the screen to the bottom
//3. When a circle reaches the bottom it starts from the top again



//Making an array for my circles
let drop = [];

function setup() {
  //Creating the canvas and the background
  createCanvas(windowWidth, windowHeight);
  background(255);

//Using a for-loop that loops until there are 20 circles and defining the values in the array:
  for (let i = 0; i<20; i++){
    //the circle will start at a random location,
    //but within the width of the canvas:
    let x = random(width);
    //the circle will start at a random spot outside of the canvas,
    //so that it looks like the circle is falling down from the top:
    let y = random (-300, -50);
    let r = random(6,9);
    let col = color(random(120,255), random(120,255), random(120,255));
    let speed = random(0,3);
    drop[i] = new cirkel(x, y, r, col, speed);
  }
}

function draw() {

//Using a for-loop to start the two methods
  for(let i = 0; i < drop.length; i++){
    drop[i].fall();
    drop[i].show();
  }
}

//creating a class:
class cirkel {
  constructor(x, y, r, col, speed) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.col = col;
    this.speed = speed;
  }

//The method fall is the function that initiates rule no. 2 and 3
  fall() {
    //this is rule no. 2 that creates the illusion that the ellipses fall from top to bottom:
    this.y = this.y+this.speed;
    //This is rule no. 3 that ensures that when a circle falls out of the screen it starts from the top again:
    if (this.y > windowHeight) {
      //When it starts from the top again, the program chooses new values for x, y, color and size:
      this.y = random(-300, -50);
      this.x = random(width);
      this.col = color(random(120, 255), random(120, 255), random(120, 255));
      this.r = random(6,9);
    }
    //This i made to make the circles change size when they fall, to create a more dynamic result:
    this.r = this.r + random(-1, 1)

  }
  show() {
    //This is where rule no. 1 is implemented, this is the function that draws the circles:
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.r*2);
  }
}
