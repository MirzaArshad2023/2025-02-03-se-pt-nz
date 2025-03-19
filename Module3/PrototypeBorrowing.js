// define our own join() function for objects
const obj = 
{
    0: "Hello",
    1: "world",
    2: "New Zealand",
    length: 3, // needed for join to work
};
const obj2 = 
{
    0: "Hi",
    1: "Earth",
    2: "New Zealand",
    length: 3, // needed for join to work
};

//obj.join = Array.prototype.join; // adds a join function to THIS object that uses Array.join()
Object.prototype.join = Array.prototype.join

console.log(obj.join())
console.log(obj2.join())