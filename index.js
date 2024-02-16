/**
 * Question 1
 * Explain the difference between pop and shift
 */

// const arr = [10, 1, 2, 3, 4, 5, 4, 3, 2];
// console.log(arr.unshift());
// console.log(arr);
// const removedElement = arr.pop();
// console.log(removedElement);
// console.log(arr);

/**
 * Question 2
 * What happens if you call shift on an empty array?
 */

// const arr = [];
// console.log(arr.shift());
// console.log(arr);

/**
 * Question 3
 *  insert an element at a specific index in an array without using splice?
 */

// const arr = ["a", "b", "c"];
// arr.splice(2, 0, "d");
// console.log(arr);
// const part1 = arr.slice(0, 2);
// const part2 = arr.slice(2);
// const finalArr = part1.concat("d", part2);
// console.log(finalArr);

/**
 * Question 4
 * Write a function that removes the first element from an array without using the shift method.
 */

// const arr = ["apple", "mango", "graps"];
// const finalArr = arr.splice(1);
// const finalArr = arr.slice(1);
// console.log(finalArr);
/**
 * Question 5
 * How can you efficiently clear all elements from a JavaScript array without reassigning it
 */
// let arr = ["apple", "mango", "graps"];
// arr.length = 0;
// console.log(arr);
