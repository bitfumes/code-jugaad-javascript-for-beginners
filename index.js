/**
 * Question 1
 * What is the difference between a regular function and an arrow function?
 */

// function test() {
//   console.log(this);
// }

// const test2 = () => ({ name: "Sarthak" });
// test.apply({ name: "Sarthak" });
// test2.apply({ name: "sarthak" });
// console.log(test2());

/**
 * Question 2
 * Explain the concept of "lexical scoping" in the context of arrow functions.
 */
// function test() {
//   console.log(this);
//   const test2 = () => console.log(this);
//   test2();
// }
// const test2Outer = () => console.log(this);
// test.apply({ name: "Sarthak" });
// test2Outer();
// test2.apply({ name: "sarthak" });

/**
 * Question 3
 * Discuss the behavior of arrow functions when it comes to the new keyword
 */
// function regularFunction() {
//   console.log("RF");
// }
// new regularFunction();

// const arrowFunction = () => {
//   console.log("RF");
// };
// new arrowFunction();

/**
 * Question 4
 * What is the purpose of the "apply", "bind" and "call" methods in JavaScript arrow functions
 */

// const print = (greet, greet2) => {
//   console.log(`${greet}, ${this.name}`);
//   console.log(greet2);
// };
// const person = { name: "Sarthak" };
// print.apply(person, ["Hello", "how are you"]);
// print.call(person, "Hello", "Where are you going!");
// const fn = print.bind(person, ["Hello", "how are you"]);
// fn();

/**
 * Question 5
 * What are generator functions in JavaScript
 */

// function* count() {
//   let x = 1;
//   while (true) {
//     x = x * 2;
//     yield x;
//   }
// }
// const mycount = count();
// console.log(mycount.next());
