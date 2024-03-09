/**
 * Question 1
 * What is a promise and how can it help in resolving callback hell?
 *
 */
// async function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data resolved");
//     }, 1000);
//   });
// }

// fetchData()
//   .then((res) => {
//     console.log(res);
//     return fetchData();
//   })
//   .then((res) => {
//     console.log(res);
//     return fetchData();
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

/**
 * Question 2
 * What are async/await and how do they help in dealing with callback hell?
 *
 */

// async function getData() {
//   try {
//     const res1 = await fetchData();
//     console.log(res1);
//     const res2 = await fetchData();
//     console.log(res2);
//     const res3 = await fetchData();
//     console.log(res3);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getData();

/**
 * Question 3
 * What is the purpose of the "Promise.all" method in the context of callback hell?
 *
 */

// function fetchUser(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`User ${id} fetched`);
//     }, 1000 * id);
//   });
// }

// const user1 = fetchUser(1);
// const user2 = fetchUser(2);
// const user3 = fetchUser(3);

// Promise.all([user1, user2, user3]).then((res) => {
//   console.log(res);
// });

// user1.then((res) => console.log(res));
// user2.then((res) => console.log(res));
// user3.then((res) => console.log(res));

/**
 * Question 4
 * Explain the concept of "callback inversion" and how it relates to callback hell.
 *
 */
