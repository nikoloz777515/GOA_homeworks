const express = require('express')
const router = express.Router()
const{
  createProduct,
  getAllProcuct,
  getProductById,
  deleteProduct,
  updateProduct
} = require('../controllers/products.controller')


router.get('/',getAllProcuct)

router.get('/:id',getProductById)

router.post('/', createProduct)

router.delete('/:id',deleteProduct)

router.patch('/:id',updateProduct)

module.exports =  router