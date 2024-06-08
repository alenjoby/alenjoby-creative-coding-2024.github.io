let img;
let maskImg;
let myFont;

function preload() {
  // Load the main image
  img = loadImage('/Images/2.jpg');
  // Load the font
  myFont = loadFont('/Fonts/F5.ttf');
}

function setup() {
  createCanvas(401, 400);
  
  
  maskImg = createGraphics(1000, 1000);
  
  
  maskImg.textFont(myFont);
  maskImg.textSize(200);
  maskImg.textAlign(CENTER, CENTER);
  maskImg.fill(0);  
  
  // Draw the text in the mask image
  maskImg.text("Alen Joby", width / 0.9, height /1);
  
  // Apply the mask to the main image
  img.mask(maskImg);
}

function draw() {
  background('black');

  // Display the masked image
  image(img, 0, 0);
}
