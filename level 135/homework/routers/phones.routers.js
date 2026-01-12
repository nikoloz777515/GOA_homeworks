const express = require('express')
const phoneRouter = express.Router()

const {
    getAllphone,
  getPhonebyId,
  createPhone,
  updatePhone,
  deletePhone
} = require('../controller/phones.controller')
const phoneBodyChecker = require('../middlewares/phoneBodyChecker')

phoneRouter.get('/',getAllphone)
phoneRouter.get('/:id',getPhonebyId)

phoneRouter.post('/',phoneBodyChecker,createPhone)

phoneRouter.put('/:id',phoneBodyChecker,updatePhone)

phoneRouter.delete('/:id',deletePhone)

module.exports = phoneRouter