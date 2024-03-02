/**
 * Question 1
 * Write a function that filters out all negative numbers from an array using the filter method.
 */

// const myarr = [-10, 160, 87, 45, -120, 92, -73];
// const newMyArr = myarr.filter((num) => num >= 0);
// console.log(newMyArr);
/**
 * Question 2
 * Write a function using some to check if there is at least one element in an array that is a palindrome (reads the same backward as forward).
 */

const stringArray = ["level", "hello", "racecar", "world"];

function hasPalindrom(word) {
  return word === word.split("").reverse().join("");
}
const arrayIsPalindrom = stringArray.some((word) => hasPalindrom(word));
console.log(arrayIsPalindrom);

/**
 * Question 3
 * Write a function that filter out on any criteria that user can provide in a callback function
 */

// const filter = (arr, callback) => {
//   const filteredArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]) ? filteredArr.push(arr[i]) : "";
//   }
//   return filteredArr;
// };

// const myarr = [-10, 160, 87, 45, -120, 92, -73];
// const newMyArr = filter(myarr, (num) => num % 2 == 0);
// console.log(newMyArr);

/**
 * Question 4
 * Write a function customSome that replicates the functionality of the some method
 */

// const customSome = (arr, callback) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       return true;
//     }
//   }

//   return false;
// };

// const arrOfNumbers = [1, 3, 5, 7, 9];
// const isEven = customSome(arrOfNumbers, (num) => num % 2 === 0);
// console.log(isEven);

/**
 * Question 5
 * Write a function customEvery that replicates the functionality of the every method
 */
