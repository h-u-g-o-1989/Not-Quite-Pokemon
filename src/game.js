class Game {
  constructor() {
    this.levelCount = 0;
    this.score = 0;
    this.scoreCount = document.getElementById("theScore");
    this.lives = 3;
    this.livesLeft = document.getElementById("livesLeft");
    this.initialiseGame();
    this.fence2 = document.getElementById("fence2");
    this.start = document.getElementById("start");
    this.startButton = document.getElementById("startGame");
    this.startButton.onclick = () => {
      this.start.style.display = "none";
    };
  }
  initialiseGame() {
    if (this.levelCount === 0) {
      this.background = new Background(bkImage);
      console.log("drawing background");
      this.encounter = new Collectables(theQuestionsLevelOne);
      console.log("drawing encounters");
      this.player = new Player(CELL_SIZE * 3, CELL_SIZE * 5, deadZones);
      console.log("drawing player");
    }
    if (this.levelCount === 1) {
      this.fence2.style.display = "flex";
      this.background = new Background(bkImage2);
      console.log("drawing background");
      this.encounter = new Collectables(theQuestionsLevelTwo);
      console.log("drawing encounters");
      this.player = new Player(CELL_SIZE * 0, CELL_SIZE * 5, deadZonesLevelTwo);
      console.log("drawing player");
    }
    if (this.levelCount === 2) {
      this.background = new Background(bkImage3);
      console.log("drawing background");
      this.encounter = new Collectables(theQuestionsLevelThree);
      console.log("drawing encounters");
      this.player = new Player(
        CELL_SIZE * 0,
        CELL_SIZE * 1,
        deadZonesLevelThree
      );
      console.log("drawing player");
    }
    //this.background2 = new BackgroundTwo(bkImage);
    //console.log("drawing background2");
    console.log("level", this.levelCount);
  }
  addLevel() {
    this.levelCount++;
  }
  addScore() {
    this.score++;
    this.scoreCount.innerHTML = this.score;
  }
  resetScore() {
    this.score = 0;
    this.scoreCount.innerHTML = this.score;
  }
  lowerLives() {
    this.lives--;
    this.livesLeft.innerHTML = this.lives;
  }
  resetLives() {
    this.lives = 3;
    this.livesLeft.innerHTML = this.lives;
  }
  resetLevel() {
    this.levelCount = 0;
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
