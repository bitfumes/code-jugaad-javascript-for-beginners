let user = {
  _password: "Secret",
  get myname() {
    return this.name;
  },
};

const option = {
  get(target, prop, receiver) {
    if (prop.startsWith("_")) throw new Error("Access Denied");
    return Reflect.get(...arguments);
  },
  ownKeys(target) {
    return Object.keys(target).filter((key) => !key.startsWith("_"));
  },
  set(target, prop, val) {
    if (prop.startsWith("_")) throw new Error("Access Denied");
    if (prop === "salary") return false;
    Reflect.set(...arguments);
    return true;
  },
  deleteProperty(target, prop) {
    if (prop.startsWith("_")) throw new Error("Access Denied");
    Reflect.deleteProperty(...arguments);
    return true;
  },
};

user = new Proxy(user, option);
user.name = "Sarthak";
user.age = 23;

const admin = {
  __proto__: user,
  name: "Admin",
};
console.log(user.name);
Reflect.set(admin, "name", "John");
console.log(admin.myname);
