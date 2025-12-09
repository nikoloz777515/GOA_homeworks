// 3) შექმენით თქვენი server, შეამოწმეთ იმ შემთხვევაში თუ ბილიკი უდრის /students და მეთოდი უდრის 'GET' - ს მაშინ გამოიტანეთ query text - ში არსებული მნიშვნელობა მაგალითად ?text=Hello World!


const http = require('http')
const url = require('url')

    const method = req.method

const server = http.createServer((req,res)=>{
      if(req.url === 'students' &&  method === 'GET'){
            
      }
})


server.listen(3000,()=>{
    console.log('server is listen on 3000')
})