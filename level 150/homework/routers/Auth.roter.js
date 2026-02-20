const express = require('express')
const router2 = express.Router()

const {signUp,login} = require('../controllers/auth.controller') 

router2.post('/signUp',signUp)
router2.post('/login',login)

module.exports = router2
