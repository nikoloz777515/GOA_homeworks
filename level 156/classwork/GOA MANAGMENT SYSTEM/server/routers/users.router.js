const express = require('express')
const usersRouter = express.Router()

const {createUsers,getAllusers,updateUsers,deleteUsers} = require('../controllers/user.controller')

usersRouter.get('/', getAllusers)
usersRouter.post('/', createUsers)
usersRouter.patch('/:id', updateUsers)
usersRouter.delete('/:id', deleteUsers)

module.exports = usersRouter