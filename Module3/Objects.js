let Student = {
    firstName : "John",
    lastName: "Alex",
    "has a cat" : true,
    4: "Four",
    "4": "string Four"
}

let Student2 = new Object()

console.log(Student)

Student.address = "80 queen street, Auckland"
Student.firstName = "Mirza"
Student.Country = "New Zealand"

console.log(Student.firstName)
console.log(Student["has a cat"])
Student["has a cat"] = false
console.log(Student.firstName)
delete Student["has a cat"]
delete Student.address
Student["has a dog"] = true
console.log(Student)

if(Student.age)
    console.log("Student age is " + Student.age)
else
    console.log("Student doesn't have age property")

let ageExists = Student.age ? console.log("Student age is " + Student.age) : console.log("Student doesn't have age property")
