let animal = { eats: true, sleeps: true, legs: 4, mammal: true }; 

function Rabbit(name) 
{ // constructor function, first letter capitalised by convention
    this.jumps = true;
    this.name = name;
}

Rabbit.prototype = animal

let whiteRabbit = new Rabbit("White Rabbit")

console.log(whiteRabbit)
for(let prop in whiteRabbit)
{
    console.log(`property ${prop} and value is ${whiteRabbit[prop]}`)
}

const obj = {} // simple empty object
console.log( Object.getPrototypeOf(obj) === Object.prototype ) // true: its prototype is Object prototype