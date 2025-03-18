let nameEntered = ""
function greet(name)
{
    console.log("Name Entered:" + name)
    return name
}
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter something: ", function(userInput) {
    nameEntered = userInput
    console.log("You entered:", userInput);
    rl.close();
});

if(isFinite(greet(nameEntered))!=false)
{
    console.log("Test passed")
}
