// Define a parent class called 'Animal'
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Define a method to make a sound, which is common to all animals
  makeSound() {
    console.log("This animal makes a sound.");
  }
}

// Define a subclass called 'Dog' that extends 'Animal'
class Dog extends Animal {
  // Override the 'makeSound' method for a dog
  makeSound() {
    console.log("Woof! Woof!");
  }
}

// Define another subclass called 'Cat' that extends 'Animal'
class Cat extends Animal {
  // Override the 'makeSound' method for a cat
  makeSound() {
    console.log("Meow! Meow!");
  }
}

// Function that takes an 'Animal' object and calls its 'makeSound' method
function playSound(animal) {
  animal.makeSound();
}

// Usage
const myAnimal = new Animal("Generic Animal");
const myDog = new Dog("Buddy");
const myCat = new Cat("Whiskers");

playSound(myAnimal); // Outputs: This animal makes a sound.
playSound(myDog); // Outputs: Woof! Woof!
playSound(myCat); // Outputs: Meow! Meow!
