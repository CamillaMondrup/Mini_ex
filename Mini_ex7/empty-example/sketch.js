var noun =[];
var verb =[];
var adjective = [];
var pronoun = [];
var n = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  noun = ["bird", "the grave", "raven", "the Nightly shore", "the bleak December", "ember", "ghost", "floor", "the morrow", "my books", "sorrow", "the angels", "midnight", "lore", "chamber door", "curtain", "terrors", "heart", "entrance", "tapping"];
  verb = ["shorn", "shaven", "craven", "wandering", "remember", "wrought", "wished", "borrow", "pondered", "nodded", "napping", "tapping", "thrilled", "filled", "stood repeating"];
  adjective = ["dreary", "weak", "weary", "forgotton", "gently", "silken", "sad", "uncertain", "rustling", "purple", "fantastic", "still", "ebony", "stern", "ancient", "lordly", "plutonian", "distinctly", "dying", "eagerly", "vainly", "nameless"];
  pronoun = ["it", "I", "me", "the lost Lenore", "the rare and radiant maiden", "someone", "some visitor", "some late visitor"];

  for (var n = 0; n < noun.length; n++) {
    n = random();
  }
}

function draw() {
  background(80);
  fill(255);
  textAlign(CENTER);
  textSize(32);
  textFont("courier");
  text("Then this ebony "+ noun[n] + " beguiling my sad fancy into smiling,\nBy the grave and stern decorum of the countenance it wore,\nThough thy crest be shorn and shaven, thou, I said, art sure no craven,\nGhastly grim and ancient Raven wandering from the Nightly shore\nTell me what thy lordly name is on the Night’s Plutonian shore!\nQuoth the Raven Nevermore.", windowWidth/2,windowHeight/2-100);

//

}
