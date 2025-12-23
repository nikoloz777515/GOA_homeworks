const express = require('express')
const fs = require('fs')
const path = require('path')
const app2 = express()


app2.get('/users',(req,res)=>{

  const uSersFilePath = path.join(__dirname,'users.json')
  let users = []

  try{
    const data = fs.readFileSync(uSersFilePath,'utf-8')
    users = JSON.parse(data).users
  }catch(err){
      console.log('something is worng',err)
  }
  const {Active} = req.query

   const isActive = Active === 'true';

  const Filtered = users.filter(act => act.Active === isActive)

  res.json(Filtered)


})

app2.listen(3000,()=>{
  console.log('server is listen on port 3000')
})
// 2) შექმენით მასივი და შეინახეთ მასში მომხმარებლების ობიექტები შემდეგი კუთვნილებებით name, surname, age, active ---> true or false, იმ შემთხვევაში თუ მომხმარებელმა query - სახით შემოიტანა ?active=true მაშინ გამოიტანეთ ყველა ის მომხმარებლის ობიექტი რომლის active კუთვნილებაც უდრის true - ს სხვა შემთხვევაში კი პირიქით (გამოიტანეთ ყველა იმ მომხმარებელის ობიექტი რომლის active კუთვნილებაც უდრის false - ს