function Sum(x, y, z)
{
    return x + y + z;
}
function slow(x)
 {
    // there can be a time-consuming job here, like adding up to a large number
    let random = 0
    let goal = Math.floor(Math.random() * x * 1_000_000); // random large number
    console.log(`slow(${x}): randomly generated goal for ${x * 1_000_000} is ${goal}`);
    
    for (let i = 0; i < goal; i++) 
        random++;

    return random; // return large number after counting to it
}

function CachingDecorator(originalFunction)
{
    const cache = new Map(); // can also include outer environment variables via a closure
  
    return function(x)
           {
                if(cache.has(x))
                {
                    console.log('returned cached value for ' + x); 
                    return cache.get(x); // read and return the result from it
                }
                let result = originalFunction(x) // otherwise, call the original function and store the result
                cache.set(x, result); // then cache (remember) the result for next time
                return result;
           }
}

function loggingTimingDecorator(originalFunction) 
{ // decorator takes a function as parameter
    return function(x) 
           { // and returns that function with extra bits - timing/logging
                console.time('Function timer'); // start a timer
                console.log(`\nExecuting function ...`) // log a message
                const result = originalFunction.call(this, ...arguments) //
                //const result = originalFunction.apply(this, arguments); // execute the original function and store result
                console.timeEnd('Function timer'); // stop the timer
                return result; // return the result of running the original function
           }
}

let decoratedSlowFunc = CachingDecorator(slow)
let decortedWithLoggingTime = loggingTimingDecorator(decoratedSlowFunc)
let decoratedSUMFunction = loggingTimingDecorator(Sum)

console.log(decortedWithLoggingTime(50))
console.log(decortedWithLoggingTime(50))
console.log(decoratedSUMFunction(10, 20, 30))