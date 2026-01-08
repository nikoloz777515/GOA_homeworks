const express = require('express')

const postRouter = require('./routers/posts.router')

const app = express()
app.use(express.json())

app.use('/posts',postRouter)

app.listen(3000,()=>{
  console.log('server is listen on port 3000')
})
// 1) საკლასო დავალებად მოცემული პროექტი დაასრულეთ, დაამატეთ controllers - folder - და მასში შეინახეთ შესაბამისი ფუნქციები, კოდი გადაანაწილეთ შესაბამის ფაილებში

// 2) მოიძიეთ ინფორმაცია (თუ ზოგადად რა არის controller, კარგად გაიაზრეთ), აგრეთვე მოიძიეთ ინფორმაცია middleware ფუნქციების შესახებ

// 3) საკლასო დავალებად მოცემულ პროექტში, ისეთ ფუნქციებში სადაც პროდუქტის ინფორმაციის ამოსაღებად იყენებდით query - ებს, ამის მაგივრად გამოიყენეთ body კუთვნილება, დაწერილი კოდი კი გაიაზრეთ და ახსენით კომენტარების სახით