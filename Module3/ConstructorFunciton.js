function sum(x, y)
{
    return x + y;
}

function Student(firstName, country, drivingLicense)
{
    this.firstName = firstName
    this.country = country
    this.drivingLicense = drivingLicense
}

class Person
{
    constructor(firstName, country, drivingLicense)
    {
        this.firstName = firstName
        this.country = country
        thisw.drivingLicense = drivingLicense
    }

}

let student1 = new Student("Graham", "NZ", true)
let student2 = new Student("Gavin", "NZ", false)
let student3 = new Student("Rose", "NZ", true)
let student4 = new Student("Hang", "NZ", false)

let person1 = new Person("Will", "USA", false)
let person2 = new Person("Will", "USA", true)