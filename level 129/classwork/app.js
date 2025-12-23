const express = require('express')
const app = express()

app.get('/home',(req,res)=>{
  res.send('welcome To home Page')
})

app.get('/about',(req,res)=>{
  res.send('Welcome To About Us Page')
})

app.get('/login',(req,res)=>{
  res.send('Welcome To Login Page')
})

app.get('/register',(req,res)=>{
  res.send('Welcome To Register Page')
})

app.get('/rate',(req,res)=>{
  res.send('Welcome To Rate Us Page')
})

app.listen(3000,()=>{
  console.log('server is listen on port 3000')
})


/*
    Route
    არის კონკრეტული URL ბილიკი სერვერზე, რომელიც ასრულებს ფუნქციას ანუ იმას რასაც მომხმარებელი მოითხოვს
      მაგალითად '/home' '/login' და ა.შ
    
    Routing
     ეს არის უკვე ის პროცესი როდესაც სერვერი იღებს HTTP მოთხოვნებსს GET POST PUT
      ამოწმებს URL ს და განსაზღვრავს რომელი ფუნქცია უნდა შესრულდეს მოცემული Route ისათვის
*/

// 1) შექმენიტ სერვერი სადაც გექნებათ 5 განსხვავებული Route, თითოეული უნდა აბრუნებდეს სხვადასხვა ინფოს. ახსენით რა არის Route და Routing კომენტარებით.
// გამოიყენეთ Express