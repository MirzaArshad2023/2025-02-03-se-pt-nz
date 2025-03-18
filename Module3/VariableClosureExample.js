function Sum(x)
{
   return function Add(y)
          {
             return x + y;
          }
}


let SumResult = Sum(10)
console.log(Sum.name)
console.log(SumResult(5))
console.log(SumResult.name)

function makeHeading(hTag) { // every call to makeHeading could have different values for hTag
    return function(title){ // unnamed closure function, can access value of hTag when created
    return `<${hTag}>${title}</${hTag}>`
    }
    
}
const getH1 = makeHeading('h1') // sets hTag to h1, creates new instance of closure in getH1
const getH2 = makeHeading('h2') // sets hTag to h2, creates separate instance of closure in getH2
console.log(getH1.name)
console.log(getH2.name)
console.log( getH1('Heading 1') ) // sets title to Heading 1 inside <h1>: <h1>Heading 1</h1>
console.log( getH2('Heading 2') ) // sets title to Heading 2 inside <h2>: <h2>Heading 2</h2>

console.log(makeHeading.name)


function sayHiDefn() 
{ 
    console.log('Hi (function definition)'); 
} // named function

const sayHiExpn = function() 
                    { 
                        console.log('Hi (function expression)'); 
                    } // named variable

const sayHiArrow = () => console.log('Hi (arrow function)'); // named variable

//.name property exists as a built-in default property for all functions
console.log(sayHiDefn.name) // sayHiDefn - uses explicit function name
console.log(sayHiExpn.name) // sayHiExpn - figures out name from context
console.log(sayHiArrow.name) // sayHiArrow - figures out name from context