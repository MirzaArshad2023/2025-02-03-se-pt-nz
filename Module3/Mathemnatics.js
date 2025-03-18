let one = 2;
let two = 2;
let three = 3;
// standard BODMAS order of operations - use brackets to override
// below is: 1 + 2 - ( (3 * 2) / 1 ) = 3 - 6

console.log((one + two) - (three * two) / one);

let score = 100
//score--
score++
console.log(score)

const bigint_valid = 1234567890123456789012345n;
const bigint_invalid = 1234567890123456789012345; // too large for standard integers

console.log(bigint_valid == bigint_invalid)