from django.db import models
#Inheritance allows a derived or child class to inherit attributes from and methods from another class called the superclass
#Base class
class Animal(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    def make_sound(self):
        return "Some generic animal sound"

    def _str_(self):
        return f"{self.name}, {self.age}"
    

    # Derived class
class Dog(Animal):
    breed = models.CharField(max_length=100)
    def make_sound(self):
        return "Bark"

    def fetch(self):
        return f"{self.name} is fetching the ball."