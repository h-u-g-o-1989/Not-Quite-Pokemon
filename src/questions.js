class Encounter {
  constructor(col, row) {
    this.row = row;
    this.col = col;
  }
  draw() {
    rect(this.col, this.row, CELL_SIZE, CELL_SIZE);
  }
}
