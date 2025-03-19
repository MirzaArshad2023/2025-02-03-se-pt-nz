class Person {
    static latin = 'persona'; // static (class) property, belongs to class not any instance
    #name = ""
    constructor(name) {
    this.#name = name; // standard property, is unique to each instance of the class
    }
    getName() { // standard method, belongs to each instance of the class
    return this.#name;
    }
    static createAnonymous() { // static (class) method, belongs to class not any instance
    return new Person("Unnamed Person");
    }
    }

let person1 = new Person("Mirza")

console.log(person1.getName())
console.log(Person.latin)

let person2 = Person.createAnonymous()

console.log(person2.getName())

