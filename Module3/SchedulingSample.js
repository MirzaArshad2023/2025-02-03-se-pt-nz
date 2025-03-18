function Sum(x, y)
{
    console.log(`The sum of numbers passed is : ${x + y}`)
}

console.log("First")
console.log("second")

let timerID = setTimeout(()=> console.log("third"), 1000) //delaying the printing of 'third' by 1 second
let timerID2 = setTimeout(()=>console.log("Five"), 2000)
let timerID3 = setTimeout(Sum, 4000, 10, 15) //let timerID3 = setTimeout(()=>Sum(10, 15), 4000)
console.log("Fourth")

clearTimeout(timerID)
clearTimeout(timerID2)

function printMessage(msg)
{
   console.log(`Message: ${msg}`)
}
    // function to be executed, then milliseconds to delay, then arguments for function
let timerId = setTimeout(printMessage, 1000, 'prints after 1 sec') // Message: prints after 1 sec