let game;

function preload() {
  bkImage = loadImage("./assets/IMG_0788.PNG");
  bkImage2 = loadImage("./assets/IMG_0790.PNG");
  bkImage3 = loadImage("./assets/IMG_0795.JPG");
  playerPic = loadImage("./assets/IMG_0785.PNG");
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
  if (keyCode === 65) {
    game.player.moveLeft();
  }
  if (keyCode === 68) {
    game.player.moveRight();
  }
  if (keyCode === 87) {
    game.player.moveUp();
  }
  if (keyCode === 83) {
    game.player.moveDown();
  }
}
