/**
 * Question 1
 * Explain the concept of the every method in JavaScript arrays
 */

// const numbers = [2, 4, 6, 8];
// const result = numbers.every((number) =>{
//     return number % 2 == 0
// })

// console.log(result);

/**
 * Question 2
 * Explain the concept of the flatMap method in JavaScript arrays.
 */
// const numbers = [2, 4, 6, 8, [1,[3]]];
// const newNum = numbers.flatMap(number => Array.isArray(number) ? number :  number * 2)
// // const newNums = numbers.flat()
// // const newNum2 = newNums.map(number => number*2)
// console.log(newNum);

/**
 * Question 3
 * Explain the concept of the Symbol.iterator in the context of array iteration.
 */
// const numbers = [2, 4, 6, 8];
// const iterator = numbers[Symbol.iterator]();

// while( ! next.done) {
//     console.log(next);
//     next = iterator.next();
// }

/**
 * Question 4
 * Explain the concept of the copyWithin method in JavaScript arrays.
 */
// const numbers = [111, 2, 3, 4];

// numbers.copyWithin(3, 2)
// console.log(numbers);

/**
 * Question 5
 * How can you reverse the order of elements in an array using array iteration methods?
 */

// const numbers = [1, 2, 3, 4];
// // numbers.reverse()
// // console.log(numbers);

// const reversedArray = numbers.map((_, index, array) => {
//     return array[array.length - 1 - index]
// })
// console.log(reversedArray);
