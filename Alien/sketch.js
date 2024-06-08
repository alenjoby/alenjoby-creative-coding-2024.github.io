function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  
  translate(width / 2, height / 2);

  // Alien body
  push();
  fill(50, 205, 50); 
  ellipse(0, 100, 100, 150);
  pop();

  // Alien head
  push();
  fill(34, 87, 22,); 
  ellipse(0, 0, 80, 80);
  pop();

  
  push();
  fill(255);
  ellipse(-15, -10, 20, 20);
  ellipse(15, -10, 20, 20);

  
  fill(0);
  ellipse(-15, -10, 10, 10);
  ellipse(15, -10, 10, 10);
  pop();

  
  push();
  noFill();
  stroke(255);
  beginShape();
  vertex(-10, 20);
  vertex(0, 30);
  vertex(10, 20);
  endShape(CLOSE);
  pop();

  
  push();
  stroke(50, 205, 50); 
  line(0, -30, -20, -60);
  line(0, -30, 20, -60);
  pop();

  
  push();
  stroke(50, 205, 50); 
  strokeWeight(5);
  line(-25, 150, -25, 200); 
  line(25, 150, 25, 200); 
  pop();

  
  push();
  stroke(50, 205, 50);
  strokeWeight(3);
  line(-40, -20, -50, -30); 
  line(40, -20, 50, -30); 
  line(-50, -30, -50, -40); 
  line(-50, -30, -40, -40); 
  line(50, -30, 50, -40); 
  line(50, -30, 40, -40); 
  pop();
}
