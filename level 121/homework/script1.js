// 2) შექმენით web application, სადაც JSON - ის ფორმატით დააბრუნებთ პასუხს, მაგალითად დააბრუნეთ თქვენს შესახებ ინფორმაცია JSON - ის ფორმატში
const http = require('http')

const server =  http.createServer((req,res)=>{
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
})

server.listen(3000,()=>{
    console.log("server is listen on 3000")
})




// 5) ვისაც არ გაქვთ დასრულებული საკლასო დავალებები, დაასრულეთ