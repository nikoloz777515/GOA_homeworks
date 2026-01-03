const express = require('express')
const router = express.Router()

let users = [
  { id: 1, name: 'Nika', age: 22 },
  { id: 2, name: 'Mari', age: 25 },
  { id: 3, name: 'Gio', age: 30 }
]



router.post('/',(req,res)=>{
     const { name, age } = req.query

     const neWuser ={
      id: users.length +1,
      name,
      age: Number(age)
     }

      users.push(neWuser)
  res.status(201).json(neWuser)
})

router.get('/',(req,res)=>{
  res.status(200).json(users)
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  const user = users.find(u => u.id === id)

  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  res.json(user)
})

router.patch('/:id', (req, res) => {
  const id = Number(req.params.id)
  const user = users.find(u => u.id === id)

  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  const { name, age } = req.query

  if (name) user.name = name
  if (age) user.age = Number(age)

  res.json(user)
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  users = users.filter(u => u.id !== id)

  res.json({ message: 'User deleted sucessfully' })
})

module.exports = router