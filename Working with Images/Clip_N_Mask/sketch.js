let pic;
let maskPic;

function preload() {
  // Load the main image
  pic = loadImage('CC1.jpg');
}

function setup() {
  createCanvas(1000, 1000);

  // Create the mask image
  maskPic = createGraphics(2000, 1500);
  
  // Draw a shape in the mask image (white areas will be visible, black areas will be transparent)
  maskPic.fill(255);
  maskPic.rect(width / 2, height / 2, 500, 500);
  
  maskPic.ellipse(width / 2, height / 2, 500, 500);
  
  maskPic.ellipse(width / 1, height /1, 500, 500);
  
  // Applies the mask to the main Picture
  pic.mask(maskPic);
}

function draw() {
  background('lightblue');

  // It Displays the masked Picture
  image(pic,1,1);
}