console.log( Number(" 4 ") ) // 4 - trims spaces
console.log( Number(null) ) // 0 - intentionally empty value converts to 0
console.log( Number(undefined) ) // NaN - non-existent value is unknown
console.log( Number(false) ) // 0 - false converts to 0
console.log( Number(true) ) // 1 - true converts to 1
console.log( Number("") ) // 0 - empty string converts to 0
console.log( Number("123T") ) // NaN - non-empty strings beginning with chars cannot convert

console.log("6" / "5") // 3
console.log("6" * "2") // 12
console.log("6" - "2") // 4
console.log( "5" + "5")
console.log(+"6") // 6