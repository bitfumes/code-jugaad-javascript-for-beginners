/**
 * Question 1
 * Explain the concept of property descriptors in JavaScript objects.
 */
// const user = { name: "sarthak" };
// console.log(Object.getOwnPropertyDescriptors(user));

/**
 * Question 2
 * What is the difference in Object.freeze(), Object.preventExtensions & Object.seal() method?
 */

// const user = { name: "sarthak" };
// Object.preventExtensions(user); // add not allow
// Object.seal(user); // delete and add not allow
// Object.freeze(user); // update, delete and add not allow
// console.log(Object.getOwnPropertyDescriptors(user));
// delete user.name;
// console.log(user);

/**
 * Question 3
 * What is the difference between Object.values() and Object.entries()?
 */

// const user = { name: "sarthak", isAdmin: true };
// console.log(Object.values(user));
// console.log(Object.entries(user));

/**
 * Question 4
 * What are JavaScript Object Prototypes ?
 */
// const user = { name: "sarthak" };
// const new_user = Object.create(user);
// new_user.name = "Billi";
// console.log(new_user.name);
/**
 * Question 5
 * How to create private proterties in Javascript object
 */

// const createUser = () => {
//   let name = "Sarthak";

//   return {
//     // getName() {
//     //   return name;
//     // },
//   };
// };

// const user = createUser();

// console.log(user.getName());
