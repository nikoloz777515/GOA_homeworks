// 3) შექმენით server - ი, შეამოწმეთ ბილიკი თუ ბილიკი არის /text დააბრუნეთ ჩვეულებრივი ტექსტი, თუ /json გამოიტანეთ რაიმე ინფორმაცია JSON - ის ფორმატში, თუ /number გამოიტანეთ რაიმე რიცხვი

const http = require('http')


const server = http.createServer((req,res)=>{
    if(req.url === "/text"){
        res.end("Hello World")
    }
    else if (req.url === "/json") {
        res.setHeader("Content-Type", "application/json")

        const me = {
            firstname: "Nikoloz",
            lastname: "Kvelashvili",
            age: 18,
            profession: "Student & Web Developer",
            city: "Gori",
            interests: ["JavaScript", "React", "Coding"]
        }

        res.end(JSON.stringify(me))
    }
    else if(req.url === "/number"){
        res.end("1,2,3,4,5,6,7,8,9,10")
    }

   
})
 server.listen(3000,()=>{
        console.log("server is listen on 3000")
    })