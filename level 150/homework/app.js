const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const router = require('../homework/routers/products.routers')

const router2 = require('./routers/Auth.roter')

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())


app.get('/home',(req,res)=>{
  res.send('welcome to home page')
})

app.use('/api/products',router)

mongoose.connect('mongodb://localhost:27017/Products1')
.then(()=>{
      console.log('sucesfully conected to mongoDB database')

      app.listen(3000,()=>{
        console.log('server is listen on port 3000')
      })
    })
    .catch((err)=>{
      console.log(err)
    })












// 2) შექმენით პროექტი სასურველ თემაზე სადაც გამოიყენებთ დღევანდელ გაკვეთილზე ნასწავლ მასალას როგორიცაა სქემის და მოდელის შექმნა, მაგალითად (პროექტის თემატიკა - shop) უნდა შეგვეძლოს პროდუქტების მონაცემთა ბაზაში დამატება, წაშლა, განახლება, წამოღება (CRUD operations), ამისათვის დაუკავშირდით თქვენს მონაცემთა ბაზას mongoose.connect მეთოდის გამოყენებით, შექმენით შესაბამისი folders, files როგორიცაა controllers ---> product.controller.js და ასე შემდეგ, კარგი იქნება თუ თითოეულ ფაილში გამოიყენებთ კომენტარებსაც





// 1) პროექტს რომელზეც ახლა მუშაობთ server, client - ის მხარეს დაუმატეთ login, signup - ფუნქციებიც