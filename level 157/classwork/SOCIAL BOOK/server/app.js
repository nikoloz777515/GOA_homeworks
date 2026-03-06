const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const connectDB = require('./config/mongo.config')
const authRouter = require('./routers/auth.router')
const PostRouter = require('./routers/post.router')

const app = express()
const morgan = require('morgan')
const globalErorrHandler = require('./controllers/erorr.controller')

app.use(morgan('dev'))

app.use(express.json())
app.use('/api/auth',authRouter)
app.use('/api/posts',PostRouter)
app.use(globalErorrHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
  console.log(`server is connected to port ${PORT}!`)
  connectDB()
})