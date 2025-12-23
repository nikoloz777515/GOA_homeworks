const express = require('express')

const app3 = express()

const products = [
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 200 },
    { id: 3, name: "Product C", price: 300 },
]

app3.get('/products',(req,res)=>{
      const {name} = req.query

    const  product = products.find(p => p.name === name)

      if(product){
        res.status(200).json(product)
      }else{
        res.status(404).json({message:'Product cant be found'})
      }

})

app3.listen(3000,()=>{
  console.log('server is listen on port 3000')
})



/*
    GET Route /products?name=Product%20
    - Query parameter ეს არის დამატებითი ინფორმაცია URL-ის ბოლოს რომელიც იწყება ? ნიშნის სიმბოლოთი
      მაგალითად /products?name=Product%20B
      Express-ში req.query.name
    
    - Route parameter ეს არის URL-ის ოფიციალური ნაწილი რომელიც Route-შია განსაზღვრული
      მაგალითათ /products/:id
      Express-ში: req.params.id

    ტერმინების ძირითადი განსხვავება:
     Route parameter არის URL ის ნაწილი და აუცილებელია მისი მითითება
     Query parameter არის დამატებითი ინფორმაციის მიწოდება URL-ის ბოლოში და არ არის აუცილებელი
*/

// 3) შექმენით Route სადაც მეთოდი არის GETხოლო ბილიკი /products, დაამატეთ პარამტერი სახელად name, შემდეგ მაგ პარამეტრის მეშვეობით მოიძიეთ ობიექტში პროდუქტი რომელიც სახელს ემთხვევა product.name === name, თუ ვერ ვიპოვით ვაბრუნებთ 404 ერორს მესიჯით, თუ ვიპოვეთ ვაბრუნებთ მაგ პროდუქტს (ახსენიტ კომენტარებით და მაგალიტებით რა არის parameter და query) 
// რომელია ექსპრესში დამატებითი და რომელიც მატ შორის ლინკის შემადგენენლი ოფიციალური ნაწილი