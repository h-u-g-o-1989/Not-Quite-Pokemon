class Game {
  constructor() {
    this.initialiseGame();
  }

  initialiseGame() {
    this.score = 0;
    this.lives = 3;
    this.background = new Background(bkImage);
    this.encounter = new Encounter(CELL_SIZE * 8, CELL_SIZE * 5);
    this.player = new Player(CELL_SIZE * 3, CELL_SIZE * 5);
  }
  drawGrid() {
    for (let i = 0; i <= WIDTH; i += CELL_SIZE) {
      line(i, 0, i, WIDTH); // x1 y1 x2 y2
      line(0, i, HEIGHT, i); // x1 y1 x2 y2
    }
  }
  draw() {
    this.background.draw();
    this.encounter.draw();
    this.player.draw();
  }
}
