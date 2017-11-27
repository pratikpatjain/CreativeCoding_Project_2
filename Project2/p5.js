/*

Project 2 (Green): Collage & Manipulation

Using text and image, create a generative collage. 
This collage should change over time, by user input or animation. 
This collage could be an interactive narrative non-linear or stop motion piece that tells a story. 
It must be done in P5.js. 
You may use graphics, but you are to mainly use image and text and to choreograph them over time.

*/

var img
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var img11;
var x = 0;
var y = 2000;
var rotation;
var string1;
var string2;
var string3;
var string4;
var cx = 2500;
var cy = 2000;
var r = 150;
var a = 3.14;
var count = 0;

//var destination;

function preload() {

  img = loadImage("data/background.png");
  img2 = loadImage("data/spaceship.png");
  img3 = loadImage("data/planetwithring.png");
  img4 = loadImage("data/gasgiant.png");
  img5 = loadImage("data/iceball.png");
  img6 = loadImage("data/ringsplanet.png");
  img7 = loadImage("data/dirtball.png");
  img8 = loadImage("data/aquaball.png");
  img9 = loadImage("data/lavaball.png");
  img10 = loadImage("data/centerhole.png");
  img11 = loadImage("data/jupiball.png");
  nova = loadFont("data/font0.otf");
}

function setup() {
  createCanvas(900, 720);
  frameRate(15);
  rotation = 0.0;

  string1 = "The Mysterious Vortex";
  string2 = "In a planetary belt far far away";
  string3 = "A wormhole opens up in the heart of the belt";
  string4 = "A team of scientists are sent on a spaceship to investigate.";

}

function draw() {

  image(img,0,0); //Background Image

  image(img10, 500+sin(frameCount)*3, //BlackHole Center
        400+cos(frameCount*0.25)*1);

  image(img3, 75+sin(frameCount*0.05)*7,
        75+cos(frameCount*0.05)*7);

  image(img4, 480+sin(frameCount*0.08)*100,
        340+cos(frameCount*0.08)*75);

  image(img8, 555+sin(frameCount*0.09)*80,
        375+cos(frameCount*0.09)*80);

  image(img6, 605+sin(frameCount*0.08)*10,
        570+cos(frameCount*0.08)*31);

  image(img7, 25+sin(frameCount*0.08)*5,
        350+cos(frameCount*0.08)*11);

  image(img5, 775+sin(frameCount*0.08)*2,
        50+cos(frameCount*0.08)*2);

  image(img9, 220+sin(frameCount*0.08)*11,
        560+cos(frameCount*0.08)*10);

  image(img11, 75+sin(frameCount*0.08)*1,
        650+cos(frameCount*0.08)*1);

  textFont(nova);
  strokeWeight(2);
  fill(215+ sin(frameCount*0.1)*100,215,0);
  textSize(24);
  text(string1,200,50);
  textSize(16);
  count++;
  if(count > 40)
  text(string2,250,100);
  if(count > 80)
  text(string3,300,135);
  if(count > 120)
  text(string4,350,170);


  scale(0.2);
  if (x < 2300){
    image(img2, x, y);
    x = x + 20;
    y = y + random(-7,7);
  }

  else {

    spiral();
  }
}

function spiral(){

var x = cx + r * cos(a);
var y = cy + r * sin(a);
image(img2, x, y);
a = a + 0.1;
console.log(a);
}


