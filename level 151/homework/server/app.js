const express = require('express')
const cors = require('cors')
const  morgan = require('morgan')
const mongoose = require('mongoose')

app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.get('/home',(req,res)=>{
  res.send('welocme to home page')
})

mongoose.connect('mongodb://localhost:27017/Movies')
    .then(()=>{
      console.log('database conected sucesfully')
      app.listen(3000,()=>{
        console.log('server is listen on port 3000')
      })
    }).catch((err)=>{
      console.log(err)
    })



// 1) შექმენით პროექტი Movies ფილმებზე, სადაც შეგეძლებათ ახალი ფილმის დამატება, წაშლა, განახლება და წამოღება, ყველაფერი უნდა ინახებოდეს ჩვეულებრივად მონაცემთა ბაზაში, ამისთვის mongoose ბიბლიოთეკის შესაბამისი მეთოდით დაუკავშირდით მონაცემთა ბაზას, შექმენით შესაბამისი ფაილების და folder - ების სტრუქტურა და გაიაზრეთ დაწერილი კოდებიც, დაამატეთ რეგისტრაციის და ავტორიზაციის ფუნქციებიც server - ის მხარეს, სადაც მომხმარებელს შეეძლება account - ის შექმნა და account - ზე login - ის დახმარებით შესვლა, შექმენით შესაბამისი schema და model







