const express = require('express')

const app = express()


const users = [
  {
    id: 1,
    username: "nika123",
    email: "nika@gmail.com",
    password: "123456",
    age: 22
  },
  {
    id: 2,
    username: "gio_dev",
    email: "gio@gmail.com",
    password: "password",
    age: 25
  },
  {
    id: 3,
    username: "ana99",
    email: "ana@gmail.com",
    password: "qwerty",
    age: 20
  }
];


app.get('/users',(req,res)=>{
  res.status(200).json(users)
 
})


app.get('/users/random',(req,res)=>{
  const randomIndex = Math.floor(Math.random() * users.length)
  const randomUser = users[randomIndex]

  res.json(randomUser)
})


app.get('/users/:id',(req,res)=>{
const id = Number(req.params.id)
const user = users.find(u => u.id === id)

if(!user){
  return res.status(404).json({message: 'you entered wrong user'})
}
  res.json(user)
})



app.listen(3000,()=>{
  console.log('server is listen on 3000')
})




// 3) შექმენით მასივი სადაც შენახავთ მომხმარებლების ობიექტებს, შექმენით ბილიკი '/users' და დააბრუნეთ მოცემული მომხმარებლების მასივი json - ის ფორმატში, შემდეგ კი დაამატეთ ახალი ბილიკი '/users/:id' (მოიძიეთ ინფორმაცია პარამეტრების შესახებ express js - ში), გადმოცემული id - ით იპოვეთ users მასივში კონკრეტული მომხმარებელი და დააბრუნეთ მისი მონაცემები json - ის ფორმატში, აგრეთვე დაამატეთ get მოთხოვნა მოცემულ ბილიკზე '/users/random' რომელიც მოცემულ მასივიდან ამოიღებს random user - ს და დააბრუნებს მის ობიექტს

// 4) თქვენით გატესტეთ მოცემული მოთხოვნების მუშაობა POST, DELETE (გამოიყენეთ postman) done