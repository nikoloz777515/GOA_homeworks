const express = require('express')

const app = express()

app.get('/',(req,res)=>{
  res.send('Hello World')
})

app.get('/login',(req,res)=>{
  res.send('Welcome to Login Page')
})

app.listen(3000,()=>{
  console.log('server is listen on 3000')
})