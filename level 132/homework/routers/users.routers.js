const express = require('express')
const router = express.Router()


const users = require('../data/users.js')


router.get('/',(req,res)=>{
  res.json(users)
})

router.get('/:id',(req,res)=>{
  const id = Number(req.params.id)

  const user = users.find(u => u.id === id)

  if(!user){
    return res.status(404).json({
      message:'wrong id'
    })
  }
  res.status(200).json(user)
})

router.post('/',(req,res)=>{
  const {name,age} = req.body

  const newUser = {
    id: users.length +1,
    name,
    age: Number(age)
  }

  users.push(newUser)
  res.status(201).json(newUser)
})

router.put('/:id',(req,res)=>{
  const id = Number(req.params.id)
  const user = users.find(u => u.id === id)

    if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  user.name = req.body.name  ?? user.name
  user.age = req.body.age ?? user.age
   res.json(user)
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  const user = users.find(u => u.id === id)

  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  users = users.filter(u => u.id !== id)
  res.json({ message: 'User deleted' })
})
module.exports = router