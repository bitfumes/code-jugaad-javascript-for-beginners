/**
 * Question 1
 * What is the default value of this in a regular function call?
 */

// function test() {
//   console.log(this);
// }
// test.call({ name: "Sarthak" });

/**
 * Question 2
 * How does arrow function behavior differ from regular functions regarding this?
 */

// function printName() {
//   console.log(this);
// }

// const printAge = () => {
//   console.log(this);
// };

// printName.call({ age: 22 });
// printAge.call({ age: 33 });

/**
 * Question 3
 * Explain the concept of binding this using the bind method.
 */
// function regularFunction() {
//   console.log(this);
// }

// const arrowFunction = () => {
//   console.log(this);
// };
// const newAF = arrowFunction.bind({ age: 22 });
// arrowFunction();
// newAF();

/**
 * Question 4
 * Explain how this is affected by the use of the strict mode.
 */

// "use strict";
// x = 4;
// function regularFunction() {
//   console.log(this);
// }

// const arrowFunction = () => {
//   console.log(this);
// };

// arrowFunction();

/**
 * Question 5
 * What is the purpose of the self or that pattern in JavaScript?
 */

// function myPhone() {
//   let self = this;
//   setTimeout(function () {
//     console.log(self.model);
//   }, 1000);
// }

// myPhone.call({ model: "Iphone 16" });
