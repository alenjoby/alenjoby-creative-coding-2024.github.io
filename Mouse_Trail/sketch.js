function setup() {
	createCanvas(2000, 2000);
	frameRate(100)
}

function draw() {
	fill(22,10);
	noStroke()
	rect(22,33,2000,2000);
	
	let A = random(0,255);
	let B = random(0,255);
	let C = random(0,255);
    let D = random(255,100);
    let E = random (0,133);
	fill(255);
	rect(mouseX ,mouseY +75,50);
	ellipse(mouseX + 100, mouseY -20, 70, 30 );
	rect(mouseX -50, mouseY -20, 70, 30 );
	fill(A, B, C, D,E);
	ellipse(mouseX +75,mouseY,50);
	rect(mouseX -75,mouseY,50);
	fill(0,100);
	
	
}