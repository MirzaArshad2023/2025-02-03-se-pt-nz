const user={
    name: 'John',
    sayHi()
    {
        console.log(`Hi, ${this.name}`)
    }
}

user.sayHi()
setTimeout(() => user.sayHi(), 2000)

const user2 = {
    name: 'Mirza',
    sayHi() {
    console.log(`Hello, ${this.name}`)
    }
    }
    const boundSayHi = user2.sayHi.bind(user2) // new function reference with user context explicitly bound
    setTimeout( boundSayHi, 1000 ) // works! Hi, John