const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(morgan('dev'))

app.get('/api',(req,res)=>{
  res.send('welcome')
})

mongoose.connect('mongodb://localhost:27017/shop11')
    .then(()=>{
      console.log('sucesfully conected to mongoDB database')

      app.listen(3000,()=>{
        console.log('server is listen on port 3000')
      })
    })
    .catch((err)=>{
      console.log('error')
    })





// 1) შექმენით სერვერსი ფოლდერი, სერვერში დაამატეთ package.json, app.js ფაილები, შემდეგ დააინტალირეთ express, cors, mongoose, morgan, შექმენით სერვერი გამოიყენეთ ჯერ-ჯერობით საჭირო მოდულები და გატესტეთ სატესტო Route_გამოყენებით.

// შექმენით ფოლდერები, controllers, routers, models.

// დაამატეთ შესაბამისი ფაილები.

// product.model.js ფაილში დაამატეთ ჯერ სქემა და შემდეგ შექმენით მოდელი (თუ დაგავიწყდებათ მოიძიეთ ინტერნეტში)

// (ახსენით კომენტარებით რა არის სქემა და რა არის მოდელი)