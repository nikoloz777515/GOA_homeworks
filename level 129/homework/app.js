const express = require('express')
const app = express()

const users = [
  {id : 1, name: 'Nika', favoriteFilm : 'Scarface'},
   {id : 2, name: 'Gio', favoriteFilm : 'Bumber'},
    {id : 3, name: 'Avto', favoriteFilm : 'Who am I'},
]

app.get('/users/:id',(req,res)=>{
      const id = Number(req.params.id)
      const {favoriteFilm} = req.query

      const user = users.find(u => u.id === id )

      if(!user){
        return res.status(404).json({
          message: 'Something is wrong with the user'
        })
      }
      res.send(`users ${id}'s favorite film is ${favoriteFilm}`)
})

app.listen(3000,()=>{
  console.log("server is listen on port 3000")
})

// 1) გადახედეთ resource - ებში გადმოგზავნილ ლინკებს

// 2) მოუსმინეთ GET მოთხოვნას '/users/:id?favouriteFilm={favoriteFilm}, მოცემულ ბილკზე, თქვენი დავალებაა, რომ id პარამეტრის გამოყენებით თქვენს მიერ შექმნილ მასივში მოცემული მომხმარებელი იპოვოთ მოიპოვოთ favouriteFilm - კუთვნილებაზე წვდომა და დააბრუნოთ პასუხი შემდეგნაირად, მაგალითად ---> '/users/1?favouriteFilm=exampleFilm ---> returns 'user 1's favourite film to watch is exampleFilm'
