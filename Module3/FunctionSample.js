function SimpleFunction(nameOfStudent)
{
    return "The name of the student is " + nameOfStudent
}

function FuncationCaller(x, y)
{
    if(5 > 2)
    {
        x()
    }
    else
    {
        y()
    }
}


console.log(SimpleFunction("Graham"))
console.log(SimpleFunction("Gavin"))
console.log(SimpleFunction("Hang"))
console.log(SimpleFunction("Rose"))


//Function named expression
const sayHI = function(nameOfStudent)
{
    return "The name of the student is " + nameOfStudent
}
console.log(sayHI("Gavin"))

const callFunc = sayHI

console.log(callFunc("Graham"))

FuncationCaller(sayHI, callFunc)