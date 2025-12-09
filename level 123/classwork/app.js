const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req,res)=>{
  
    if (req.url === '/index') {

        const filePath = path.join( 'pages', 'index.html')

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/html"})
                return res.end("Error loading");
            }

            res.writeHead(200, {"Content-Type": "text/html"})
            res.end(data)
        })

        return;
    }
    else if (req.url === '/about') {

        const filePath = path.join( 'pages', 'about.html')

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/html"});
                return res.end("Error loading ")
            }

            res.writeHead(200, {"Content-Type": "text/html"})
            res.end(data);
        });

        return;
    }

    else if (req.url === '/login') {

        const filePath = path.join( 'pages', 'login.html');

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/html"})
                return res.end("Error loading")
            }

            res.writeHead(200, {"Content-Type": "text/html"})
            res.end(data)
        });

        return;
    }


  
})


server.listen(3000,()=>{
    console.log('server is listen on 3000')
})






// 1) შექმენით 3 html ფაილი მაგ: index, about, login, ჩაწერეთ ამ HTML ფაილებში შესაბამისი კოდი და მოათავსეთ ისინი pages ფოლდერში, შემდეგ შექმენიტ სერვერი, რომელიც ბილიკის სახელის მიხედვიტ დააბრუნებს სერვერიდან html ფაილს მაგ: /home დაუბრუნეთ index.html ფაილი 
// და ასშ (ამის გასაკეთებლად მოიძიეთ ინფორმაცია როგორ უნდა დააბრუნოთ სერვერიდან html ფაილები, აგრეთვე გამოიყენეთ writeHead 
// თუ საჭიროება მოითხოვს.