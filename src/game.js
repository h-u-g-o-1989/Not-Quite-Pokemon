class Game {
  constructor() {
    this.levelCount = 0;
    this.score = 0;
    this.roundScore = 0;
    // this.scoreCount = document.getElementById("theScore");
    this.lives = 3;
    // this.livesLeft = document.getElementById("livesLeft");
    this.initialiseGame();

    this.fence2 = document.getElementById("fence2");
    this.start = document.getElementById("start");
    this.livesAndHealth = document.getElementById("topBoard");
    this.startButton = document.getElementById("startGame");
    // this.pokemonSong = document.getElementById("pokemon");
    this.startButton.onclick = () => {
      this.start.style.display = "none";
      this.livesAndHealth.style.zIndex = "1";
      pokemonSong.play();
      pokemonSong.setVolume(0.5);
    };
  }
  initialiseGame() {
    if (this.levelCount === 0) {
      this.playButton = document.getElementById("buttonPlayMusic");
      this.playButton.onclick = () => {
        pokemonSong.play();
        pokemonSong.setVolume(0.5);
      };
      this.stopButton = document.getElementById("buttonStopMusic");
      this.stopButton.onclick = () => {
        pokemonSong.stop();
      };
      this.background = new Background(bkImage);
      console.log("drawing background");
      this.encounter = new Collectables(theQuestionsLevelOne);
      console.log("drawing encounters");
      this.pikachu = new Pikachu(CELL_SIZE * 3, CELL_SIZE * 6);
      this.player = new Player(
        CELL_SIZE * 3,
        CELL_SIZE * 5,
        deadZones,
        playerPicDown,
        this.pikachu
      );

      console.log("drawing player");
    }
    if (this.levelCount === 1) {
      pokemonSong.stop();
      westernSong.play();
      this.playButton = document.getElementById("buttonPlayMusic");
      this.playButton.onclick = () => {
        westernSong.play();
        westernSong.setVolume(0.5);
      };
      this.stopButton = document.getElementById("buttonStopMusic");
      this.stopButton.onclick = () => {
        westernSong.stop();
      };
      this.fence2.style.display = "flex";
      this.background = new Background(bkImage2);
      console.log("drawing background");
      this.encounter = new Collectables(theQuestionsLevelTwo);
      console.log("drawing encounters");
      this.pikachu = new Pikachu(CELL_SIZE * 0, CELL_SIZE * 6);
      this.player = new Player(
        CELL_SIZE * 0,
        CELL_SIZE * 5,
        deadZonesLevelTwo,
        playerPicDown2,
        this.pikachu
      );

      console.log("drawing player");
    }
    if (this.levelCount === 2) {
      westernSong.stop();
      thronesSong.play();
      this.playButton = document.getElementById("buttonPlayMusic");
      this.playButton.onclick = () => {
        thronesSong.play();
        thronesSong.setVolume(0.5);
      };
      this.stopButton = document.getElementById("buttonStopMusic");
      this.stopButton.onclick = () => {
        thronesSong.stop();
      };
      this.background = new Background(bkImage3);
      console.log("drawing background");
      this.encounter = new Collectables(theQuestionsLevelThree);
      console.log("drawing encounters");
      this.pikachu = new Pikachu(CELL_SIZE * 0, CELL_SIZE * 1);
      this.player = new Player(
        CELL_SIZE * 1,
        CELL_SIZE * 1,
        deadZonesLevelThree,
        playerPicDown3,
        this.pikachu
      );

      console.log("drawing player");
    }
    if (this.levelCount === 3) {
      thronesSong.stop();
      breakingBits.play();
      this.playButton = document.getElementById("buttonPlayMusic");
      this.playButton.onclick = () => {
        breakingBits.play();
        breakingBits.setVolume(0.5);
      };
      this.stopButton = document.getElementById("buttonStopMusic");
      this.stopButton.onclick = () => {
        breakingBits.stop();
      };
      this.background = new Background(bkImage4);
      console.log("drawing background");
      this.encounter = new Collectables(theQuestionsLevelFour);
      console.log("drawing encounters");
      this.pikachu = new Pikachu(CELL_SIZE * 3, CELL_SIZE * 6);
      this.player = new Player(
        CELL_SIZE * 3,
        CELL_SIZE * 5,
        deadZonesLevelFour,
        playerPicDown4,
        this.pikachu
      );
    }
    //this.background2 = new BackgroundTwo(bkImage);
    //console.log("drawing background2");
    console.log("level", this.levelCount);
  }
  addLevel() {
    this.levelCount++;
    this.roundScore = 0;
    game.encounter.newRound();
  }
  addScore() {
    this.score++;
    this.roundScore++;
    // this.scoreCount.innerHTML = this.score;
  }
  resetScore() {
    this.score = 0;
    this.roundScore = 0;
    // this.scoreCount.innerHTML = this.score;
  }
  lowerLives() {
    this.lives--;
    // this.livesLeft.innerHTML = this.lives;
  }
  resetLives() {
    this.lives = 3;
    // this.livesLeft.innerHTML = this.lives;
  }
  resetLevel() {
    this.levelCount = 0;
    this.roundScore = 0;
  }
  secretLevel() {
    this.levelCount = 3;
    this.roundScore = 0;
    game.encounter.newRound();
    game.initialiseGame();
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
    this.pikachu.draw();
  }
}
