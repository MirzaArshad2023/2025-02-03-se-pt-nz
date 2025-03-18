const products = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' },
    { id: 4, title: "Denim Jeans", price: 59.95, category: 'Pants' },
    { id: 5, title: "Denim Jeans", price: 69.95, category: 'Pants' }
    ]

    let titles = products.map(product => product.title)
    console.log(products)
   console.log(titles)

   let student = {firstName: "Mirza", institute: "IOD"}

   let modifiedObject = {...student, country: "New Zealand", institute: "UOA"}

   console.log(modifiedObject)

   let h2titles = products.map(product => '<h2>'+product.title+'</h2>')
let raisedPrices = products.map(product => ({...product, price: product.price + 5}) )

console.log(h2titles)
console.log(raisedPrices)
console.log(products)
    // we usually use an arrow function - runs once for each array element until condition is true
    let jeans = products.find(product => product.title == "Denim Jeans")
    let pants = products.find(product => product.category == "Pants")
    
    let under50s = products.filter(product => product.price < 50)
    let between50s70s = products.filter(product => product.price > 50 && product.price < 70)

    
    let alljeans = products.filter(product => product.title = "Denim Jeans")
    let allpants = products.filter(product => product.category = "pants")
    
    
    console.log(jeans)
    console.log(pants)
    console.log(alljeans)
    console.log(allpants)
    console.log(under50s)
    console.log(between50s70s)

   // let shirt = products.find(product => product.category == 'Shirts') // returns matching item
   // console.log(jeans) // { id: 3, title: 'Denim Jeans', price: 49.95, category: 'Pants' }
   // console.log(shirt) // { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' }
