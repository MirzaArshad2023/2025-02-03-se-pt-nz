const now = new Date()
console.log( now ) // 2023-03-26T11:45:59.096Z
console.log( +now ) // 1679832116638 - number of milliseconds since epoch

const epoch = new Date(0) // 0 milliseconds since Jan 1 1970
console.log(epoch)
const jan2epoch = new Date(1000 * 60 * 60 * 24)
console.log(jan2epoch)

const christmas = new Date('2023-12-25') // assumes UTC timezone if time not included
console.log(christmas) // 2023-12-25T00:00:00.000Z - Z indicates UTC timezone, GMT+0

const nyeLocal = new Date('2023-12-31 23:59:59') // assumes local timezone if time is included
console.log(nyeLocal)
const nyeUTC = new Date('2023-12-31 23:59:59+00:00') // specific timezone specified (UTC)
console.log(nyeUTC)

const boxingDay = new Date(2023, 11, 26) // month 11 is December, assumes local timezone
console.log(boxingDay) // 2023-12-25T14:00:00.000Z - so hours are different in UTC

const remembranceDay = new Date( 2023, 10, 11, 11, 11 ) // month 10 is November, assumes local timezone
console.log(remembranceDay) // 2023-11-11T01:11:00.000Z - so hours are different in UTC

const christmaslocal = new Date('2023-12-25') // assumes UTC timezone if time not included
console.log( christmaslocal.toLocaleDateString() ) // 25/12/2023 - dd/mm/yyyy if in Australia/NZ

console.log( christmas.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }) )

const nyeLocal2 = new Date('2023-12-31 23:59:59') // assumes local timezone if time is included
console.log( nyeLocal2.toLocaleString() ) // 31/12/2023, 11:59:59 pm - default to local TZ