let data; // Variable to hold the loaded table
let populations = [];
let countries = [];

function preload() {
  data = loadTable('population_data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(600, 600); // Increased canvas size for better visualization
  colorMode(RGB);
  background('grey');
  noStroke(1);

  // Extract data from the table
  for (let r = 0; r < data.getRowCount(); r++) {
    countries.push(data.getString(r, 'country'));
    populations.push(data.getNum(r, 'population'));
  }

  let diameter = 450;
  let lastAngle = 1;
  let totalPopulation = populations.reduce((a, b) => a + b, 0);

  for (let i = 0; i < populations.length; i++) {
    let n = populations[i];
    let angle = map(n, 0, totalPopulation, 0, TWO_PI);
    let c = map(i, 0, populations.length, 0, 360);
    fill(c, 80, 80);
    arc(width / 2, height / 2, diameter, diameter, lastAngle, lastAngle + angle);
    lastAngle += angle;
  }

  // Adding legend
  let legendX = 35;
  let legendY = 20;
  let legendBoxSize = 20;
  textAlign(LEFT, CENTER);
  textSize(12);
  
  for (let i = 0; i < countries.length; i++) {
    let c = map(i, 0, populations.length, 0, 360);
    fill(c, 80, 80);
    rect(legendX, legendY + i * 25, legendBoxSize, legendBoxSize);
    fill(0);
    text(countries[i], legendX + legendBoxSize + 10, legendY + i * 25 + legendBoxSize / 2);
  }
}
