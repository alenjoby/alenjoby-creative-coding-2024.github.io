var word ="Bath Spa University "; //Creating a variable to store the Word
var font1; //Creating a variable named font1

function preload(){
  font1 = loadFont ("F5.ttf"); //loading the word to the variable font 1
}

var noiseVal; 

var noiseScale=0.005;

 function setup() { 

createCanvas(600, 400);
  fill(255,255,255);
  textFont(font1,50);
  textAlign (CENTER);
  text( word, width/2, height/2);

colorMode(HSB, 360, 100, 100);
 

//noprotect

 for (var y = 0; y < height; y++) { 

for (var x = 0; x < width; x++) {

 noiseDetail(2, 0.5);

 noiseVal= noise((x) * noiseScale, (y) * noiseScale); stroke(20, 30, noiseVal*30);

 point(x,y);

 } 

}

 }