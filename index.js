/**
 * Question 1
 * What is the purpose of Object.defineProperty in JavaScript, and how does it differ from regular property assignment?
 *
 *
 */

// const obj = {};
// obj.name = "John";

// Object.defineProperty(obj, "name", {
//   value: "John",
//   writable: false,
//   enumerable: false,
//   configurable: false,
// });
// delete obj.name;

// console.log(obj);

/**
 * Question 2
 * Can you explain the difference between for...in and Object.keys when iterating over object properties?
 *
 */
// function Person() {
//   this.name = "John";
//   this.age = 30;
// }

// const john = new Person();
// Person.prototype.gender = "Male";

// for (let key in john) {
//   console.log(key);
// }

// console.log(Object.keys(john));

/**
 * Question 3
 * How can you prevent an object property from being deleted using Object.defineProperty?
 *
 */

// const obj = { name: "John" };

// Object.defineProperty(obj, "name", {
//   value: "John",
//   configurable: false,
// });

// delete obj.name;

// console.log(obj);
