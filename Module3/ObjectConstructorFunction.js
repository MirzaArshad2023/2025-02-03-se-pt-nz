function Student(firstName, lastName, age)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isVisaValid = () => true
}

let student1 = new Student("Mirza", "baig", 30)
let student2 = new Student("Will", "Smith", 50)
let student3 = new Student("bruce", "Wills", 10)
let student4 = new Student("Bruce", "Lee", 100)

console.log(student1, student2, student3, student4)

class StudentClass
{

    constructor(firstName, lastName, age)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    isVisaValid()
    {
        return true;
    }

}

let student5 = new StudentClass("Mirza", "Arshad", 30);
let student6 = new StudentClass("Mirza", "Arshad", 30);
let student7 = new StudentClass("Mirza", "Arshad", 30);