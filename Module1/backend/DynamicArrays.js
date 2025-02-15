let fruits = new Array()
fruits.push("Apple")
fruits.push("Banana")
fruits.push("Orange")
console.log(fruits)

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea']
seas.unshift("Tasman Sea")
seas.unshift("Arabian Sea")
seas.unshift("Red Sea")
console.log(seas)

let removedSea = seas.pop()
console.log(removedSea)
console.log(seas)

removedSea = seas.shift()
console.log(removedSea)
console.log(seas)

console.log(seas.indexOf("Caribbean Sea"))
console.log(seas.length)