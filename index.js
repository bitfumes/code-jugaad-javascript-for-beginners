/**
 * Question 1
 * How can you use a Proxy in JavaScript to prevent access to certain properties using the get handler?
 *
 */
// const target = {
//   name: "Alice",
//   age: 25,
//   password: "12345",
// };

// const handler = {
//   get: function (target, prop, receiver) {
//     if (prop === "password") {
//       throw new Error("Access denied");
//     }
//     return Reflect.get(...arguments);
//   },
// };

// const proxy = new Proxy(target, handler);

// console.log(proxy.password);

/**
 * Question 2
 * How can you use the set handler of a Proxy object to validate and manipulate property assignments?
 *
 */

// const target = {
//   name: "Bob",
//   age: 20,
// };
// const handler = {
//   set: function (target, prop, value) {
//     if (prop === "age" && value < 0) {
//       throw new Error("Age can't be negative");
//     } else {
//       target[prop] = value;
//       return true;
//     }
//   },
// };
// const proxy = new Proxy(target, handler);
// console.log(proxy.age);
// proxy.age = 25;
// console.log(proxy.age);
// proxy.age = -5;
// console.log(proxy.age);

/**
 * Question 3
 * Illustrate how to use the ownKeys handler of a Proxy object to control what keys are visible through Object.keys().
 *
 */
// const target = {
//   name: "Charlie",
//   age: 30,
//   _internal: "hidden",
//   _salary: 1000,
// };

// const handler = {
//   ownKeys: function (target) {
//     return Reflect.ownKeys(target).filter((key) => key[0] !== "_");
//   },
// };
// const proxy = new Proxy(target, handler);

// console.log(Object.keys(proxy));

/**
 * Question 4
 * How can you combine get and set handlers to implement a computed property in a Proxy object?

 *
 */
