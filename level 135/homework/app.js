const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(express.json())
app.use(morgan('dev'))


const phoneRouter = require('./routers/phones.routers')
app.use('/phones',phoneRouter)


app.listen(3000,()=>{
  console.log('server is listen on port 3000')
})




// 2) კომენტარების სახით ახსენით თუ რა არის middleware ფუნქცია, კარგად გაიაზრეთ ის
// middleware ფუნქცია არის შუამდგომელი ფუნქცია რომელიც დგას req,res შორის მაგალითად როგორიცაა morgan use და ა.შ






// 3) შექმენით პროექტი, სადაც შეგეძლებათ ახალი ტელეფონების დამატება, წაშლა, განახლება და წამოღება (როგორც id - ით ისე id - ის გარეშე), მოცემული კოდები გადაანაწილეთ შესაბამის folder, file - ებში, აგრეთვე შექმენით თქვენივე middleware ფუნქციები მაგალითად (body checker რომელიც შეამოწმებს არის თუ არა body - ში ტელეფონისთვის აუცილებელი კუთვნილებები მოცემული) გამოიყენეთ ისინი, შეგიძლიათ გამოიყენოთ ისეთი middleware ფუნქციები რომლებიც მოცემული დავალებისთვის გჭირდებათ