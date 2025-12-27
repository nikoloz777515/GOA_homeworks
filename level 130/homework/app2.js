const express = require('express')

const app2 = express()

app2.use(express.json())


let cart = []

app2.get('/cart',(req,res)=>{
    res.status(200).json(cart)
})

app2.get('/cart/:id',(req,res)=>{
  const id = Number(req.params.id)
  const item = cart.find(i => i.id === id)

   if (!item) {
    return res.status(404).json({ message: 'Item not found' })
  }

  res.json(item)
})

app2.post('/cart',(req,res)=>{
  const { name, price } = req.body

  const neWitem = {
    id: cart.length +1,
    name ,
    price
  }

  cart.push(neWitem)

  res.status(201).json(neWitem)
})

app2.delete('/cart/:id',(req,res)=>{
  const id = Number(req.params.id)
  const index = cart.findIndex(i => i.id === id)

  if (index === -1) {
    return res.status(404).json({ message: 'Item not found' })
  }

  cart.splice(index, 1)
  res.json({ message: 'Item deleted successfully' })
})

app2.listen(3000,()=>{
  console.log('server is listen on port 3000')
})

// 2) შექმენით ბილიკი '/cart', მოუსმინეთ მოთხოვნებს post, get, delete, უნდა შეგეძლოთ cart - შ ახალი item - ის ჩამატება წაშლა და ელემენტების წამოღება (მთლიანად და id - ის მიხედვით)