function printGreeting(name) 
{ // simple undecorated function
    console.log('Hello, ' + name);
}

//printGreeting("Mirza")

function loggingTimingDecorator(originalFunction) 
{ // decorator takes a function as parameter
    return function(name) 
           { // and returns that function with extra bits - timing/logging
                console.time('Function timer'); // start a timer
                console.log(`\nExecuting function ...`) // log a message
                const result = originalFunction(name); // execute the original function and store result
                console.timeEnd('Function timer'); // stop the timer
                return result; // return the result of running the original function
           }
}

let decoratedPrintGreeting = loggingTimingDecorator(printGreeting)
decoratedPrintGreeting("Mirza")