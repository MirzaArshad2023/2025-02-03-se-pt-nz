let user = {
    "first_name" : "Sammy",
    "last_name" : "Shark",
    "age" : 25,
    "followers" : 987,
    "has a dog" : true
    }
console.log(user)
console.log(user["first_name"])
console.log(user.last_name)
console.log(user.age)
console.log(user.followers)
user["has a dog"] = false
user["last_name"] = "Wilson"
console.log(user)