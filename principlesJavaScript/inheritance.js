//Inheritance = allows a new class to inherit properties and methods
//                         from an existing class. Helps with code reusability

//Parent class
class Animal {
  alive = true; //property

  eat() {
    console.log(`This ${this.name} is eating`); //method
  }

  sleep() {
    console.log(`This ${this.name} is sleeping`); //method
  }
}

//Child class
class Rabbit extends Animal {
  //declaring a parent-child relationship
  name = "rabbit"; //property

  run() {
    console.log(`This ${this.name} is running`); //method
  }
}

//Child class
class Fish extends Animal {
  name = "fish";

  swim() {
    console.log(`This ${this.name} is swimming`);
  }
}

//Child class
class Hawk extends Animal {
  name = "hawk";

  fly() {
    console.log(`This ${this.name} is flying`);
  }
}

//Instantiation
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

// rabbit.alive = false;

//Accessing properties and methods
console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();
