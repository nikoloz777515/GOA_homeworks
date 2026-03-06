const express = require('express')

const studentRouter = express.Router()
const {createStudents,getAllStudents,deleteStudent} = require('../controllers/students.controller')


studentRouter.get('/',getAllStudents)
studentRouter.post('/',createStudents)
studentRouter.delete('/:id',deleteStudent)

module.exports =  studentRouter