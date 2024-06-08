let mode = 'title'; // declaring title
let box;// declaring box
let ball; //declaring ball
let score = 0; //declaring score
let gameOver = false; // decalring gameover is false at the beginning

var font1; //creating a variable to store first font
var font2; //creating another variable to store the second font

function preload(){ //using preload to load the fonts to the variable
  font1 = loadFont('Fonts/CaviarDreams.ttf'); //storing 1st font to variable "font1"
  font2 = loadFont('Fonts/punk.otf'); // storing 2nd font to variable "font2"
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	//**Creating global variables that point to certain classes
	//**Sets the initial paddle location on the screen
	
}

function draw(){ //declaring modes to use in the game
	if (mode == "title"){
		titleScreen();
	}
	if (mode == "gameplay"){
		gameplay();
	}
	if (mode == "gameover"){
		resetGame();
	}
	if (mode == "gamewin"){
		gamewinScreen();
	}
}
function titleScreen(){//title screen function that displays when starting the game
	background('White'); 
    textFont(font2);
	textSize(100);
	textAlign(CENTER,CENTER);
	fill(random(0,255),random(0,255),random(0,255));
	text('Basket N Ball',width/2,height/3);
	textSize(35);
	textAlign(CENTER,CENTER);
	fill(0);
	text('Press SPACEBAR to start',width/2,height/2);
	fill(250,0,0);
	text('Get 10 points to win!',width/2,height/1.5);
	//utilized the "keyCode" method to accept user input and change the game mode accordingly 
	if (keyCode === 32){
		mode = 'gameplay';
	}
}



function setup() {
  createCanvas(windowWidth,windowHeight);//creates canvas with windows height and windows width
  box = new Basket();//giving new value for box
  ball = new Ball();//giving new value for ball
}

function gameplay() {//gameplay screen
  background('orange');//background color orange

  //When game is not over it updates and displays the box and ball
  if (!gameOver) {
    box.update(); // it updates the box position
    box.display(); // it displays the box

    ball.update(); // it updates the ball position
    ball.display(); // it displays the ball
    
    //checks if the ball hits the box
    if (ball.hits(box)) {
      score++; // increments the score
      ball = new Ball();// resets the ball
    }

    //checks if the ball is going out of the screen
    if (ball.y > height) {
      gameOver = true; // if i is true, the game gets over
    }

    fill('darkgreen'); // set text colo to green
    textFont(font1);// using Font 1
    textSize(30); // changing text size to 30
    text('Score: ' + score, 100, 20); //displays and increment the score at position 100, 20
  }
  
  //if the above conditon not tru it will display the else condition
  else {
    fill(0);
    textFont('font2');
    textSize(50);
    textAlign(CENTER, CENTER);
    text('Game Over', width / 2, height / 2);
    textFont('font1',16);
    text('Press "R" to Restart', width / 2, height / 2 + 30);
  }
  // checks if score is 10
  if(score == 10){
    wingame() //if the score is 10 it displays the wingame function
  } 
}

function keyPressed() {
  //if the R key is pressed it resets the game.
  if (key === 'R' || key === 'r') {
    resetGame();
  }
}

//creating the reset function
function resetGame() {
  score = 0; // sets the score to 0
  gameOver = false; // gameover is false
  ball = new Ball();
}

//creating wingame function
function wingame(){
  background('White');//sets background color to white
    textFont(font2);//using font2
	textSize(100); //setting font size to 100
	textAlign(CENTER,CENTER); // aligns the text to center
	fill(random(0,255),random(0,255),random(0,255)); // change the text color randomly
	text('Won The Game !!',width/2,height/3); //displays the text won the game
	textSize(35);//setting font size to 35
	textAlign(CENTER,CENTER); // aligns the text to center
	fill(0); //sets text color to black
	text('Press R to start again',width/2,height/2);
	fill(250,0,0);// text color red
	text('You Just Scored 10 points',width/2,height/1.5);
  
}

// Making basket class to create and control the basket object
class Basket {
  constructor() {
    // Seting the  basket dimensions and initial position
    this.w = 80;
    this.h = 20;
    this.x = width / 2;
    this.y = height - this.h - 10; // Near the bottom of the canvas
    this.speed = 15; // Movement speed of the basket
  }

  // Update the position of the basket based on user input
  update() {
    // Move left if left arrow key is pressed
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    }
    // Move right if right arrow key is pressed
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
    // Constrain the basket position within the canvas boundaries
    this.x = constrain(this.x, 0, width - this.w);
  }

  // Display the basket on the canvas
  display() {
    fill(0); // Set fill color to black
    rectMode(CENTER); // Draw rectangle from its center
    rect(this.x, this.y, this.w, this.h); // Draw the basket
    // Draw an arc at the top of the basket to give a semi-circular top
    arc(this.x, this.y, this.w, this.h * 2, PI, TWO_PI);
  }
}

// Ball class to create and control the ball object
class Ball {
  constructor() {
    // Set initial position and radius of the ball
    this.x = random(width); // Random horizontal position
    this.y = 0; // Start at the top of the canvas
    this.r = 10; // Radius of the ball
    this.speed = 7; // Falling speed of the ball
  }

  // Update the position of the ball
  update() {
    this.y += this.speed; // Move the ball downwards
  }

  // Display the ball on the canvas
  display() {
    fill('white'); // Set fill color to red
    rect(this.x, this.y, this.r * 2); // Draw the rectangle representing the ball
    fill('red')
    ellipse(this.x, this.y, this.r * 2); // Draw the ellipse representing the ball
  }

  // Check if the ball hits the basket
  hits(basket) {
    // Calculate the distance between the ball and the basket
    let d = dist(this.x, this.y, basket.x, basket.y);
    // Check if the ball is within the basket area
    return (
      this.y + this.r > basket.y - basket.h / 2 && // Ball is below the top of the basket
      this.x > basket.x - basket.w / 2 && // Ball is within the left side of the basket
      this.x < basket.x + basket.w / 2 // Ball is within the right side of the basket
    );
  }
}
