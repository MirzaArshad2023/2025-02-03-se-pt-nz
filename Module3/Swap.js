let x = 10
let y = 20

console.log(x, y)
let z = x
x = y
y = z

console.log(x, y)


let student = 'James', teacher = 'Andrew';
[student, teacher] = [teacher, student]

console.log("Student value is " + student) // Andrew
console.log("Teacher value is " + teacher) // James

const [jcFirst = 'Unknown', jcLast, jcTitle = 'Consul'] = ['Julius', 'Caesar']

console.log(jcFirst, jcclearLast, jcTitle)