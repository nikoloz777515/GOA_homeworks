const express = require('express')

const app2 = express()
app2.use(express.json())


const users = [
  { id: 1, username: 'nika', password: '1234', email: 'nika@gmail.com' },
  { id: 2, username: 'luka', password: '1111', email: 'luka@gmail.com' }
]

app2.post('/users/register',(req,res)=>{
  const {username,email,password} = req.body

    if (!username || !password || !email) {
    return res.status(404).json({
      message: 'username password and email are required'
    })
  }
  const userExist = users.find(u => u.username === username)
  if(userExist){
    return res.status(400).json({ message: 'User already exists' })
  }
  const neWuser = {
    id: users.length +1,
    username,
    email,
    password
  }
  users.push(neWuser)
  res.status(201).json(neWuser)
})

app2.post('/users/login',(req,res)=>{
  const {username,password} = req.body

    const user = users.find(
    u => u.username === username && u.password === password
  )

  if(!user){
   return res.status(404).json({
      message:'wrong info'
    })
  }
  res.json({
    message: 'login sucesfully'
  })
})

app2.get('/users',(req,res)=>{
  res.status(200).json(users)
})

app2.patch('/users/:id',(req,res)=>{
  const id  = Number(req.params.id)
   const { username, password, email } = req.body

  const user = users.find(u => u.id === id)
  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

   if (username) user.username = username
  if (password) user.password = password
  if (email) user.email = email

  res.json(user)
})

app2.delete('/users/:id',(req,res)=>{
   const id = Number(req.params.id)
  const index = users.findIndex(u => u.id === id)

    if (index === -1) {
    return res.status(404).json({ message: 'User not found' })
  }

  users.splice(index, 1)
  res.json({ message: 'User deleted successfully' })
})

app2.listen(3000,()=>{
  console.log('server is listen on port 3000')
})
// 3) შექმენით CRUD ოპერაცია მთლიანად user ზე, უნდა ხდებოდეს მომხმარებლის რეგისტრაცია, ავტორიზაცია, ყველა მომხმარებლის ნახვა, ერთი მომხმარებლის ნახვა ID, მომხმარებლის წაშლა და განახლება. GET, POST, DELETE, PATCH