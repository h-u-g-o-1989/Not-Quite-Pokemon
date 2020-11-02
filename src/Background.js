class Background {
  constructor(bkImage) {
    this.height = 900;
    this.width = 900;
    this.x = 0;
    this.img = bkImage;
  }

  draw() {
    image(this.img, this.x, 0, this.width, this.height);
  }
}
