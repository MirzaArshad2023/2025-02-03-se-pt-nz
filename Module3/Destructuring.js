const fruits = ["banana", "Apple", "Pineapple", "Orange", "watermelon", "Kiwi"]

const [fruit1, fruit2, fruit3, fruit4, ...rest] = fruits

console.log(fruit1, fruit2, fruit3, fruit4)
console.log(rest)


function FruitProcessor([firstFruit, secondFruit, thirdFruit, FourthFruit, ...rest])
{
    console.log(firstFruit, secondFruit, thirdFruit, FourthFruit)
}

FruitProcessor(fruits)

const [jcFirst, jcLast, , , jcPlace] = ['Julius', 'Caesar', 'Consul', 'of the', 'Roman', 'Republic']
console.log(jcFirst, jcLast, jcPlace)


const [a, b, c] = "abc" // strings are iterable, so can break into characters
const [ one, two, three ] = new Set([1, 2, 3]) // Sets are iterable, so can be destructured
const [ [type, quantity] ] = new Map([ ['apple', 4] ]) // Maps are iterable too
// now we have 8 individual variables: a, b, c, one, two, three, type, quantity
console.log(a, b, c, one, two, three, type, quantity) // a b c 1 2 3 apple 4

const monarch = {}; // empty object
[ monarch.title, monarch.name ] = "King Charles".split(' '); // store array pieces in object properties
console.log(monarch); // { title: 'King', name: 'Charles' }

const teeProduct = { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' }

for(let [key, value] of Object.entries(teeProduct))
{
    console.log(`Key = ${key} and value is ${value}`)
}

