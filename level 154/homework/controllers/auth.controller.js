const User = require('../models/auth.model');

const signup = async (req,res) =>{
  try{
    const {name,email,password} = req.body; 

    if(!name || !email || !password){
      return res.status(404).json({
        message: 'All Field are required!'
      })
    }

    const existingUser = await User.findOne({email})

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      })
    }

    const newUser =await User.create({
      name,
      email,
      password
    })
      await newUser.sendVerificationCode();

    res.status(201).json({
      message: 'New user created sucesfully please verify your email',
      user: newUser
    })
  }catch(err){
    console.log(err)
  }
}

const login = async (req,res) =>{
  try{
    const {email,password} = req.body 

    if(!email || !password){
      return res.json(404).json({
        message: 'all fields are required'
      })
    }
    const user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({ message: "Email or password is incorrect" });
        }
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
      return res.status(400).json({
        message: 'email or password is incorrect'
      })
    }
    res.status(200).json({
      message:'Login sucesfull',user
    })
  }catch(err){
    console.log(err)
    res.json({
      message: 'Login Failed'
    })
  }
}

const verifyEmail = async (req,res)=>{
    try{
      const {code} = req.body;

      if(!code){
        return res.status(404).json({
          message: 'verification code is required'
        })
      }

      const user = await User.findOne({verificationCode: code})

        if (!user) {
      return res.status(400).json({
        message: "Invalid verification code"
      })
    }
      user.ifVerified = true
      user.verificationCode = undefined

       await user.save()

      res.status(200).json({
      message: "Email verified successfully"
    })
    }catch(err){
      console.log(err)
    }
}

module.exports = {signup,login,verifyEmail}



