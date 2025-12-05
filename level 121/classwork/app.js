

const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === "/fullname"){
         res.end('Nikoloz Kvelashvili')
    }
    else if(req.url === "/firstname"){
        res.end('Nikolozi')
    }
    else if(req.url ==="/lastname"){
        res.end("Kvelashvili")
    }
    else{
        res.end('invalid path')
    }
   
})

server.listen(3000,()=>{
    console.log('server is listening on 3000')
})






















// 1) შექმენით web app/server http მოდულის დახმარებით Node.js, როდესაც მიიღებთ მოთხოვნას დაუბრუნეთ 
// პასუხად თქვენი სახელი და გვარი


// 2) req.url გამოყენებით გააკეთეთ სერვერი რომელიც თუ მოთხოვნა გამოგზავნილი იქნება /fullname დაუბრუნეთ თქვენი სახელი გვარი, /firstname 
// დაუბრუნეთ მხოილოდ თქვენი სახელი /lastname დაუბრუნეთ გვარი, თუ არცერთი ბილიკი არ იქნება დაუბრუნეთ Invalid path ეს ტექსტი



