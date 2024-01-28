class Rectagle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const rect = new Rectagle(3, 41);
console.log(rect.area());
