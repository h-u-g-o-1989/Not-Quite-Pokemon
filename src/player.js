class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.height = CELL_SIZE;
    this.width = CELL_SIZE;
    this.deadZones = [
      { x: 4, y: 1 },
      { x: 5, y: 1 },
      { x: 6, y: 1 },
      { x: 7, y: 1 },
      { x: 4, y: 2 },
      { x: 5, y: 2 },
      { x: 6, y: 2 },
      { x: 7, y: 2 },
    ];
    //to get our grid reference we need to calculate it, we know that one cell is 75px that we dvide the canvas by the number of grids (12 in this case)
    //this col or this row is currently defined by pixel count, so if we divide that by 75 that will give us the coordinates according to the map ive drawn.
    // now we can check to see if the players x and y is the same as the x and y of the deadzones, just have to iterate through the elements of the array
    //will have to check for each elements[i].x and [i].y as these are the two values of each element we want to check against. for if loop should work!?
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
        console.log("YOU HAVE FOUND A QUESTION!!!!!");
      }
    }
  }

  moveUp() {
    let y = (this.col - 75) / 75;
    let x = this.row / 75;
    console.log("this is where we are moving into", x, y);
    if (this.col <= 0 + 75) {
      return;
    }
    for (let i = 0; i < this.deadZones.length; i++) {
      if (x === this.deadZones[i].x && y === this.deadZones[i].y) {
        console.log("you cant move here this is a dead zone");
        return;
      }
    }
    this.col = this.col - 75;
    this.checkCellForCollectables(x, y);
    console.log("this is our new col and row", this.col, this.row);
  }

  moveDown() {
    let y = (this.col + 75) / 75;
    let x = this.row / 75;
    console.log("this is where we are moving into", x, y);
    if (this.col >= HEIGHT - this.height * 2) {
      return;
    }
    for (let i = 0; i < this.deadZones.length; i++) {
      if (x === this.deadZones[i].x && y === this.deadZones[i].y) {
        console.log("you cant move here this is a dead zone");
        return;
      }
    }
    this.col = this.col + 75;
    this.checkCellForCollectables(x, y);
    console.log("this is our new col and row", this.col, this.row);
  }

  moveRight() {
    let y = this.col / 75;
    let x = (this.row + 75) / 75;
    console.log("this is where we are moving into", x, y);
    if (this.row >= WIDTH - this.width * 2) {
      return;
    }
    for (let i = 0; i < this.deadZones.length; i++) {
      if (x === this.deadZones[i].x && y === this.deadZones[i].y) {
        console.log("you cant move here this is a dead zone");
        return;
      }
    }
    this.row = this.row + 75;
    this.checkCellForCollectables(x, y);
    console.log("this is our new col and row", this.col, this.row);
  }

  moveLeft() {
    let y = this.col / 75;
    let x = (this.row - 75) / 75;
    console.log("this is where we are moving into", x, y);
    if (this.row <= 0 + 75) {
      return;
    }
    for (let i = 0; i < this.deadZones.length; i++) {
      if (x === this.deadZones[i].x && y === this.deadZones[i].y) {
        console.log("you cant move here this is a dead zone");
        return;
      }
    }
    this.row = this.row - 75;
    this.checkCellForCollectables(x, y);
    console.log("this is our new col and row", this.col, this.row);
  }

  draw() {
    rect(this.row, this.col, this.width, this.height);
  }
}
