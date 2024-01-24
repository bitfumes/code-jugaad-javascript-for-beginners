let fruit = "apple";

const user = {
  name: "John",
  age: 30,
  test: () => {
    console.log("yahi pe code hai");
    console.log(this);
  },
};

const admin = {
  name: "Admin",
};

const myTest = user.test.bind(admin);
myTest();
