/**
 * Question 1
 * How would you handle the deletion of a non-configurable property using Reflect.deleteProperty()?
 *
 */
const obj1 = {};

// Object.defineProperty(obj1, "a", {
//   value: 1,
//   configurable: false,
// });

// // delete obj1.a;
// if (Reflect.deleteProperty(obj1, "a")) {
//   console.log("Property deleted");
// }

// console.log(obj1.a);

/**
 * Question 2
 *  Create a proxy using Reflect to intercept property definition in JavaScript.
 *
 */
const obj2 = {};

// const handler = {
//   defineProperty(target, key, descriptor) {
//     console.log("Property defined");
//     return Reflect.defineProperty(target, key, descriptor);
//   },
// };
// const proxy = new Proxy(obj2, handler);

// proxy.age = 23;
// console.log(proxy.age);

/**
 * Question 3
 * How can you check if an object has a property using Reflect in JavaScript?
 *
 */
const obj3 = { a: 1, b: 2 };
// console.log(Reflect.has(obj3, "c"));

/**
 * Question 4
 * How can you use Reflect to set properties in JavaScript?
 *
 */
