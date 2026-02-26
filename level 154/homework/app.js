const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const AuthRouter = require('./routers/auth.router')

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('api/login',AuthRouter)

app.get('/home',(req,res)=>{
    res.send('welocme to home page')
})


mongoose.connect('mongodb://localhost:27017/socialmedia')
 .then(()=>{
      console.log('database conected sucesfully')
      app.listen(3000,()=>{
        console.log('server is listen on port 3000')
      })
    }).catch((err)=>{
      console.log(err)
    })



// 1) გაიარეთ Mailtrap - ზე რეგისტრაცია და შედით account - ზე, utils - folder - ში email.js - ის ფაილში nodemailer - module - ის გამოყენებით, შექმენით sendEmail ფუნქცია და შესაბამისი transporter - ი mailtrap - ში თქვენთვის მოცემული ინფორმაციით როგორიცაა host, port - და auth - ობიექტი (user, pass) - კუთვნილებებით, აგრეთვე user.model.js - ის ფაილში დაამატეთ თქვენით ახალი მეთოდი სახელად verficationCode რომელიც დააგენერირებს და გააგზავნის 4 - ნიშნა კოდს, არ დაგავიწყდეთ user schema - ში ახალი კუთვნილებების დამატება isVerified, verficationCode, controllers - ფაილში signup - ფუნქციაში გამოიყენეთ თქვენს მიერ შექმნილი მეთოდი შექმნილ user ობიექტზე, დამატებით შექმენით ახალი ფუნქცია სახელად verifyEmail - რომლიც პარამეტრიდან მიიღებს კოდს, იპოვის მოცემული კოდით მომხმარებლის ობიექტს მონაცემთა ბაზაში და isVerified - კუთვნილების მნიშვნელობას გაუტოლებს true - ს, რადგან მომხმარებელმა მოცემული email - უკვე დაადასტურა

// 2) 1 დავალების დასრულების შემდეგ, თქვენი კოდი გაიაზრეთ და ახსენით თითოეული დეტალი კომენტარების სახით