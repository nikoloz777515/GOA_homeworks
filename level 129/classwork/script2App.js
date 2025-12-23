const express = require('express')

const script2App =  express()

const products = [
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 200 },
    { id: 3, name: "Product C", price: 300 },
]

script2App.get('/products',(req,res)=>{
  const id = Number(req.query.id)

  const product = products.find(p => p.id === id)

  if(product){
    res.status(200).json(product)
  }else{
    res.status(404).json({
      message:"Product can't be found"
    })
  }
})

script2App.listen(3000,()=>{
  console.log('server is listen on port 3000')
})

// 2) შექმენით GET ტიპის Route /products, რომელსაც მოთხოგვნის გაგზავნისას თან უწერთ querys. example: GET /products?id=2
// თვენი დავალებაა მოიძიოთ ინფროიმაცია როგორ უნდა წაიკითხოთ query express ში, შემდეგ შესაბამისი ID მოიძიეთ პროდუქტი მასივში, თუ იპოვეთ დაუბრუნეთ ეგ პროდუქტი სტატუსის კოდით 200  json ფორმატში, სხვა შემტხვევაში 404 {message: "Product cant be found"}




