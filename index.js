/**
 * Question 1
 * How can you use the Array.reduce function to flatten an array of arrays?
 *
 */

const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newFlatArr = nestedArray.reduce((acc, curr) => {
  return acc.concat(curr);
}, []);
console.log(newFlatArr);
/**
 * Question 2
 * How can you find the maximum element in an array using Array.reduce?
 *
 */

const numbers = [10, 20, 30, 40, 50];
const max = numbers.reduce((acc, curr) => {
  return acc > curr ? acc : curr;
}, 0);
console.log(max);

/**
 * Question 3
 * How can you find the average of an array using Array.reduce?
 *
 */

const numbers1 = [10, 20, 30, 40, 50];
const avg = numbers1.reduce((acc, curr, index) => {
  if (index === numbers1.length - 1) {
    return (acc + curr) / numbers1.length;
  } else {
    return acc + curr;
  }
}, 0);

console.log(avg);
