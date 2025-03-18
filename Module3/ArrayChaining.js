const products = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts', quantity: 2 },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter', quantity: 3 },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants', quantity: 5 }
    ]

const productsSorted = [...products].sort((product1, product2)=> product1.price - product2.price)

console.log(productsSorted)

const productsReversed = productsSorted.reverse()

console.log(productsReversed)

const modifiedProducts = productsReversed.map(prod => ({id: prod.id, title: prod.title}))

console.log(modifiedProducts)

const modifiedProducts2 = [...products].sort((product1, product2)=> product1.price - product2.price).reverse().map(prod => ({id: prod.id, title: prod.title}))

console.log(modifiedProducts2)