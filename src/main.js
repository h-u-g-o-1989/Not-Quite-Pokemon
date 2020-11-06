let game;

function preload() {
  bkImage = loadImage("./assets/IMG_0788.PNG");
  bkImage2 = loadImage("./assets/IMG_0790.PNG");
  bkImage3 = loadImage("./assets/IMG_0795.JPG");
  bkImage4 = loadImage("./assets/IMG_0828.PNG");
  player2pic = loadImage("./assets/IMG_0854.PNG");
  encounterPic = loadImage("./assets/IMG_0833.PNG");
  playerPicDown = loadImage("./assets/IMG_0841.PNG");
  playerPicUp = loadImage("./assets/IMG_0840.PNG");
  playerPicRight = loadImage("./assets/IMG_0838.PNG");
  playerPicLeft = loadImage("./assets/IMG_0839.PNG");
  //
  playerPicDown2 = loadImage("./assets/IMG_0850.PNG");
  playerPicUp2 = loadImage("./assets/IMG_0851.PNG");
  playerPicRight2 = loadImage("./assets/IMG_0853.PNG");
  playerPicLeft2 = loadImage("./assets/IMG_0852.PNG");
  //
  playerPicDown3 = loadImage("./assets/IMG_0842.PNG");
  playerPicUp3 = loadImage("./assets/IMG_0844.PNG");
  playerPicRight3 = loadImage("./assets/IMG_0845.PNG");
  playerPicLeft3 = loadImage("./assets/IMG_0843.PNG");
  //
  playerPicDown4 = loadImage("./assets/IMG_0846.PNG");
  playerPicUp4 = loadImage("./assets/IMG_0847.PNG");
  playerPicRight4 = loadImage("./assets/IMG_0849.PNG");
  playerPicLeft4 = loadImage("./assets/IMG_0848.PNG");

  pokemonSong = loadSound(
    "./sounds/Pokémon Theme (8 Bit Remix Cover Version) [Tribute to Pokémon] - 8 Bit Universe (128 kbps).mp3"
  );
  westernSong = loadSound(
    "./sounds/Stranger Things Theme [8 Bit Tribute to Stranger Things] - 8 Bit Universe.mp3"
  );
  thronesSong = loadSound("./sounds/Game of Thrones 8-bit (128 kbps).mp3");
  breakingBits = loadSound(
    "./sounds/Breaking Bad Theme Song (8 Bit Remix Cover Version) - 8 Bit Universe.mp3"
  );
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
