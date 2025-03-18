// property names (keys) on right are matched to variable names on left
let dimension = { title: 'My Component', height: 100, width: 200 }
let { width, height, title } = dimension
console.log(width, height, title) // 200 100 My Component

let student = {firstName: "Mirza", Institute: "IOD", Country: "New Zealand", Address: "63 queen street, Auckland", "Has a cat": false}

let {firstName, Institute, city} = student
console.log(firstName, Institute, city)

function ProcessData({firstName, Country})
{
    console.log(firstName, Country)
}

ProcessData(student)

function displayComponent({height = 200, width = 100, title})
 {
    console.log(`<div style="width:${width}px; height:${height}px"><h2>${title}</h2></div>`)
 }


 displayComponent({width:200, title:'My Awesome Component'})
 displayComponent({title:'My Amazing Component'})
 displayComponent({width:300, height:300, title:'My Average Component'})

 let options = { width: 200, height: 100, title2: 'My Component' }


let { title2, ...rest2 } = options
console.log(title2) // My Component
console.log(rest2) // { width: 200, height: 100 }