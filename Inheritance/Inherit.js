// parent class
class Person { 
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
// inheriting parent class
class Student extends Person {

}

let student1 = new Student('Aachal');
student1.greet();

// the Student class inherits all the methods and properties of the Person class.
// Hence, the Student class will now have the name property and the greet() method.