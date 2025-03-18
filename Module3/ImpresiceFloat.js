let num1 = 0.1
let num2 = 0.2

console.log((num1 + num2).toFixed(1))

let x = 9_999_999_999_999_999
console.log(x)

function doCalculation(a)
{
    if(isNaN(a))
        console.log("Not a number")

    return a * 25
}

console.log(doCalculation("mirza"))

console.log(isFinite(1/3)) // true, regular number
console.log(isFinite("string")) // false, because converts to NaN
console.log(isFinite(Infinity)) // false, because represents infinite number

console.log(Number("    5    "))
console.log(Number("   5   mirza "))
console.log(parseInt("   545rza "))
console.log(parseFloat("12.45.67"))
console.log(parseFloat("12.23abc"))
console.log(parseInt("a123"))