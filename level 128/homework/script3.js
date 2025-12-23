const express = require('express')
const fs = require('fs')
const app3 = express()
const path = require('path')
app3.use(express.json())


const uSersFilePath = path.join(__dirname,'users.json')
app3.patch('/users/:id',(req,res)=>{
      const {id} = req.params
      let users = []

    try{
       const data = fs.readFileSync(uSersFilePath,'utf-8')
          users = JSON.parse(data).users
    }catch(err){
      console.log('something went wrong')
    }

    
    const userIndex = users.findIndex(u => u.id ===  Number(id))
      if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

     users[userIndex] = { ...users[userIndex], ...req.body };

     try{
        fs.writeFileSync(uSersFilePath,JSON.stringify({users},null,2))
     }catch(err){
      console.log('eror')
     }
     res.json(users[userIndex])
})

app3.listen(3000,()=>{
  console.log('server is listen on port 3000')
})
// BONUS
// 3) მოუსმინეთ PATCH მოთხოვნას '/users/:id' ბილიკზე, თქვენი დავალებაა, რომ მოცემული id - ით წვდომა მოიპოვოთ შესაბამისი მომხმარებლის ობიექტზე და გაანახლოთ რამოდენიმე კუთვნილება, განახლებული მომხმარებლის ობიექტი შეინახოთ ძველი ობიექტის ნაცვლად, გატესტეთ მუშაობა postman - ის გამოყენებით 