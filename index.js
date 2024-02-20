/**
 * Question 1
 * What is the output of the following code?
   for (let i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }
 */

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

/**
 * Question 2
 * How can you create an infinite loop using a for loop?
 */
// for (;;) {
//     console.log("sarthak");
// }

/**
 * Question 3
 * Write a program to print the Fibonacci sequence using a loop.
 */
// 0,1,1,2,3,5,8,13..
// const fibonacci = [0, 1];
// for (let i = 0; i < 20; i++) {
//   fibonacci.push(fibonacci.at(-2) + fibonacci.at(-1));
// }
// console.log(fibonacci);

/**
 * Question 4
 * How does the forEach loop differ from a standard for loop?
 */

// const arr = [0, 1, 2, 3, 4, 5];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }
// arr.forEach((el) => {
//   const result = el * 2;
//   console.log(result);
// });

/**
 * Question 5
 * Explain the concept of "labeling" loops in JavaScript.
 */

// loop_i: for (let i = 0; i < 3; i++) {
//   console.log({ i });
//   loop_j: for (let j = 0; j < 3; j++) {
//     if (j == 1) {
//       break loop_i;
//     }
//     console.log({ j });
//   }
// }
