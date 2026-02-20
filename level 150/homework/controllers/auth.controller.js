const User = require('../models/auth.model')


const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      })
    }

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      })
    }

    const newUser = await User.create({
      name,
      email,
      password
    })

    res.status(201).json({
      message: "User created successfully",
      user: newUser
    })

  } catch (err) {
    console.error(err)
    res.status(500).json({
      message: "Signup failed"
    })
  }
}

const login = async () =>{
  const {email,password} = req.boy 

  const exists = await User.findOne({email})
     if(!exists){
        return res.satstus(400).json({
          message: 'email or password is inccorect'
        })
   }

   if(exists.password !== password){
      return res.status(404).json({
        message: 'password or email is inccorect'
      })
   }
}

module.exports = {signUp,login}