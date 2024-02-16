/**
 * Question 1
 * Explain the concept of the ternary operator
 */

// let x = 0;
// const result = x === 0 ? 100 : 1000;

// if (x == 0) {
//   console.log("value is zero");
// } else {
//   console.log("value is non zero");
// }

/**
 * Question 2
 * How would you use the nullish coalescing operator (??)
 */

// let username = "Sarthak";

// const nameToShow = username ?? "Guest"

/**
 * Question 3
 * Explain the difference between "if-else" and "switch" statements
 */
// const trafficLight = "red";
// switch (trafficLight) {
//   case "red":
//     console.log("stop");
//     break;
//   case "yellow":
//     console.log("get ready ! alert");
//     break;
//   case "green":
//     console.log("go ahead");
//     break;
//   default:
//     console.log("Marzi ke maalik");
//     break;
// }
// if (trafficLight == "red") {
//   console.log("stop");
// } else if (trafficLight == "yellow") {
//   console.log("get ready ! alert");
// } else if (trafficLight == "green") {
//   console.log("go ahead");
// } else {
//   console.log("Marzi ke maalik");
// }

/**
 * Question 4
 * Explain the concept of truthy and falsy values in JavaScript
 */
// let name = "";
// // falsy : 0, NaN, null, undefined, false, ""
// if (name) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy");
// }

/**
 * Question 5
 * Explain the concept of the "falsy bouncer" pattern in JavaScript
 */

const arr = [0, 1, 2, 3, 4];
console.log(arr.filter((item) => item));
