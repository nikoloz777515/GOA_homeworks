const express = require('express')
const router = express.Router()

const {register} = require('../controllers/auth.users')

router.post('/register',register)

module.exports = router