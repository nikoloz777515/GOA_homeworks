// 4) მოიძიეთ ინფორმაცია query - ების შესახებ, თქვენი დავალებაა, რომ შეამოწმოთ თუ type უდრის 'admin' - ს დააბრუნეთ შესაბამისი მისალმება მაგალითად 'Hello admin' თუ 'user', 'Hello user', moderator 'Hello moderator' სხვა შემთხვევაში კი დააბრუნეთ მნიშვნელობა 'invalid type', კომენტარების სახით ახსენით თუ რა არის query

const http =  require('http')
const url = require('url')


const server =  http.createServer((req,res)=>{
        const parsedUrl = url.parse(req.url, true); // true -> query ობიექტში
    const query = parsedUrl.query; // აქ გვექნება { type: 'admin' } ან სხვა

    res.setHeader("Content-Type", "text/plain"); // ან JSON

    if(query.type === 'admin'){
        res.end("Hello Admin")
    }
    else if(query.type === 'user'){
        res.end("Hello User")
    }
    else if(query.type === 'moderator'){
        res.end("Hello Moderator")
    }
    else{
        res.end("invalid type")
    }
})

server.listen(3000,()=>{
    console.log("server is listen on 3000")
})