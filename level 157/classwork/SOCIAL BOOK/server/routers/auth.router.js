const express = require('express')
const {signUp,login,verifyEmail} = require('../controllers/auth.controller')

const authRouter = express.Router()

authRouter.post('/signup',signUp)

authRouter.post('/login',login)

authRouter.post('/verify',verifyEmail)


module.exports = authRouter