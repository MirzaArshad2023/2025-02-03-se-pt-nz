const string = 'I could be anything you like'
console.log(string.length) // 28 - string is 28 characters long
console.log(string.indexOf('anything')) // 11 - starting at 0 for 'I'
console.log(string.substring(20)) // 'you like' - substring starting at position 20
console.log(string.toUpperCase()) // I COULD BE ANYTHING YOU LIKE
console.log(string + ' plus more') // I could be anything you like plus more

const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.startsWith('The')) // true - case sensitive
console.log(sentence.endsWith('dog.')) // false - needs the full stop
console.log(sentence.split(' '))

const listOfStudents = "Graham;Gavin;Hang;Rose"

console.log(listOfStudents.split(";"))

console.log(sentence.slice(4, 10)) //
console.log(sentence.slice(15, 18))

console.log(sentence.replace('quick', 'slow')) // The slow brown fox jumps over the lazy dog.
console.log(" extra spaces ".trim()) // extra spaces - trims whitespace from start and end
console.log(" extra spaces ".replace(" ", ""))
