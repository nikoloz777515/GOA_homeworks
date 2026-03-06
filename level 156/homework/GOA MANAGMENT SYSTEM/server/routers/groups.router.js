const express =  require('express')

const groupsRouter = express.Router()

const  {getAllgroups,createGroup,updateGroup,deleteGroup} = require('../controllers/group.controller')

groupsRouter.get('/',getAllgroups)
groupsRouter.patch('/:id',updateGroup)
groupsRouter.post('/',createGroup)
groupsRouter.delete('/:id',deleteGroup)

module.exports = groupsRouter