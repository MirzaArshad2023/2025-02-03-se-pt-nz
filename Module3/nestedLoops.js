class Student
{
    constructor(firstName, lastName)
    {
        this.firstName = firstName
        this.lastName = lastName
        this.universitiesApplied = ["UOA", "AUT", "UT", "AT", "VIC"]
    }
      
}

let student1 = new Student("Mirza", "Arshad")
let student2 = new Student("Will", "Smith")
let student3 = new Student("Bruce", "Wills")

const studentsEnrolled = new Array()
studentsEnrolled.push(student1)
studentsEnrolled.push(student2)
studentsEnrolled.push(student3)

let university;
let listofUniversitites = new Array();
let universities = []
console.log(studentsEnrolled)
for(let i=0; i < studentsEnrolled.length; i++)
{
    universities = studentsEnrolled[i].universitiesApplied
    console.log(universities)
    for(let k=0; k < universities.length; k++)
    {
        university = universities[k]     
        listofUniversitites.push(university)
    }
}

console.log(new Set(listofUniversitites))