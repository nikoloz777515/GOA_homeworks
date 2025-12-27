const express = require('express')

const app = express()

app.use(express.json())

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Smartphone", price: 800 },
  { id: 3, name: "Headphones", price: 150 },
  { id: 4, name: "Keyboard", price: 70 },
  { id: 5, name: "Mouse", price: 40 },
  { id: 6, name: "Monitor", price: 300 },
  { id: 7, name: "USB Drive", price: 20 },
  { id: 8, name: "Webcam", price: 90 },
  { id: 9, name: "Speaker", price: 120 },
  { id: 10, name: "Charger", price: 35 }
];


app.get('/products',(req,res)=>{
  res.status(200).json(products)
})

app.get('/products/:id',(req,res)=>{
  const id = Number(req.params.id)
  const product = products.find(p => p.id === id)

  if(!product){
    return res.status(404).json({
      message:'product not found'
    })
  }
  res.status(200).json(product)
})
app.delete('/products/:id',(req,res)=>{
  const id = Number(req.params.id)
  const index = products.findIndex(p => p.id === id)

  if(index === -1){
        return res.status(404).json({
          message:'wrong product'
        })
  }

  const deleteProduct = products.splice(index,1)
  res.status(200).json({
    message:'Product deleted sucesfully'
  })
})
  app.post('/products',(req,res)=>{
    const {name,price} = req.query

    if(!name || !price){
      return res.status(404).json({
        message:'name and price are required'
      })
    }

    const neWproduct = {
      id: products.length +1,
      name,
      price: Number(price)
    }

    products.push(neWproduct)
    res.status(200).json(neWproduct)
  })

  app.patch('/products/:id',(req,res)=>{
    const id = Number(req.params.id)

    const {name,price} = req.query

    const product = products.find(p => p.id === id)

    if(!product){
      return res.status(404).json({
        message:'product not Found'
      })
    }
    if(name) product.name = name
    if(price) product.price = Number(price)

    res.status(200).json(product)
  })
  
app.listen(3000,()=>{
  console.log('server is listen on port 3000')
})


// 3) შექმენით CRUD ოპერაცია მთლიანად user ზე, უნდა ხდებოდეს მომხმარებლის რეგისტრაცია, ავტორიზაცია, ყველა მომხმარებლის ნახვა, ერთი მომხმარებლის ნახვა ID, მომხმარებლის წაშლა და განახლება. GET, POST, DELETE, PATCH


// 2) დაამატეთ პროდუქტის დამატების Route POST /products რომელსაც query 
// დახმარებიტ უნდა გადაეცემოდეს name და price, აგრეთვე 
// დაამატეთ PATCH /products/:id რომელიც შეცვლის არსებულ
//  პროდუქტს, თქვენ მინიმუმ ერთ კუთვნილებას უნდა ელოდებოდეთ 
// ან name ან price, შეამოწმეთ რომელი გადმოგეცათ და მაგის მიხედვით შეცვალეთ ობიექტი, შემდეგ შეცვლილი ობიექტი დააბრუნეთ.



// 1) დაარეგისტრირეთ 3 Route, პირველი GET /products რომელიც უბრალოდ აბრუნებს ყველა პროდუქტს,
//  მეორე GET /products/:id რომელიც აბრუნებს ერთ პროდუქტს 
// (ჩაატარეთ შემოწმება მოიძიება თუ არა კონკრეტული პროდუქტი), 
// მესამე DELETE /products/:id რომელიც წაშლის მასივიდან პროდუქტს 
// (სანამწ აშლით შეამოწმეთ არსებობს თუ არა პროდუქტი და შემდეგ წაშალეთ)


