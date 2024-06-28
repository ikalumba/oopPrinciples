class Person:# defines a class Person
    def _init_(self, name, age):# a constructor is called for a newly formed  instance of a class  eg for class Person
        self.name = name        # Public attribute and assigned to the value passed to the constructor
        self._age = age         # Protected attribute(for internal use only)
        self.__ssn = "123-45-6789"  # Private attribute(cant be acessed directly outside the class)

    def display_info(self):
        print(f"Name: {self.name}, Age: {self._age}") #this method is public and it prints the name and age attributes that can be called from outside the class

    def __display_ssn(self):
        print(f"SSN: {self.__ssn}")#this method is private and it  prints the ssn and cannot be called directly from outside the class

# Creating an object
person = Person("Alice", 30)

# this line prints a name attribute of the object person and since name is public then it can be acessed directly
print(person.name)  # Output: Alice

# Accessing protected attribute
print(person._age)  # Output: 30

# Accessing private attribute (will raise an AttributeError)
# print(person.__ssn)  # Uncommenting this line will raise an error

# you  can acess private attributes via name mangling, a technique python uses to make private attributes harder to acess but incase u know the 
#the mangled name then u ca acess the private attributes
print(person.Person_ssn)  # Output: 123-45-6789
