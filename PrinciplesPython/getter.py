class Person:
    def _init_(self, name, age):
        self.name = name    # Public attribute
        self._age = age     # Protected attribute

    # Getter method to access  _age attribute
    def get_age(self):
        return self._age

    # Setter method to modify the  _age attribute with validation to ensure age is positive
    def set_age(self, age):
        if age > 0:
            self._age = age
        else:
            print("Age must be positive.")

    def display_info(self):
        print(f"Name: {self.name}, Age: {self._age}")

# Creating an object of the Person class
person = Person("Alice", 30)

# Accessing the protected attribute using a getter method
print(person.get_age())  # Output: 30

# Modifying the protected attribute using a setter method
person.set_age(35)
print(person.get_age())  # Output: 35

# Trying to set an invalid age
person.set_age(-5)  # Output: Age must be positive.

# Calling the display_info method to print all information
person.display_info()  # Output: Name: Alice, Age: 35
  
