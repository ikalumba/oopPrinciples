//this defines  a public class called Person
public class Person {
    public String name;        // name is a  Public attribute meaning it can be accessed anywhere
    protected int age;         // age is a Protected attribute meaning it can be aceessed within the same package and by subclasses
    private String ssn;        // ssn is a Private attribute meaning it can be accessed within the Person class

    //  the Constructor initialises the name,age and ssn attributes when a new person object is created
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
        this.ssn = "123-45-6789";
    }

    // Public method thats prints the name and age
    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);// system.out is provided by java and it prints text to the console
    }                                                         //printIn ,this method of the system.out, prints the given text followed by a new line
                                                             //void is a method that performs an action but doesnt return any value

    // Private method that prints the ssn attributes and it can only be callled within the person class
    private void displaySSN() {
        System.out.println("SSN: " + ssn);
    }
}

// Main class
public class Main {
    public static void main(String[] args) {
        Person person = new Person("Alice", 30);

        // Accessing public attribute
        System.out.println(person.name);  // Output: Alice

        // Accessing protected attribute
        System.out.println(person.age);   // Output: 30

        // Accessing private attribute (will cause an error)
        // System.out.println(person.ssn); // Uncommenting this line will cause an error

        // Accessing private method (will cause an error)
        // person.displaySSN(); // Uncommenting this line will cause an error

        // Using public method
        person.displayInfo();  // Output: Name: Alice, Age: 30
    }
}

