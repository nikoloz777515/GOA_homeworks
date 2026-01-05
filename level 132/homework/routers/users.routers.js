const express = require('express')
const router = express.Router()

const {
  getAllUser,
  getUserbyId,
  createUser,
  updaTeuser,
  deleteUser
} = require('../controllers/users.controlers.js')


router.get('/', getAllUser)
router.get('/:id', getUserbyId)


router.post('/',createUser)

router.put('/:id',updaTeuser)

router.delete('/:id',deleteUser)


module.exports = router