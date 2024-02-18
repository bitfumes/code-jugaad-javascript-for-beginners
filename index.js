/**
 * Question 1
 * use the spread operator to insert elements at a specific index in an array
 */

// const arr = [1, 2, 3, 4, 7, 5, 9, 7];
// function insertAt(index, el) {
//   return [...arr.slice(0, index), el, ...arr.slice(index)];
// }
// console.log(insertAt(4, 6));

/**
 * Question 2
 * Explain Deep Copy vs. Shallow Copy using spread operator
 */

// const originalArray = [1, 2, [3, 4]];
// const ShallowCopy = [...originalArray];
// ShallowCopy[2][0] = 10;
// console.log(ShallowCopy, originalArray);

// const deepCopy = JSON.parse(JSON.stringify(originalArray));
// deepCopy[2][0] = 10;
// console.log(deepCopy, originalArray);

/**
 * Question 3
 *  Flatten a multidimensional array without using flat method
 */

// let arr = [[1, 2], [3, 4], [5, 6][(7, 8, 9)], [10, 11, 12, 13, 14, 15]];
// console.log(
//     [].concat(...arr),
//     [].concat.apply([], arr),
// );

/**
 * Question 4
 * Determine if an element exists in an array without using includes
 */

// const arr = ["apple", "spices", "meat"];
// console.log(
//     arr.indexOf('apple') > -1
// );

/**
 * Question 5
 * Remove Duplicates from Array
 */
// const arr = [1, 2, 2, 3, 4, 3, 5, 1];
// const unique = [...new Set(arr)];
// console.log(unique);
