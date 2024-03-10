/**
 * Question 1
 * Can you create a recursive function that returns a Promise?
 *
 */

// function calculateFactorial(num) {
//   return new Promise((resolve, reject) => {
//     if (num < 0) {
//       reject("Number must be greater than 0");
//     } else if (num === 0) {
//       resolve(1);
//     } else {
//       calculateFactorial(num - 1).then((result) => {
//         resolve(num * result);
//       });
//     }
//   });
// }

// calculateFactorial(5).then((result) => {
//   console.log(result);
// });

/**
 * Question 2
 * How does the Promise.finally block differ from then and catch blocks? Provide an example.
 *
 */

// function checkSuccess() {
//   return new Promise((resolve, reject) => {
//     const isSuccess = Math.random() > 0.5;
//     if (isSuccess) {
//       resolve("Success");
//     } else {
//       reject("Failure");
//     }
//   });
// }

// checkSuccess()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Finally block");
//   });

/**
 * Question 3
 * Explain the difference between the Promise.all and Promise.allSettled methods.
 *
 */

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(2), 2000);
// });

// Promise.allSettled([promise1, promise2])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/**
 * Question 4
 * What happens if you call resolve or reject multiple times within a Promise?
 *
 */
