/**
 * Question 1
 * How can you handle multiple types of exceptions using a single "catch" block
 */
// try {
//   if (Math.random() > 0.5) {
//     throw new Error("Error 1");
//   } else {
//     throw new TypeError("Error 2");
//   }
// } catch (error) {
//   if (error instanceof TypeError) {
//     console.log("Caught TypeError: " + error.message);
//   } else if (error instanceof Error) {
//     console.log("Caught Error: " + error.message);
//   }
// }

/**
 * Question 2
 * Explain the behavior of "finally" block when a "return" statement is present in both "try" and "finally."
 */

// function testFunction() {
//   try {
//     return "This is try return";
//   } finally {
//     return "This is finally return";
//   }
// }

// console.log(testFunction());

/**
 * Question 3
 * Is it possible to throw a custom exception in JavaScript?
 *
 */

// class CustomException extends Error {
//   constructor(message) {
//     super();
//     this.message = message;
//   }
// }

// try {
//   throw new CustomException("This is a custom exception");
// } catch (error) {
//   if (error instanceof CustomException) {
//     console.error("Caught CustomException: " + error.message);
//   }
// }

/**
 * Question 4
 * Show that you can throw an exception from a function and catch it in the calling code.
 */
