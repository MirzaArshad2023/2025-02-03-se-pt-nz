class Student{
    constructor(firstName, instituteName, country)
    {
        this.firstName = firstName;
        this.instituteName = instituteName;
        this.country = country
    }
    toString()
    {
        return "FirstName: " + this.firstName
    }
}

let Student1 = new Student("Graham", "IOD", "New Zealand")   


let Student2 = new Student("Gavin", "IOD", "New Zealand")


let Student3 = {
    firstName: "Hang",
    instituteName: "IOD",
    country: "New Zealand"
}

let Student4 = {
    firstName: "Rose",
    instituteName: "IOD",
    country: "New Zealand"
}

console.log(`The student information is ${Student1}`)
console.log(`The student information is ${Student2}`)

class Apple
{
    constructor(origin, colour, quantity)
    {
        this.origin = origin;
        this.colour = colour;
        this.quantity = quantity;
    }
    valueOf()
    {
        return this.quantity
    }
}

let apples = new Apple("NZ", "green", 10)

console.log(apples * 2)