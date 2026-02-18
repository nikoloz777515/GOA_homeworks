const Product = require('../models/product.model')


exports.createProduct = async (req,res) =>{
    try{
      const product = await Product.create(req.body)
      res.status(201).json({
        message: 'product created sucesfully'
      })
    }catch (err){
      res.status(404).json({
        message: 'eoror to create product'
      })
    }
}

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find()

    res.status(200).json(products)
  } catch (err) {
    res.status(500).json({
      message: 'Error on products',
      error: err.message
    })
  }
}

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({
        message: 'Product not found'
      })
    }

    res.status(200).json(product)
  } catch (error) {
    res.status(404).json({
      message: 'Invalid product id',
      
    })
  }
}


exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)

    if (!product) {
      return res.status(404).json({
        message: 'Product not found'
      })
    }

    res.status(200).json({
      message: 'Product deleted successfully'
    })
  } catch (error) {
    res.status(404).json({
      message: 'Invalid product ID',
    })
  }
}



// 2) შექმენით createProduct, getProducts, getProduct, deleteProduct კონტროლერები თავისი ლოგიკით.

// (აუცილებელია ასინქრონული ფუნქციების შექმნა, შემდეგ მოიძიეთ/გაიხსენეთ ნასწავლი მასალა და მიხვდებიტ რომელი მეთოდების გამოყენება გიწევთ მოდელზე)

// 3) კონტროლერები დაარეგისტრირეთ Router_ზე