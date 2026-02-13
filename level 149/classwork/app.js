const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(express.json())
app.use(morgan('dev'))

const studentRoutes = require('./users.router')
app.use('/students',studentRoutes)


app.listen(3000,()=>{
  console.log('server is listen on port 3000')
})