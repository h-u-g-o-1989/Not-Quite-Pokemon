let deadZones = [
  { x: 1, y: 0 },
  { x: 2, y: 0 },
  { x: 3, y: 0 },
  { x: 4, y: 0 },
  { x: 5, y: 0 },
  { x: 6, y: 0 },
  { x: 7, y: 0 },
  { x: 8, y: 0 },
  { x: 9, y: 0 },
  { x: 10, y: 0 },
  //
  { x: 4, y: 1 },
  { x: 5, y: 1 },
  { x: 6, y: 1 },
  { x: 7, y: 1 },
  { x: 3, y: 2 },
  { x: 4, y: 2 },
  { x: 5, y: 2 },
  { x: 6, y: 2 },
  { x: 7, y: 2 },
  { x: 2, y: 4 },
  { x: 8, y: 8 },
  { x: 1, y: 11 },
  { x: 2, y: 11 },
  { x: 3, y: 11 },
  { x: 4, y: 11 },
  { x: 5, y: 11 },
  { x: 6, y: 11 },
  { x: 7, y: 11 },
  { x: 8, y: 11 },
  { x: 9, y: 11 },
  { x: 10, y: 11 },
];
let deadZonesLevelTwo = [
  { x: 3, y: 0 },
  { x: 4, y: 0 },
  { x: 4, y: 1 },
  { x: 4, y: 3 },
  { x: 7, y: 2 },
  { x: 8, y: 2 },
  { x: 7, y: 3 },
  { x: 8, y: 3 },
  { x: 6, y: 6 },
  { x: 8, y: 8 },
  { x: 2, y: 4 },
  { x: 1, y: 11 },
  { x: 2, y: 11 },
  { x: 3, y: 11 },
  { x: 4, y: 11 },
  { x: 5, y: 11 },
  { x: 6, y: 11 },
  { x: 7, y: 11 },
  { x: 8, y: 11 },
  { x: 9, y: 11 },
  { x: 10, y: 11 },
];
let deadZonesLevelThree = [
  { x: 2, y: 0 },
  { x: 3, y: 0 },
  { x: 4, y: 0 },
  { x: 5, y: 0 },
  { x: 6, y: 0 },
  { x: 7, y: 0 },
  { x: 8, y: 0 },
  { x: 9, y: 0 },
  { x: 10, y: 0 },
  { x: 7, y: 2 },
  { x: 8, y: 2 },
  { x: 7, y: 3 },
  { x: 8, y: 3 },
  { x: 6, y: 6 },
  { x: 2, y: 4 },
  { x: 8, y: 8 },
  { x: 0, y: 11 },
  { x: 1, y: 11 },
  { x: 2, y: 11 },
  { x: 3, y: 11 },
  { x: 4, y: 11 },
  { x: 5, y: 11 },
  { x: 6, y: 11 },
  { x: 7, y: 11 },
  { x: 8, y: 11 },
  { x: 9, y: 11 },
  { x: 10, y: 11 },
];
let deadZonesLevelFour = [
  { x: 1, y: 0 },
  { x: 2, y: 0 },
  { x: 3, y: 0 },
  { x: 4, y: 0 },
  { x: 5, y: 0 },
  { x: 6, y: 0 },
  { x: 7, y: 0 },
  { x: 8, y: 0 },
  { x: 9, y: 0 },
  { x: 10, y: 0 },
  { x: 2, y: 7 },
  { x: 2, y: 8 },
  { x: 3, y: 7 },
  { x: 3, y: 8 },
  { x: 6, y: 5 },
  { x: 7, y: 5 },
  { x: 8, y: 5 },
  { x: 9, y: 5 },
  { x: 6, y: 6 },
  { x: 7, y: 6 },
  { x: 8, y: 6 },
  { x: 9, y: 6 },
  { x: 0, y: 1 },
  { x: 1, y: 1 },
  { x: 2, y: 1 },
  { x: 3, y: 1 },
  { x: 4, y: 1 },
  { x: 5, y: 1 },
  { x: 6, y: 1 },
  { x: 7, y: 1 },
  { x: 8, y: 1 },
  { x: 9, y: 1 },
  { x: 10, y: 1 },
  { x: 1, y: 11 },
  { x: 2, y: 11 },
  { x: 3, y: 11 },
  { x: 4, y: 11 },
  { x: 5, y: 11 },
  { x: 6, y: 11 },
  { x: 7, y: 11 },
  { x: 8, y: 11 },
  { x: 9, y: 11 },
  { x: 10, y: 11 },
];

class Player {
  constructor(col, row, deadZones, playerSprite, pikachu) {
    this.col = col;
    this.row = row;
    this.height = CELL_SIZE;
    this.width = CELL_SIZE;
    this.deadZones = deadZones;
    this.image = playerSprite;
    //to get our grid reference we need to calculate it, we know that one cell is 75px that we dvide the canvas by the number of grids (12 in this case)
    //this col or this row is currently defined by pixel count, so if we divide that by 75 that will give us the coordinates according to the map ive drawn.
    // now we can check to see if the players x and y is the same as the x and y of the deadzones, just have to iterate through the elements of the array
    //will have to check for each elements[i].x and [i].y as these are the two values of each element we want to check against. for if loop should work!?
    this.pikachu = pikachu;
    console.log(this.col, this.row);
    this.y = this.col / 75;
    this.x = this.row / 75;
    console.log("this is the starting x and y", this.x, this.y);
  }

  /* as i will be adding lots of collectables to be found i want to wright a function that checks if the player 
  is on the same square as a collectable, console.log found if we are on the same square. we have the x and y for the 
  collectables so will need to pass those in as parameters then just run this function in each move to check for collectables*/

  /*if NEXT CODE DOESNT WORK ctrl Z until here*/

  checkCellForCollectables(x, y) {
    for (let i = 0; i < game.encounter.arrayOfQuestions.length; i++) {
      if (
        x === game.encounter.arrayOfQuestions[i].x &&
        y === game.encounter.arrayOfQuestions[i].y
      ) {
        /*this relates to the function in the question page that will hopefully open the text window and should
          change the the correct element of the arrayOfQuestions*/
        game.encounter.openTextWindow(game.encounter.arrayOfQuestions[i]);
        console.log("YOU HAVE FOUND A QUESTION!!!!!");
      }
    }
  }

  moveUp() {
    let playerInitialY = this.col;
    let playerInitialX = this.row;
    let y = (this.col - 75) / 75;
    let x = this.row / 75;
    console.log("this is where we are moving into", x, y);
    if (this.col <= 0) {
      return;
    }
    if (game.encounter.window) {
      return;
    }
    for (let i = 0; i < this.deadZones.length; i++) {
      if (x === this.deadZones[i].x && y === this.deadZones[i].y) {
        console.log("you cant move here this is a dead zone");
        return;
      }
    }
    this.col = this.col - 75;
    this.pikachu.col = playerInitialY;
    this.pikachu.row = playerInitialX;
    if (game.levelCount === 0) {
      this.image = playerPicUp;
    }
    if (game.levelCount === 1) {
      this.image = playerPicUp2;
    }
    if (game.levelCount === 2) {
      this.image = playerPicUp3;
    }
    if (game.levelCount === 3) {
      this.image = playerPicUp4;
    }

    this.checkCellForCollectables(x, y);
    console.log("this is our new col and row", this.col, this.row);
  }

  moveDown() {
    let playerInitialY = this.col;
    let playerInitialX = this.row;
    let y = (this.col + 75) / 75;
    let x = this.row / 75;
    console.log("this is where we are moving into", x, y);
    if (this.col >= HEIGHT) {
      return;
    }
    if (game.encounter.window) {
      return;
    }
    for (let i = 0; i < this.deadZones.length; i++) {
      if (x === this.deadZones[i].x && y === this.deadZones[i].y) {
        console.log("you cant move here this is a dead zone");
        return;
      }
    }
    this.col = this.col + 75;
    if (game.levelCount === 0) {
      this.image = playerPicDown;
    }
    if (game.levelCount === 1) {
      this.image = playerPicDown2;
    }
    if (game.levelCount === 2) {
      this.image = playerPicDown3;
    }
    if (game.levelCount === 3) {
      this.image = playerPicDown4;
    }

    this.pikachu.col = playerInitialY;
    this.pikachu.row = playerInitialX;
    this.checkCellForCollectables(x, y);
    console.log("this is our new col and row", this.col, this.row);
    if (this.col === 900) {
      game.addLevel();
      console.log(game.levelCount);

      console.log("LOAD NEW LEVEL");
      game.initialiseGame();
    }
  }

  moveRight() {
    let playerInitialY = this.col;
    let playerInitialX = this.row;
    let y = this.col / 75;
    let x = (this.row + 75) / 75;
    console.log("this is where we are moving into", x, y);
    if (this.row >= WIDTH - this.width * 2) {
      return;
    }
    if (game.encounter.window) {
      return;
    }
    for (let i = 0; i < this.deadZones.length; i++) {
      if (x === this.deadZones[i].x && y === this.deadZones[i].y) {
        console.log("you cant move here this is a dead zone");
        return;
      }
    }
    this.row = this.row + 75;
    if (game.levelCount === 0) {
      this.image = playerPicRight;
    }
    if (game.levelCount === 1) {
      this.image = playerPicRight2;
    }
    if (game.levelCount === 2) {
      this.image = playerPicRight3;
    }
    if (game.levelCount === 3) {
      this.image = playerPicRight4;
    }

    this.pikachu.col = playerInitialY;
    this.pikachu.row = playerInitialX;
    this.checkCellForCollectables(x, y);
    console.log("this is our new col and row", this.col, this.row);
  }

  moveLeft() {
    let playerInitialY = this.col;
    let playerInitialX = this.row;
    let y = this.col / 75;
    let x = (this.row - 75) / 75;
    console.log("this is where we are moving into", x, y);
    if (this.row <= 0 + 75) {
      return;
    }
    if (game.encounter.window) {
      return;
    }
    for (let i = 0; i < this.deadZones.length; i++) {
      if (x === this.deadZones[i].x && y === this.deadZones[i].y) {
        console.log("you cant move here this is a dead zone");
        return;
      }
    }
    this.row = this.row - 75;
    if (game.levelCount === 0) {
      this.image = playerPicLeft;
    }
    if (game.levelCount === 1) {
      this.image = playerPicLeft2;
    }
    if (game.levelCount === 2) {
      this.image = playerPicLeft3;
    }
    if (game.levelCount === 3) {
      this.image = playerPicLeft4;
    }

    this.pikachu.col = playerInitialY;
    this.pikachu.row = playerInitialX;
    this.checkCellForCollectables(x, y);
    console.log("this is our new col and row", this.col, this.row);
  }

  draw() {
    image(this.image, this.row, this.col, this.width, this.height);
  }
}
class Pikachu {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.height = CELL_SIZE;
    this.width = CELL_SIZE;
  }

  draw() {
    image(player2pic, this.row, this.col, this.width, this.height);
  }
}
