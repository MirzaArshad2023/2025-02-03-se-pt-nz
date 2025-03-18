HelloWorld()


function HelloWorld()
{
    console.log("Hello World")
}

const sayHello = function()
{
    console.log("Hello World")
}

sayHello()

const sayHelloArrow = () => console.log("Hello World Arrow")

sayHelloArrow()

function SUM(a, b)
{
    let c = 0;
    
    if(typeof(arguments[0]) == "number" && typeof(arguments[1]) == "number")
        c = a + b;
    else
        console.log("invalid argument passed")
    
    
    return c;
}

const addition = (a, b) => {
    let c = 0;
    c = a + b;
    return c;
}

addition(2, 3)
console.log(SUM(4, "Mirza"))
let subtract = (a, b) => a - b
let subtract2 = (a, b) => {return a - b}

console.log(subtract(5,6))