let student = {
    firstName: "Mirza",
    country: "NZ"
}

let studentProtype = Object.getPrototypeOf(student)

console.log(Object.getOwnPropertyNames(studentProtype))
console.log(Object.getOwnPropertyNames(student))

let animal = { eats: true, sleeps: true, legs: 4, mammal: true }; 

let rabbit = { jumps: true}

let giraffe = {vegetarian : true}

Object.setPrototypeOf(rabbit, animal) //inheritance using prototypes

Object.setPrototypeOf(giraffe, animal)

console.log(rabbit.jumps)
console.log(rabbit.eats)
console.log(rabbit.sleeps)
console.log(rabbit.legs)
console.log(rabbit.mammal)

console.log(giraffe.mammal, giraffe.vegetarian, giraffe.legs)

let rabbit2 = Object.create(animal, { // creates a new object from prototype, with custom properties
    jumps: { // name of custom 'own' property for rabbit object
    value: true, // property descriptor to set the property value
    enumerable: false // property descriptor to make this enumerable - otherwise jumps won’t be in for...in
    },

    superJump()
    {
        if(this.jumps)
            return "SuperJump"
    }

    });

    
    for (let prop in rabbit) 
    {
        console.log(`${prop} is ${rabbit[prop]}`) // own properties, then inherited ones
    }
    for (let prop in rabbit2)
    { 
        console.log(`${prop} is ${rabbit2[prop]}`) // own properties, then inherited ones
    }
