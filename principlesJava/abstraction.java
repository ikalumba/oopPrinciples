ab.java//Abstraction
abstract class Vehicle {
    // Abstract methods that must be implemented by subclasses
    abstract void startEngine();
    abstract void stopEngine();
}

class Car extends Vehicle {
    @Override
    void startEngine() {
        System.out.println("Car engine started.");
    }

    @Override
    void stopEngine() {
        System.out.println("Car engine stopped.");
    }
}

class Motorcycle extends Vehicle {
    @Override
    void startEngine() {
        System.out.println("Motorcycle engine started.");
    }

    @Override
    void stopEngine() {
        System.out.println("Motorcycle engine stopped.");
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating instances of Car and Motorcycle
        Vehicle   myCar =  Car();
        myCar.startEngine();  // Output: Car engine started.
        myCar.stopEngine();   // Output: Car engine stopped.

        Vehicle myMotorcycle =  Motorcycle();
        myMotorcycle.startEngine();  // Output: Motorcycle engine started.
        myMotorcycle.stopEngine();   // Output: Motorcycle engine stopped.
    }
}


