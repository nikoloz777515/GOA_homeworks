const http = require('http')
const fs = require('fs')
const path = require('path')
const  url  = require('url')


const server = http.createServer((req,res)=>{
    const pathFile =  path.join('cars.json')
    const PrasedUrl = url.parse(req,url,true)
        if(req.url === '/'){
          fs.readFile(pathFile,(err,data)=>{
            if(err) {
                res.statusCode = 500
                res.end('Server Error')
                return
            }
             res.setHeader('Content-Type', 'application/json')
            res.end(data)

            
          })
          
        }else if(PrasedUrl.pathname === '/cars/car'){
             const carId = Number(PrasedUrl.query.id)
                  fs.readFile(pathFile,(err,data)=>{
                      if(err){
                        res.statusCode = 500
                        res.end('erorr')
                        return
                      }
                  })


        }
        else{
            res.statusCode = 404
            res.end('Not Found')
        }
        
})



server.listen(3000,()=>{
    console.log('server is listen on 3000')
})








// 2) შექმენით cars.json - სადაც გექნებათ მოცემული მანქანების ინფორმაცია, თითოეულს უნდა ჰქონდეს თავისი id, იმ შემთხვევაში თუ მომხმარებლის მიერ შემოტანილი ბილიკი === '/' მაშინ დააბრუნეთ მთლიანი cars.json ინფორმაცია, იმ შემთხვევაში თუ მომხმარებელს შემოიტანა ბილიკი 'cars/car?id={carId}' მაშნ მომხმარებელს json ფორმატში გამუტანეთ ამ id - ის მიხედვით მანქანის ინფორმაცია, იმ შმთხვევაში თუ მომხმარებელმა query - სახით შემოიტანა ისეთი მანქანის id რომელიც არ არსებობს დაუბრუნეთ error 
