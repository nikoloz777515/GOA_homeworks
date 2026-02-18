const express = require('express')
const router = express.Router()

const {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct
} = require('../controllers/product.controller')


router.get('/', getProducts)


router.get('/:id', getProduct)


router.post('/', createProduct)


router.delete('/:id', deleteProduct)

module.exports = router

// 2) შექმენით createProduct, getProducts, getProduct, deleteProduct კონტროლერები თავისი ლოგიკით.

// (აუცილებელია ასინქრონული ფუნქციების შექმნა, შემდეგ მოიძიეთ/გაიხსენეთ ნასწავლი მასალა და მიხვდებიტ რომელი მეთოდების გამოყენება გიწევთ მოდელზე)

// 3) კონტროლერები დაარეგისტრირეთ Router_ზე