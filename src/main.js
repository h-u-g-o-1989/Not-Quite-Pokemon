let game;

function preload() {
  bkImage = loadImage("./assets/IMG_0771.PNG");
}

function setup() {
  game = new Game();
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  background("green");
  game.drawGrid();
  game.draw();
}

function keyPressed() {
  if (keyCode === 37) {
    game.player.moveLeft();
  }
  if (keyCode === 39) {
    game.player.moveRight();
  }
  if (keyCode === 38) {
    game.player.moveUp();
  }
  if (keyCode === 40) {
    game.player.moveDown();
  }
}
