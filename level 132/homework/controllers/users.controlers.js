const users = require('../data/users.js')
const getAllUser = (req,res)=>{
  res.status(200).json(users)
}

const getUserbyId = (req,res)=>{
  const id = Number(req.params.id)
  const user = users.find(u => u.id === id)
   if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  res.status(200).json(user)
}

const createUser =(req,res)=>{
  const {name,age} = req.body

    if (!name || !age) {
    return res.status(400).json({ message: 'Name and age are required' })
  }

  const neWuser ={
    id: users.length +1,
    name,
    age:Number(age)
  }

  users.push(neWuser)
  res.status(201).json(neWuser)
}


const updaTeuser = (req,res) =>{
  const id = Number(req.params.id)

  const user = users.find(u => u.id === id)

  if(!user){
    return res.status(404).json({ message: 'User not found' })
  }

  user.name = req.body.name ?? user.name
  user.age = req.body.age ?? user.age

   res.status(200).json(user)
}


const deleteUser = (req,res) =>{
    const id = Number(req.params.id)
    const index = users.findIndex(i => i.id === id)

    
   if (index === -1) {
    return res.status(404).json({
      message: 'User not found'
    })
  }

  const deleted = users.splice(index,1)
    res.status(200).json({ message: 'User deleted successfully' })
}

module.exports ={
  getAllUser,
  getUserbyId,
  createUser,
  updaTeuser,
  deleteUser
}

