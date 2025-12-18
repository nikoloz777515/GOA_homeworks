const http = require('http')
const fs = require('fs')
const path = require('path')


const userFile = path.join(__dirname,'users.json')

const redBody = (req)=>{
  return new Promise((resolve)=>{
    let body = ''


    req.on('data',chunk =>{
      body += chunk.toString()
    })
    req.on('end',()=>{
      resolve(JSON.parse(body))
    })
  })
}

const server = http.createServer(async(req,res)=>{
    if(req.url === '/register' && req.method === 'POST'){
        const  {email,password} = await redBody(req)
        const data = JSON.parse(fs.readFileSync(userFile,'utf-8'))
        const users = data.users

        const userExist = users.find(user => user.email === email)

        if(userExist){
          res.writeHead(400,{'Content-Type' : 'application/json'})
          return res.end(JSON.stringify({
            message: 'email is alredy registered'
          }))
        }

        const newUser = {email,password} 
        users.push(newUser)
        fs.writeFileSync(userFile,JSON.stringify({users},null,2))
        res.writeHead(201,{'Content-Type':'application/json'})
        return res.end(JSON.stringify({
          message: 'registered sucesfully',
          user:newUser
        }))
    } 
    if(req.url === '/login' && req.method === 'POST'){
          const {email,password } = await redBody(req)
          const data = JSON.parse(fs.readFileSync(userFile,'utf-8'))
          const users = data.users

        const user = users.find(u=> u.email === email && u.password === password)

      if(!user){
        res.writeHead(401,{'Content-Type':'application/json'})
        return res.end(JSON.stringify({
          message: 'invalid email or password'
        }))
      }
      res.writeHead(200,{'Content-Type':'application/json'})
      return res.end(JSON.stringify(user))
    }
    res.writeHead(404,{'Content-type':'application/json'})
    res.end(JSON.stringify({
      message: 'Route Not Found'
    }))
})

server.listen(3000,()=>{
  console.log('server is listen on 3000')
})



// 2) stage - ის chat - ში გადმოგზავნილ კოდს, თქვენით დაამატეთ საკლსო დავალებებში მოცემული BONUS დავალება

// 3) შექმენით პროექტი სადაც, მომხმარებელს შეეძლება რეგისტრაციის და ავტორიზაციის გავლა, შეამოწმეთ მოცემული მომხმარებლის ინფორმაცია, თუ მომხმარებელი უკვე არსებობს იგივე email - ით ფაილში, გამოიტანეთ message - 'An email is already registered', როდესაც მომხმარებელი გაივლის ავტორიზაციას და მისი მონაცემები იყო სწორი გამოიტანეთ ამ მომხმარებლის ობიექტი, რომელიც შეინახეთ ფაილში