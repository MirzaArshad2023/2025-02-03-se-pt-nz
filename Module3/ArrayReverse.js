const elements = ['Wind', 'Water', 'Fire', 'Air']
const reversed1 = [...elements].reverse() // modifies the original
const reversed2 = reversed1.reverse()
console.log(reversed1)
console.log(elements)

const products = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts', quantity: 2 },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter', quantity: 3 },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants', quantity: 5 }
    ] // initial (below) should be 0 for reliability in calculating totals
    const totalPrice = products.reduce((currentTotal, currentProduct) => currentTotal + currentProduct.price, 0)
    const totalQuantity = products.reduce((currentTotal, currentProduct)=> currentTotal + currentProduct.quantity, 0)
    console.log(totalPrice)
    console.log(totalQuantity)

    