let car = "Tesla";
let myCar = car;
myCar = "BMW";
console.log(car, myCar);

let user = {
  name: "John",
  age: 30,
  meta: {
    country: "India",
    city: "Delhi",
    address: {
      street: "123 Main St",
      zipcode: "12345",
    },
  },
};

let admin = structuredClone(user);
user.meta.city = "Mumbai";
user.meta.address.zipcode = "00000";

console.log(admin.meta, user.meta);
