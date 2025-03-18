const products = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' },
    { id: 4, title: "Denim Jeans", price: 59.95, category: 'Pants' },
    { id: 5, title: "Denim Jeans", price: 69.95, category: 'Pants' }
    ]

products.sort((product1, product2)=> product1.price - product2.price)

products.sort( (p1, p2) => p1.title > p2.title ? 1 : -1 )

console.log(products)

const numbers = [4,8,1,5,66,23,41]

console.log( numbers.sort() ) // [ 1, 23, 4, 41, 5, 66, 8 ] : string comparisons

numbers.sort((num1,num2)=> num1 - num2)

console.log(numbers)

const stringNums = ["1", "81", "41", "102", "35", "1004"]
const sortedNums = [...stringNums].sort((num1, num2)=> num1 - num2)

console.log(stringNums)
console.log(sortedNums)