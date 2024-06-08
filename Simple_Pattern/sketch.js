var circleSize = 77;
function setup() {
  createCanvas(400, 400);
  var circleSize = 80;

  translate(circleSize / 2, circleSize / 2);

  for (var x = 0; x < width; x += circleSize) {
    for (var y = 0; y < height; y += circleSize) {
      fill(255);

      ellipse(x, y, circleSize * 0.2, circleSize * 2.1);

      fill(122, 44, 33);

      ellipse(x, y, circleSize * 0.8, circleSize * 0.8);

      fill(222, 255, 77);

      ellipse(x, y, circleSize * 0.9, circleSize * 0.2);
    }
  }
}
