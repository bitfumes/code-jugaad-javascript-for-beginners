class SuperArray {
  isEmpty() {
    return this.length === 0;
  }
}

const arr = new SuperArray(1, 2, 3, 4, 5);
console.log(arr.isEmpty());
console.log(arr.map((x) => x * 2));

// class Shape {
//   constructor(name) {
//     this.name = name;
//   }

//   area(area) {
//     if (!area) {
//       return "Area function is not implemented in this class";
//     }

//     console.log("Area is : ", area);
//   }

//   print(msg) {
//     console.log(msg);
//   }
// }

// class Rectagle extends Shape {
//   constructor(width, height) {
//     super("Rectagle");
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     super.area(this.width * this.height);
//     return this.width * this.height;
//   }
// }

// class Square extends Shape {
//   constructor(side) {
//     super("Square");
//     this.side = side;
//   }

//   area() {
//     return this.side * this.side;
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super("Circle");
//     this.radius = radius;
//   }

//   area() {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// const rect = new Rectagle(3, 41);
// const sqr = new Square(3);
// const cirlc = new Circle(7);
// console.log(rect.area());
// console.log(sqr.area());
// console.log(cirlc.area());

// cirlc.print("Hello World");
