const http = require('http')
const users = [
    { firstname: "Nikoloz", lastname: "Kvelashvili", age: 18  },
    { firstname: "Giorgi", lastname: "Gigauri", age: 21 },
    { firstname: "Lika", lastname: "Gelashvili", age: 39 }
]

const server = http.createServer((req, res) => {


   const index = Number(req.url.slice(1)) 

   
    const user = users[index]

    if (user) {
        res.end(`User is ${user.firstname} ${user.lastname} and ${user.age} years old`)
    } else {
        res.end("Invalid Req")
    }

})

server.listen(3000, () => {
    console.log("Server listening on port 3000")
})

// 3) შექმენით ობიექტების/მომხმარებლების მასივი სადაც მინიმუმ 3 მომხმარებელი გექნებატ firstname, lastname და age კუთვნილებებით, თუ ბილიკი იქნება /0 დაუბრუნეთ User is {firstname} {lastname} and {age} years old, ინდექსების მიხედვიტ თუ ინდექსი არ არსებულია დაუბრუნეთ Invalid Req