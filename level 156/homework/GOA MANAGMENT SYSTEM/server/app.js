const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

const studentRouter = require('./routers/students.router')
const groupsRouter = require('./routers/groups.router')
const usersRouter = require('./routers/users.router')
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/api/students',studentRouter)
app.use('/api/groups',groupsRouter)
app.use('/api/users',usersRouter)


mongoose.connect("mongodb://localhost:27017/Goa")
.then(()=>{
  console.log('sucesfully conected to mongoDB')
  app.listen(3000,()=>{
    console.log('server is listen on port 3000')
  })
})



// 1) შექმენით ჯგუფის, სტუდენტების და user მოდელები