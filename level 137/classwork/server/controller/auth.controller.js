const users = require('../database/users.json')

const login = (req,res) =>{
  const {email,password} = req.body

  if(!email || !password){
    res.status(404).json({
      message: 'email and password are required'
    })
  }
  const user = users.find(u => u.email === email && u.password === password)

  if(!user){
   return res.status(404).json({
      message: 'invalid info'
    })
  }
  res.status(200).json({
    message: 'login sucesfull',
    user:{
      id: user.id,
      email: user.email,
      password: user.email
    }
  })
}


module.exports ={login}