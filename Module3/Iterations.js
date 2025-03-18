let fruits = ["banana", "apple", "Pineapple", "grapes", "pears"]

let student1 = new Object()
let student2 = new Object()
let student3 = new Object()
let student4 = {}

let student5 = {
    firstName: "Mirza",
    lastName: "Arshad",
    country: "New Zealand",
    insitute: "IOD"
}

let listOfStudents = [student1, student2, student3, student4, student5]

for(let i=0; i< fruits.length; i++)
{
    console.log(fruits[i])
}

for(let key in student5)
{
    console.log(`${key} : ${student5[key]}`)
}


