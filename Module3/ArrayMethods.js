const sliceArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

const sliced = sliceArray.slice(0, 3) // start at the beginning, get items up to index 3
const endSliced = sliceArray.slice(-3) // start at the end, get last 3 items

console.log(sliced) // [ 'red', 'orange', 'yellow' ]
console.log(endSliced) // [ 'blue', 'indigo', 'violet' ]
console.log(sliceArray) // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const spliceArray = ["I", "study", "JavaScript", "right", "now"]

const removed = spliceArray.splice(0, 3, "Let's", "dance")

console.log(removed) // [ 'I', 'study', 'JavaScript' ] - 3 elements starting at index 0 are removed
console.log(spliceArray) // [ "Let's", 'dance', 'right', 'now' ] - 2 new elements are inserted



spliceArray.splice(1,spliceArray.length, "Something", "unusual")
console.log(spliceArray)
spliceArray.splice(2)

spliceArray.splice(spliceArray.indexOf("Something"), spliceArray.length - spliceArray.indexOf("Something"), "")
console.log(spliceArray)

const array1 = [1,2,3]
const array2 = [4,5,6]
const array3 = [7,8,9]

const combined = array1.concat(array2, array3)

console.log(combined) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

let newArray = combined.concat(10, 11)

console.log(combined)
console.log(newArray)

const marks = ['A+', 'C+', 'B-', 'D', 'B+', 'C+', 'B-', "A-", "B+", "B-"]

let bIndex = marks.indexOf('B-')
let bIndexFromLast = marks.lastIndexOf("B-")
let eIndex = marks.indexOf('E')

// first index is always 0
console.log(marks[bIndex] + ' is at index: ' + bIndex) // B- is at index: 2
console.log(eIndex) // -1, since not found
console.log(bIndexFromLast)

const students = ["Graham", "Gavin", "Hang", "Rose"]

let semicolonSeperated = students.join(";")

let studentsArray = semicolonSeperated.split(";")

console.log(studentsArray)
