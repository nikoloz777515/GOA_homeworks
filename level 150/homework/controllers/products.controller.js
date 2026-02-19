const products = require('../models/Product.model')

exports.createProduct = async (req,res) =>{
    try{
      const Product = await products.create(req.body)
      res.status(201).json({
        message: 'product created sucesfully'
      })
    }catch(err){
      console.log(err)
    }
}

exports.getAllProcuct = async (req,res) =>{
  try{
    const Products = await products.find()
  res.status(201).json(Products)

  }catch(err){
    console.log(err)
  }
}

exports.updateProduct = async (req,res) =>{
  try{
    const updatePrd = await products.findByIdAndUpdate(req.params.id, req.body,{new: true, runValidators:true})

     if (!updatePrd) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      })
    }
    res.status(200).json({
      message: 'product upadet sucesfully',
        data: updatePrd
    })

  }catch(err){
    console.log(err)
  }
}

exports.getProductById = async (req,res) =>{
  try{
    const Product = await products.findById(req.params.id)
    if(!Product){
      return res.status(404).json({
        message: 'Product is not find'
      })
    }
    res.ststus(200).json(Product)
  }catch(err){
    res.ststus(404).json({
      message: 'invalid product id'
    })
  }
}
exports.deleteProduct = async (req,res) =>{
  try{
    const Product = await products.findByIdAndDelete(req.params.id)

    if(!Product){
      return res.ststus(404).json({
        message: 'product is not found'
      })
    }
      res.status(200).json({
        message: 'Product deleted sucesfully'
      })
  }catch(err){
    res.status(404).json({
      message: 'Invalid id'
    })
  }
}