var mic;
var fft;
var startButton;
var stopButton;
var a = 255;

function setup() {
   createCanvas(710,400);

//Getting input from computer mic:
   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);

//Creating a button with the text 'start':
   startButton = createButton('start');
   startButton.position(270, 300);
//Creation a function that fires when the button is pressed:
   startButton.mousePressed(start);

//Creating a button with the text 'stop':
   stopButton = createButton('stop');
   stopButton.position(370,300);
//Creation a function that fires when the button is pressed:
   stopButton.mousePressed(stop);

}

function draw() {
background(162,148,201);

//Creating the frequency spectrum:
   var spectrum = fft.analyze();
   beginShape();
   fill(162,148,201);
   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, 200, 0) );
   }
   endShape();

//Creating a box that is placed over the frequency spectrum
//to hide it/reveal it when a button is pressed:
   push();
   fill(162,148,201,a);
   rect(0,0,710,200);
   pop();

}


function start(){
    a = 0;
}

function stop(){
  a = 255;

}
