const express = require('express')
const Router = express.Router()

const studentController = require('./users.controller')

Router.get('/',studentController.gettAllStudents)

Router.get('/:id',studentController.getStudentById)

Router.post('/:id',studentController.createStudent)

Router.delete('/:id',studentController.deleteUser)

module.exports = Router 