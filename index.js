/**
 * Question 1
 * Explain the use of the instanceof operator with classes.
 */
// class Animal {}
// class Book {}

// const dog = new Animal();
// const showDog = new Book();
// console.log(dog instanceof Animal); // true
// console.log(showDog instanceof Book); // false

/**
 * Question 2
 * How can you create a singleton pattern using a JavaScript class?
 */

// class Singleton {
//   static instance;

//   constructor() {
//     if (Singleton.instance) {
//       return Singleton.instance;
//     }

//     Singleton.instance = this;
//     console.log("constructor called");
//   }
// }

// const instance1 = new Singleton();
// const instance2 = new Singleton();
// console.log(instance1 === instance2);

/**
 * Question 3
 * Explain the concept of method chaining in JavaScript classes.
 *
 */

// class Caclulator {
//   value;

//   take(val) {
//     this.value = val;
//     return this;
//   }

//   add(num) {
//     this.value += num;
//     return this;
//   }

//   multiply(num) {
//     this.value *= num;
//     return this;
//   }
// }

// const calc = new Caclulator();
// calc.take(10).add(5).multiply(2);

// console.log(calc.value);

/**
 * Question 4
 * What is the purpose of the Object.freeze() method in the context of JavaScript classes?
 *
 */
