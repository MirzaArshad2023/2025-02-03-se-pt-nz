
let name = 10

const user = {
    name: 'Bilbo Baggins',
    age: 45,
    printGreeting() {
    console.log(`Hello, I'm ${this.name}`) // 'this' is the current object
    console.log(`Age is ${this.age}`)
    }
}

    // 'user' is before the dot, provides the context where 'this' comes from
user.printGreeting(); // Hello, I'm Bilbo Baggins