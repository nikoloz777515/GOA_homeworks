const mongoose = require('mongoose')

// Product Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {   // ← typo fixed
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  }
}, { timestamps: true })

// Product Model
const Product = mongoose.model('Product', productSchema)

module.exports = Product
