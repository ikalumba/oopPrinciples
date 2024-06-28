abstract.py #Abstraction involes hiding complex implementation details of a system and exposing only the implementation necessary. 
#Abstraction 
from abc import ABC, abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def start_engine(self):
        pass

    @abstractmethod
    def stop_engine(self):
        pass

class Car(Vehicle):
    def start_engine(self):
        print("Car engine started.")

    def stop_engine(self):
        print("Car engine stopped.")

class Motorcycle(Vehicle):
    def start_engine(self):
        print("Motorcycle engine started.")

    def stop_engine(self):
        print("Motorcycle engine stopped.")

# Using the classes
my_car = Car()
my_car.start_engine()  # Output: Car engine started.
my_car.stop_engine()   # Output: Car engine stopped.

my_motorcycle = Motorcycle()
my_motorcycle.start_engine()  # Output: Motorcycle engine started.
my_motorcycle.stop_engine()   # Output: Motorcycle engine stopped.


#Encapsulation

#Polymorphism

#Inheritance