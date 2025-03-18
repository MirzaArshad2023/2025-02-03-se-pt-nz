const arr1 = new Array(1,2,3); // constructor, not often used
const arr2 = [1, 2, 3]; // array literal, much more common



arr1.push(4)
arr2.push(5)


arr1.pop()
arr2.pop()

arr1.shift()
arr2.shift()

arr1.unshift(6)
arr2.unshift(6)


console.log(arr1)
console.log(arr2)

let queue = new Array()

queue.push(1)
queue.push(2)
queue.push(3)

console.log(queue)

console.log(queue.shift())
console.log(queue.shift())
console.log(queue.shift())

queue.push(1)
queue.push(2)
queue.push(3)

console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())

const fruits = ['Apple', 'Orange', 'Pear']
const firstFruit = fruits.shift() // removes and returns the first item
console.log(firstFruit) // Apple
console.log(fruits) // [ 'Orange', 'Pear' ]

const fruits1 = ['Apple', 'Orange', 'Pear']
const fruits2 = fruits1 // refers to same memory location
fruits2.unshift("Banana")
console.log(fruits1)
console.log(fruits2)
console.log(fruits1[0])

for(let i=0; i<fruits1.length; i++)
    console.log(fruits1[i])

//Multidimensional arrays.

const matrix = [ // 3x3 matrix
    [1, 2, 3], // row 0
    [4, 5, 6], // row 1
    [7, 8, 9] // row 2
    ]

console.log(matrix[0][0])
console.log(matrix[2][2])



let student1 = {
    firstName: "Mirza",
    institute: "IOD"
}
let student2 = {
    firstName: "Graham",
    institute: "IOD"
}
let student3 = {
    firstName: "Rose",
    institute: "IOD"
}

const students = [student1, student2, student3]

const numbers = [1, 2, 3]
const strings = ["one", "two", "three"]
const empty = []
console.log(`Numbers: ${numbers} `) // Numbers: 1,2,3
console.log('Strings: ' + strings) // Strings: one,two,three
console.log('Empty: ' + empty) // Empty:

console.log("Students:" + students)