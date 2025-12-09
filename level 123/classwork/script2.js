const http = require('http')
const fs = require('fs')
const path = require('path')
const querystring = require('querystring')
const url =  require('url')



const products = path.join( 'products.json')

const server =  http.createServer((req,res)=>{
    const parsedUrl = url.parse(req.url)
        if(parsedUrl.pathname === '/products'){
            const query = querystring.parse(parsedUrl.query)
        fs.readFile(products,(err,data)=>{
            if(err){
                res.writeHead(500, {"Content-Type": "application/json"});
                return res.end(JSON.stringify({error:"Cannot read products file"}));
            }
               let produ = JSON.parse(data)

               if(query.category){
                    produ = produ.filter(p => p.category.toLowerCase() === query.category.toLowerCase())
               }
            if(query.price){
                 const priceLimit = parseFloat(query.price);
                 if(!isNaN(priceLimit)){
                    produ = produ.filter(p=>p.price<= priceLimit)
                 }
            }
               res.writeHead(200, {"Content-Type": "application/json"});
            res.end(JSON.stringify(produ))
        })
              return
        }
            res.writeHead(404, {"Content-Type": "application/json"});
    res.end(JSON.stringify({error:"Not Found"}))
    
})

server.listen(3000,()=>{
    console.log('server is listen on 3000')
})


// 2) შექმენით AI დახმარებით products.jsonფაილი, რომელშიც 50 მდე სხვადასხვა კატეგორიის პროდუქტები იქნება მოცემული JSON ფორმატში, როდესაც მოთხოვნას მიიღებთ გამოიყენეთ URL კონსტრუქტორი ლინკის ნაკუწებად გადასაქცევად შემდეგ querystring.parse მეთოდი, query (საძიებელი სიტყვების) ობიექტის სახიდ გარდაქმნისთვის, გექნებათ ორი ფილტარატორი ფასი და კატეგორია, რის მიხედვითაც უნდა დააბრუნოთ JSON სახით ინფორმაცია

// მაგ: /products?category=medicine



