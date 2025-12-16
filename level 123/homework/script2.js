const http = require('http')
const path = require('path')
const url = require('url')


const server = http.createServer((req,res)=>{
      const PrasedUrl = url.parse(req.url,true)
      if(PrasedUrl.pathname === '/transform'){
          const {case:textCase,text} = PrasedUrl.query

          let result = ""
          if(textCase === 'upper'){
              result =text.toUpperCase()
          }else if(textCase === 'lower'){
              result = text.toLocaleLowerCase()
          }else {
      res.statusCode = 400
      res.end('Invalid case value')
      return
    }
       res.statusCode = 200
    res.end(result)
      }else{
        res.statusCode = 404
        res.end('Not Found')
      }
})

server.listen(3000,()=>{
  console.log('server is listen on 3000')
})






// 3) შექმენით ერთი ბილიკი, /transform?case={upper, lower}&text={text}, თქვენი დავალებაა, რომ query - დან ამოიღოთ text და გადააქციოთ ის case - ში არსებული მნიშვნელობის მიხედვით შესაბამის რეგისტრში მაგალითად text ---> Hello World case=upper ---> HELLO WORLD 