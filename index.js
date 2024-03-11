/**
 * Question 1
 * How would you handle errors in an async/await function without using try...catch?
 *
 */

// async function fetchPosts() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// }

// fetchPosts()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(`This is the Error: ${e}`);
//   });

/**
 * Question 2
 * Explain the behavior of concurrent asynchronous operations inside an async function.
 *
 */

// async function fetchPosts() {
//   const res1 = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const res2 = await fetch("https://jsonplaceholder.typicode.com/posts/1");

//   const res = Promise.allSettled([res1.json(), res2.json()]);
//   const data = await res;
//   console.log(data);
// }

// fetchPosts();
/**
 * Question 3
 * How do you handle timeouts in async/await functions?
 *
 */

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function myAsyncCall() {
//   await delay(2000);
//   return "My Async Call is done";
// }

// async function runTimeout() {
//   const result = await Promise.race([myAsyncCall(), delay(4000)]);
//   console.log(result);
// }

// runTimeout();
/**
 * Question 4
 * Can you use await outside of an async function?
 *
 */
