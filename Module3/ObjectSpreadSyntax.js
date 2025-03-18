const user = {name:"Elliot", age: 27}

const clonedUser = {...user}

const Student = {
    School: "KIngs", 
    age: 15, 
    address: {
        suburb: "New Windsor",
        postcode: "0600"
    },
    work: function()
    {
        console.log("Do homework")
    }

}



const Student1 = {...Student, age: 25, Country: "New Zealand", Suburb: "New Windsor", School: "New Windsor School"}

console.log(Student)
console.log(Student1)

const vehicle = {make: "Toyota", model: "2025"}

const UserVehicle = {...Student, ...vehicle, "has a dog": true, "has a cat": false}

console.log(UserVehicle)