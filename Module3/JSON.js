const student = {
    name: 'Sita',
    age: 28,
    courses: ['HTML', 'CSS', 'JS'],
    occupation: null
    }

    console.log(JSON.stringify(student))

    const book = {
        title: "Gone With The Wind",
        printTitle() { // ignored
        console.log(this.title)
        },
        releaseDate: undefined // ignored
        }
        console.log(JSON.stringify(book)) // {"title":"Gone With The Wind"}

        const room = {
            number: 23
            }
        const meetup = {
            title: "Strategy Conference",
            participants: ['Chris', 'Tina'],
            date: '2023-06-01'
            }
        meetup.place = room; // meetup references room
        room.occupiedBy = meetup; // room references meetup

        console.log(JSON.stringify(meetup, ['title', 'participants'], 2))

        console.log( JSON.stringify(meetup, (key, value)=> {
            if (key != '' && value == meetup) return undefined // skip references to current object
            else if (typeof value == 'function') return value.toString() // stringify functions
            return value // otherwise return original value unchanged
            }, 2) ); // use 2 spaces for nicer formatting

            const room2 = {
                number: 23, toJSON() { return this.number }
                }
                const meetup2 = {
                title: "Strategy Conference", participants: ['Chris', 'Tina'], date: '2023-40-40'
                }

                meetup2.place = room2; // meetup references room
                
                room2.occupiedBy = meetup2; // room references meetup
                
                const meetupJSONString = JSON.stringify(meetup2) 

                const meetupConvertedObject = JSON.parse(meetupJSONString, (key, value)=>{
                    if ( !isNaN(Date.parse(value)) ) return new Date(value) // if valid date, create Date object
                        return value;
                })
                console.log(meetupConvertedObject)

