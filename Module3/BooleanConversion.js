function SUM(a, b)
{
    return a + b
}

function SearchStudent(nameOfStudent)
{
    return  ""
}

console.log( Boolean("") ) // false - empty string
console.log( Boolean(0) ) // false - zero value
console.log( Boolean(null) ) // false - no value
console.log( Boolean(undefined) ) // false - unknown value
console.log( Boolean(NaN) ) // false - not a number
console.log( Boolean("false") ) // true - non-empty string
console.log( Boolean(-1) ) // true - non-zero number
console.log(Boolean(54))
console.log(Boolean("Mirza"))

if (SearchStudent("Gavin"))
{
    console.log("Student has visa")
}
else
    console.log("Student is not found")



if (undefined) console.log('undefined is true') // implicit conversion to false - won't print msg


console.log(SUM(5, 7) == 12 ? SUM(5, 7) * 10 : SUM(5, 7) * 5)


console.log( NaN ? 'NaN is true' : 'NaN is false' ) // NaN is false
console.log( 0 ? 'zero is true' : 'zero is false' ) // zero is false
console.log( "hello" ? 'hello is true' : 'hello is false' ) // hello is true

console.log( !undefined ) // true - convert value to boolean then negate it (opposite)
console.log( !!"" ) // false - convert value to boolean then negate/toggle twice