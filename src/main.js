let game;

function preload() {
  bkImage = loadImage("./assets/IMG_0788.PNG");
  bkImage2 = loadImage("./assets/IMG_0790.PNG");
  bkImage3 = loadImage("./assets/IMG_0795.JPG");
  player2pic = loadImage("./assets/IMG_0819.PNG");
  encounterPic = loadImage("./assets/IMG_0768.PNG");
  playerPicDown = loadImage("./assets/IMG_0785.PNG");
  playerPicUp = loadImage("./assets/IMG_0799.PNG");
  playerPicRight = loadImage("./assets/IMG_0802.PNG");
  playerPicLeft = loadImage("./assets/IMG_0801.PNG");
  pokemonSong = loadSound(
    "./sounds/Pokémon Theme (8 Bit Remix Cover Version) [Tribute to Pokémon] - 8 Bit Universe (128 kbps).mp3"
  );
  westernSong = loadSound(
    "./sounds/{8 BIT} The Good the Bad and the Ugly Theme (128 kbps).mp3"
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
