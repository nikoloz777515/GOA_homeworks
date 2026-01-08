const express = require('express')
const router = express.Router()

const {
    getallBike,
  getBikebyId,
  createBike,
  updaTeBike,
  deleTebike
} = require('../controllers/bikes.controllers')

router.get('/',getallBike)
router.get('/:id',getBikebyId)

router.post('/',createBike)

router.put('/:id',updaTeBike)
router.delete('/:id',deleTebike)

module.exports = router
