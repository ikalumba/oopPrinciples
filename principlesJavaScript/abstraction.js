// Abstraction in JavaScript

// Abstract class
class Shape {
  constructor(color) {
    this.color = color;
  }

  // Abstract method that subclasses must implement
  calculateArea() {
    throw new Error("Method calculateArea() must be implemented.");
  }

  // Method
  getColor() {
    return this.color;
  }
}

// Subclass that extends Shape
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  // Implementing abstract method
  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// Subclass that extends Shape
class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  // Implementing abstract method
  calculateArea() {
    return this.width * this.height;
  }
}

// Usage example
let circle = new Circle("red", 5);
console.log(`Circle color: ${circle.getColor()}`);
console.log(`Circle area: ${circle.calculateArea().toFixed(2)}`);

let rectangle = new Rectangle("blue", 3, 4);
console.log(`Rectangle color: ${rectangle.getColor()}`);
console.log(`Rectangle area: ${rectangle.calculateArea()}`);

/*
// Encapsulation: Using closures to create private variables and methods
function Person(name, age) {
  let _name = name; // private variable
  let _age = age; // private variable

  // public methods to access private variables (getters and setters)
  this.getName = function () {
    return _name;
  };

  this.getAge = function () {
    return _age;
  };

  this.setAge = function (newAge) {
    _age = newAge;
  };
}

// Inheritance: Creating a subclass (Student) that inherits from Person
function Student(name, age, grade) {
  // Call the superclass constructor using call or apply
  Person.call(this, name, age);

  let _grade = grade; // private variable

  // Extend functionality by adding a new method
  this.getGrade = function () {
    return _grade;
  };
}

// Prototype-based polymorphism: Adding a method to the prototype of Person
Person.prototype.introduce = function () {
  return `Hi, I'm ${this.getName()} and I'm ${this.getAge()} years old.`;
};

// Abstraction: Using the introduced methods without knowing their implementation details
let person1 = new Person("Alice", 30);
let student1 = new Student("Bob", 20, "A");

console.log(person1.introduce()); // Outputs: Hi, I'm Alice and I'm 30 years old.
console.log(student1.introduce()); // Outputs: Hi, I'm Bob and I'm 20 years old.

console.log(student1.getGrade()); // Outputs: A

student1.setAge(21);
console.log(student1.introduce()); // Outputs: Hi, I'm Bob and I'm 21 years old.

*/
