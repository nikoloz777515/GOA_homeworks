const express = require('express')

const app2 = express()
const randomNumber = Math.floor(Math.random()*100) +1
app2.post('/guess/:number',(req,res)=>{
  const number = Number(req.params.number)

  if(number === randomNumber){
    return res.status(200).json({
      message: 'You sucesfully have guesed the number'
    })
  }
  else if(number < randomNumber){
    return res.json({
      message: 'Your Number is too Low'
    })
  }
   else if(number > randomNumber){
    return res.json({
      message: 'Your Number is too High'
    })
  }
  else{
    res.json({
      message:'try Again'
    })
  }


})

app2.listen(3000,()=>{
  console.log('server is listen on port 3000')
})
// 3) მოუსმინეთ POST მოთხოვნას '/guess/:number' მოცემულ ბილიკზე, შეამოწმეთ თუ მომხმარებლის მიერ შემოტანილი number პარამეტრი უდრის თქვენს random რიცხვს, json - ის ფორმატში დააბრუნეთ პასუხი 'You guessed the random number', თუ თქვენს რიცხვზე ნაკლებია გამოიტანეთ 'Your number is low', თუ მეტია 'Your number is higher than the random number, try again later.'
