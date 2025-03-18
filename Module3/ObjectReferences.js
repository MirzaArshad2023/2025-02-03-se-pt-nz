let Student1 = {

    firstName: "Mirza"
}
let Student2 = {
    firstName: "Gavin"
}

Student2 = Student1

console.log(Student1)
console.log(Student2)

Student1.firstName = "Graham"

console.log(Student2)
console.log(Student1)