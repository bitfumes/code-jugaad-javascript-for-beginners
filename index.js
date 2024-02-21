/**
 * Question 1
 * Explain the concept of a higher-order function
 */

// function multiplyBy(factor) {
//   return function (number) {
//     return number * factor;
//   };
// }

// const multiplyByTwo = multiplyBy(2);
// const multiplyByFive = multiplyBy(5);
// console.log(multiplyByTwo(44));
// console.log(multiplyByFive(10));

/**
 * Question 2
 * Explain the concept of "callback hell" and how you can mitigate it.
 */

// async function fetchUser() {
//     let user = []
//   setTimeout(() => {
//     console.log("user got");
//     user = [];
//   }, 1000);
//   return user
// }

// async function fetchProduct(user) {
//   const products = [];
// }

// async function fetchVariants(products, callback) {
//     const variants = [];
//     callback(variants)
// }

// async function fetchColors(variants){
//     const colors = []
// }

// const user = await fetchUser()
// const products = await fetchProduct(user)

// fetchUser(
//     fetchProduct(user,
//         fetchVariants(products,
//             fetchColors(variants)
//         )
//     )
// );

/**
 * Question 3
 * Explain the concept of "function currying"
 */

// function curryFunc(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c
//         }
//     }
// }

// console.log(
//     curryFunc(1)(2)(3)
// );

/**
 * Question 4
 * Explain the concept of "event callbacks" in the context of the DOM
 */
// window.addEventListener("DOMContentLoaded", (event) => {
//   //   console.log(event);
//   console.log("Contetn is loaded");
// });

/**
 * Question 5
 * How can you use the 'some' function with a callback
 */

// const arr = [1, 2, 3, 4, 0, 5];
// const result = arr.some((el) => {
//   return el > 6;
// });
// console.log(result);
