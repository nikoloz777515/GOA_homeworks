const express = require('express')
const cors = require('cors')

const authRouter = require('./routers/users.roters')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/auth',authRouter)

app.listen(3000,()=>{
  console.log('server is listen on port 3000')
})