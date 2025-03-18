const guestList = `Guests: \n\t- John \n\t- Pete \n\t- Mary`
console.log(guestList)

let string = "Hello world\"s"
let string2 = 'Hello IOD\'s students'

console.log(string)
console.log(string2)

let string3 = "Mirza\\IOD"
console.log(string3)

let unicodeString = "\u00A9"

console.log(unicodeString)

let unicodeSmilyeface = "\u{1F60D}"

console.log(unicodeSmilyeface)

console.log("eating" > "eaten")


console.log( 'z'.codePointAt(0) ) 

for(let i = 65; i< 91; i++)
    console.log( String.fromCodePoint(i) )

for(let i = 97; i< 123; i++)
    console.log( String.fromCodePoint(i) )