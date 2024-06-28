// Base class
public class Animal {
    
    private String name;

    
    public Animal(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

   
    public void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

// Derived class
public class Dog extends Animal {
   
    public Dog(String name) {
        
        super(name);
    }

    
    @Override
    public void makeSound() {
        System.out.println("Bark");
    }


    public void fetch() {
        System.out.println(getName() + " is fetching the ball.");
    }
}

// Main class to demonstrate inheritance
public class Main {
    public static void main(String[] args) {
     
        Animal genericAnimal = new Animal("Generic Animal");
        
        genericAnimal.makeSound();

        
        Dog dog = new Dog("Buddy");
        
        dog.makeSound();
       
        dog.fetch();
    }
}