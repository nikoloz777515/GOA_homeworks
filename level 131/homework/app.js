const express = require('express')
const app =  express()
app.use(express.json())


let orders = [
   { id: 1, userId: 1, productId: 101 },
  { id: 2, userId: 2, productId: 102 }
]
app.post('/orders',(req,res)=>{
  const userId  = Number(req.query.id)
  const productId = Number(req.query.productId)

   if (!userId  || !productId ) {
    return res.status(400).json({
      message: 'userId და productId აუცილებელია query-ში'
    })
  }

  const Neworder ={
    id: orders.length +1,
    userId ,
    productId,
  }

  orders.push(Neworder)

    res.status(201).json({
    message: 'Order წარმატებით დაემატა',
    order: Neworder
  })
})

app.get('/orders',(req,res)=>{
  res.status(200).json(orders)
})

app.get('/orders/user/:id',(req,res)=>{
  const id = Number(req.params.id)

  const userOrder = orders.filter(o => o.userId === id)


  if(userOrder.length === 0){
    return res.status(404).json({
      message: 'ამ მომხმარებელს order არ აქვს'
    })
  }

  res.status(200).json(userOrder)
  }
)

app.delete('/orders/:id',(req,res)=>{
  const id = Number(req.params.id)
  const index = orders.findIndex(i => i.id == id)

   if(index === -1){
        return res.status(404).json({
          message:'wrong order'
        })
  }
  const deleTeorder = orders.splice(index, 1)

  res.status(200).json({
    message:'order deleted sucesfully'
  })

})


app.listen(3000,()=>{
  console.log('server is listen on port 3000')
})


// 1) ხელახლა გადახედეთ resource - ებში მოცემულ ლინკებს, საკლასო დავალებაში მოცემული მესამე დავალება კი დაასრულეთ

// 2) შექმენით orders მასივი, გააგზავნეთ post მოთხოვნა და მიიღეთ id, productId (product - ის id - ს განსაზღვრათ თქვენით და დაამატებთ order - ის ობიექტშიც) query - დან, შეამოწმეთ შემოიტანა თუ არა მომხმარებელმა query - ში ორივე მნიშვნელობა, თუ არა გამოიტანეთ შესაბამისი error - ის message - ი, სხვა შემთხვევაში კი orders მასივში დაამატეთ ახალი order, დაამატეთ get მოთხოვნაც რომელიც user id - ის დახმარებით წამოიღებს მის order - ს, დაამატეთ get '/orders' მოთხოვნაც რომელიც ყველა მომხმარებლის order - ს წამოიღებს, დაამატეთ delete მოთხოვნაც რომელიც მომხმარებელის order
//  - ს წაშლის მისი id - ის მიხედვით

