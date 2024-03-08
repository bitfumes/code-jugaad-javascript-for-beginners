/**
 * Question 1
 * What is the role of the super keyword in JavaScript class inheritance?
 */

// class Vehicle {
//   constructor(name) {
//     this.name = name;
//   }
//   start() {
//     return `Starting: ${this.name}`;
//   }
// }

// class Car extends Vehicle {
//   constructor(name, model) {
//     super(name);
//     this.model = model;
//   }

//   start() {
//     console.log(super.start());
//     console.log(`Model name is ${this.model} `);
//   }
// }

// const car = new Car("Toyota", "Camry");
// car.start();

/**
 * Question 2
 * Explain the concept of method overriding in class inheritance.
 */

/**
 * Question 3
 *  Implement multiple inheritance in JavaScript using classes. Provide an example with explanation.
 *
 */

class Animal {
  move() {
    console.log("I can move");
  }
}

class Flying {
  fly() {
    console.log("I can fly");
  }
}

class Bird extends Flying {
  constructor() {
    super();
    this.animal = new Animal();
  }

  move() {
    this.animal.move();
  }
}

const myBird = new Bird();
myBird.move();
myBird.fly();

/**
 * Question 4
 * Implement a showInfo method in the Animal class that logs "This is an animal." Override this method in the Dog class to log "This is a dog."
 *
 */
