/**
 * Question 1
 * How can you determine if a property exists in a JavaScript object
 */
// const user = {
//   name: "Sarthak",
//   profession: "Software Developer",
// };
// if ("name" in user) {
//   console.log(user.name);
// }
/**
 * Question 2
 * Explain the difference between dot notation and bracket notation when accessing object properties.
 */

// const mycar = {
//   company: "Tesla",
//   "0 100": "4.2second",
// };
// console.log(mycar["company"]);

/**
 * Question 3
 * How do you iterate over the properties of an object?
 */

// const fruit = {
//   name: "Apple",
//   amount: "2kg",
// };
// const keys = Object.keys(fruit);
// for (let i = 0; i < keys.length; i++) {
//   console.log(fruit[keys[i]]);
// }
// for (prop in fruit) {
//   console.log(fruit[prop]);
// }

/**
 * Question 4
 * Explain the difference between deep and shallow copying of objects.
 */

// const obj = { name: "John", address: { city: "New York" } };
// const shallowCopy = { ...obj };
// shallowCopy.address.city = "Delhi";
// console.log(shallowCopy.address.city, obj.address.city);
// const deepCopy = JSON.parse(JSON.stringify(obj));
// deepCopy.address.city = "Delhi";
// console.log(deepCopy.address.city, obj.address.city);

/**
 * Question 5
 * What is the purpose of the Object.is() method in JavaScript?
 */

// console.log(Object.is(undefined, null));
