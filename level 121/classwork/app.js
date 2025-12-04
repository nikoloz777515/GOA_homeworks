

// const server = http.createServer((req,res)=>{
//     if(req.url === "/fullname"){
//          res.end('Nikoloz Kvelashvili')
//     }
//     else if(req.url === "/firstname"){
//         res.end('Nikolozi')
//     }
//     else if(req.url ==="/lastname"){
//         res.end("Kvelashvili")
//     }
//     else{
//         res.end('invalid path')
//     }
   
// })

// server.listen(3000,()=>{
//     console.log('server is listening on 3000')
// })


















const http = require('http')


const users = [
    { firstname: "Nikoloz", lastname: "Kvelashvili", age: 18 },
    { firstname: "Giorgi", lastname: "Gigauri", age: 21 },
    { firstname: "Mariam", lastname: "Gelashvili", age: 39 }
]

const server = http.createServer((req, res) => {


    const index = req.url.slice(1)   
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



// 1) შექმენით web app/server http მოდულის დახმარებით Node.js, როდესაც მიიღებთ მოთხოვნას დაუბრუნეთ 
// პასუხად თქვენი სახელი და გვარი


// 2) req.url გამოყენებით გააკეთეთ სერვერი რომელიც თუ მოთხოვნა გამოგზავნილი იქნება /fullname დაუბრუნეთ თქვენი სახელი გვარი, /firstname 
// დაუბრუნეთ მხოილოდ თქვენი სახელი /lastname დაუბრუნეთ გვარი, თუ არცერთი ბილიკი არ იქნება დაუბრუნეთ Invalid path ეს ტექსტი



