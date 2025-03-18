const exampleMap = new Map() // create new empty map object

exampleMap.set("firstName", "Mirza")
exampleMap.set(1, "number 1")
exampleMap.set("1", "string 1")
let student = {firstName:"Graham"}
exampleMap.set(student, {mobile: "011112312"})
console.log(exampleMap)
console.log(exampleMap.get(student))
console.log(exampleMap.has(student))
console.log(exampleMap.has("1"))
console.log(exampleMap.size)
exampleMap.delete("firstName")
console.log(exampleMap)
exampleMap.clear()
console.log(exampleMap)

exampleMap.set("firstName", "Mirza")
exampleMap.set(1, "number 1")
exampleMap.set("1", "string 1")

for(let item of exampleMap.entries())
{
    console.log(item)
}

const recipeMap = new Map([
    ['flour', '1 cup'],
    ['milk', '1/2 cup'],
    ['eggs', 2],
    ['butter', '50g']
    ])

console.log(recipeMap)

for(let item of recipeMap)
{
    console.log(item)
}

const priceMap = new Map([
    ['banana', 1],
    ['pineapple', 2],
    ['watermelon', 5]
    ])

    console.log(priceMap)
    const priceObject = Object.fromEntries(priceMap)
    console.log(priceObject) // { banana: 1, pineapple: 2, watermelon: 5 }

    const priceObject2 = { grapes: 1, apple: 2, watermelon: 5 }

    const priceMap2 = new Map(Object.entries(priceObject2))

    console.log(priceMap2)