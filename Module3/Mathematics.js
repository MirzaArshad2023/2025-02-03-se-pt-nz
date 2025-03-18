function Sum(num1, num2)
{
    console.log("Sum of numbers")
}

function Multiply()
{
    
    console.log("Multiply two numbers")
    Multiply.counter = Multiply.counter + 1
}
Multiply.counter = 0
function Subtract()
{
    console.log("Subtract numbers")
}

function Divide()
{
    console.log("Divide numbers")
}
function PrintHelloWorld(x, y, z)
{
    console.log("Hello, I'm learning Advanced javascript")
}
function ArithmeticOperations()
{
    if(arguments.length > 0)
    {
        for(let k = 0; k< arguments.length; k++)
        {
            let z = arguments[k]
            console.log(`name of the function passed: ${z.name}`)
            console.log(`number of arguments of that function is ${z.length}`)
            z()
        }
    }
}

ArithmeticOperations(Sum, Divide, PrintHelloWorld)
Multiply()
Multiply()
Multiply()
console.log(Multiply.counter)
