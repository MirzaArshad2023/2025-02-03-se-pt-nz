function isOdd(number) 
{
     return number % 2; 
} // returns true if number is odd, false otherwise
function getOddNumbers() 
{
// arguments is not an array, but it 'borrows' the filter function from Array by using call
   return [].filter.call(arguments, isOdd); // arguments is context, isOdd is parameter for filter
   //let oldnumbers = arguments.filter(number => isOdd(number))

}
let results = getOddNumbers(1, 3, 7, 8, 10, 20, 23, 27, 11);
console.log(results); // [ 1, 3, 9 ] (array of all odd arguments)


function Sum()
{
    let result = 0
    console.log(arguments)
    for(let k=0;k<arguments.length; k++)
    {
        result = result + arguments[k]
    }
    
    return result
}

console.log(Sum(10, 12, 34, 5, 23, 1, 23))