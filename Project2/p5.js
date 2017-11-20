/*

Project 2 (Green): Collage & Manipulation

Using text and image, create a generative collage. 
This collage should change over time, by user input or animation. 
This collage could be an interactive narrative non-linear or stop motion piece that tells a story. 
It must be done in P5.js. 
You may use graphics, but you are to mainly use image and text and to choreograph them over time.

*/

var img, img2;
var x, y, rotation;
var textX, textY, siz; 
var string1;
var string2;
var string3;
var string4;
var string5;
var string6;

//var destination;

function preload() {

  img = loadImage("data/background.gif");
  img2 = loadImage("data/spaceship.png");
  nova = loadFont("data/font0.otf");
}

function setup() {
  createCanvas(600, 600);
  //img = createImg("data/background.gif");
  //destination = createImage(source.width, source.height);
  frameRate(15);
  x = 0.0;
  y = width/4.0;
  rotation = 0.0;
  textX = 400;
  textY = height;
  siz = 100;

  string1 = "ASTEROID WARS";
  string2 = "The Myst";
  string3 = "A long long time ago"
  string4 = "In an asteroid belt far far away";
  string5 = "A wormhole opens up in the heart of the belt";
  string6 = "A team of scientists are sent on a spaceship to investigate."
  
  textY = textY-6;
  siz++;

  if (textY<0)
  {
    textY=height;
    siz=100;
  }

}

function draw() {
  image(img,0,0);

  //img.position(0,0);
  
  push();
    translate(200, 100);
    scale(0.3);
    rotate(rotation);
    image(img2, x, 0);
  pop();

  x += 1.0;
  rotation += 0.01;
  
  if( x > width) x = 0;
  if(rotation > 5) rotation = 0;

  //text();

  //textFont(font0);  
}





