function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  
  // Draw the body
  fill('lightblue');
  rect(50, 100, 100, 50);
  
  // Draw the roof
  fill('green')
  triangle(200, 100, 150, 150, 100, 10);
  fill('orange')
  triangle(100, 40, 150, 150, 100, 10);
  fill('red')
  triangle(100, 40, 50, 150, 100, 10);

  // Draw the wheels
  fill('black');
  ellipse(75, 150, 30, 30);
  ellipse(110, 150, 30, 30);
}
