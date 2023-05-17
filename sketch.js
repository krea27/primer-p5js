function setup() {
  createCanvas(550, 600);

  background(0);
  //https://www.reprodart.com/a/moholy-nagy-laszlo/kompositionqxx.html
}

function draw() {
  frameRate(10);
  fill(15, 200);
 

  /*if (keyIsPressed) {
    if (keyCode == UP_ARROW) {
      mitadalto = 100;
    }
    if (keyCode == DOWN_ARROW) {
      mitadalto += 100;
    }
    if (keyCode == LEFT_ARROW) {
      mitadancho -= 100;
    }
    if (keyCode == RIGHT_ARROW) {
      mitadancho += 100;
    }
  }*/

  push();
  noStroke();
  fill(255, 253, 208); //crema
  rect(195, 80, 51, 460);
  pop();

  push();
  fill(255, 225, 0); //amarillo
  noStroke();
  rect(60, 400, 250, 8); //rect debajo
  pop();

  push();
  let x = 330;
  let y = 300;
  let mitadancho = 240;
  let mitadalto = 240;

  fill(250, 50, 0); //rojo
  noStroke();
  // ellipse(330, 300, 240);
  ellipse(x, y, mitadancho, mitadalto);
  pop();

  push();
  fill(255, 225, 0); //amarillo
  noStroke();
  rect(60, 380, 400, 8); //rect arriba
  rect(320, 180, 8, 240); //rect vertical
  pop();

  push();
  fill(8);
  rect(260, 60, 18, 420); //negro
  pop();

  push();
  stroke(123, 104, 50); //lineas sonre rect negro
  strokeWeight(2);
  line(269, 60, 269, 480);
  line(260, 60, 260, 480);
  line(278, 60, 278, 480);
  pop();


  document.oncontextmenu = function () {
    return false;
  };
}
