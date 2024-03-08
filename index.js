/**
 * Question 1
 * Explain the difference between a class declaration and a class expression.
 */

// class Animal2 {} // class declaration

// const Animal1 = class {}; // class expression

/**
 * Question 2
 * Explain the purpose of the constructor method in a JavaScript class.
 *
 */

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const dog = new Animal("Tiger", 5);

/**
 * Question 3
 * How can you achieve private members in a JavaScript class?
 *
 */

// const Counter = class {
//   #count = 0;

//   increment() {
//     this.#count++;
//   }

//   decrement() {
//     this.#count--;
//   }

//   getCount() {
//     return this.#count;
//   }
// };

// const mycounter = new Counter();
// mycounter.increment();
// mycounter.increment();
// console.log(mycounter.getCount()); // 0
// mycounter.decrement();
// console.log(mycounter.getCount()); // 0

/**
 * Question 4
 * What is the static keyword in a class and how is it used?
 *
 */

// class MyMath {
//   constructor() {
//     this.count = 10;
//     console.log("constructor");
//   }

//   static square(x) {
//     return x * x + this.count;
//   }
// }

// const squareOf4 = MyMath.square(4);
// console.log(squareOf4);
