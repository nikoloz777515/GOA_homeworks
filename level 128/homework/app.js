const express = require('express')
 const app = express()

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 2500,
     rating: 10,
    category: "Electronics",
    inStock: true
  },
  {
    id: 2,
    name: "Phone",
    price: 1500,
     rating: 6,
    category: "Electronics",
    inStock: false
  },
  {
    id: 3,
    name: "Headphones",
    price: 300,
    rating: 8,
    category: "Accessories",
    inStock: true
  }
];


 app.get('/products',(req,res)=>{
    const {name,price} = req.query

    const product = products.find(p => p.name === name && p.price === Number(price))

    if(!product){
      return res.status(404).json({
        message:'Product Not Found'
      })
    }

    res.json({
     name: product.name,
     price: product.price,
     rating: product.rating
    })
 })

 app.listen(3000,()=>{
  console.log('server is listen on 3000')
 })
// 1) შექმენით მასივი სადაც შეინახავთ პროდუქტების ობიექტებს, თქვენი დავალებაა, რომ query - დან გამომიდინარე დააბრუნოთ შესაბამისი პროდუქტი, მაგალითად /products?name='exampleProduct'&price=2637 returns ---> {
//   name: 'exampleProduct'
//   price: '2637'
//   rating: 5
// }



