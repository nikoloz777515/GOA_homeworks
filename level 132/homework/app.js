const express =  require('express')
const morgan = require('morgan')

const userRouters = require('./routers/users.routers.js')

const app = express()
app.use(express.json())
app.use(morgan('dev'))

app.use('/users',userRouters)

app.listen(3000,()=>{
  console.log('server is listen on port 3000')
})




// 1) შექმენით პროექტი სადაც გამოიყენებთ CRUD operations, თქვენი კოდი გადაანაწილეთ შესაბამის folder - ებში და ფაილებში, შექმენით routers folder - ი, სადაც შეინახავთ router - ს შესაბამისი მეთოდებით, აგრეთვე მოიძიეთ ინფორმაცია ერთ-ერთ middleware - ზე, morgan - ის შესახებ, და გამოიყენეთ ის თქვენს პროექტში
