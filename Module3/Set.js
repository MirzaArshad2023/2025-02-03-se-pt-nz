const studentsArray = ["Graham", "Gavin", "Rose", "Hang", "Graham", "Hang"]

const studentsNotDuplicated = new Set(studentsArray)
console.log(studentsArray)
console.log(studentsNotDuplicated)

const names = new Set(['Pedro', 'Oliver', 'Jack', 'Mateo'])
names.add('Mateo')
names.add('Oliver')
names.add('Bruno')
console.log(names.size) // 5 - only the unique names
console.log(names) // Set(5) { 'Pedro', 'Oliver', 'Jack', 'Mateo', 'Bruno' }

console.log(names.delete("Oliver"))

console.log(names.has("Bruno"))

names.clear()

console.log(names)

for(let student of studentsNotDuplicated)
{
    console.log(student)
}

studentsNotDuplicated.forEach(student => console.log(student))