let mic, fft;

function setup() {
  createCanvas(500, 500);
  
  // to get the audio input
  mic = new p5.AudioIn();
  mic.start();
  
  //  FFT to analyze the spectrum of frequency
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  background(0);
  
  // For getting the waveform
  let wave = fft.waveform();
  
  // For Drawing the waveform
  noFill();
  beginShape();
  stroke('yellow');
  strokeWeight(10);
  for (let i = 0; i < wave.length; i++) {
    let x = map(i, 0, wave.length, 0, width);
    let y = map(wave[i], -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();
  
  // for getting the spectrum
  let spectrum = fft.analyze();
  
  // to draw the spectrum
  noStroke();
  fill('green'); // Defining color of spectrum bars
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h);
  }
}
