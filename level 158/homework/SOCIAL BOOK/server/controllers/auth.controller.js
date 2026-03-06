const Auth =  require('../models/auth.model')
const AppError = require('../utils/AppError')
const catchAsync = require('../utils/catchAsync')

const signUp = catchAsync(async(req,res,next)=>{
  const {fullname,email,password} = req.body 

if (!fullname || !email || !password) {
  return next(new AppError("Fullname email and password are required", 400))
}
 const existingUser = await Auth.findOne({ email })
  if (existingUser) {
    return next(new AppError("Email is already in use", 400))
  }

  const newUser = await Auth.create({
    fullname,
    email,
    password
  })

    res.status(201).json({
    status: "success",
    message: "User registered successfully",
    data: newUser
  })
})

const login = catchAsync(async(req,res,next)=>{
  const { email, password } = req.body;

  if(!password || !email){
    return next(new AppError("email and password is required",400))
  }

  const user = await Auth.findOne({email})

    if (!user) {
    return next(new AppError("Incorrect email or password", 401));
  }

  const isMatch = await user.comparePassword(password)
  if(!isMatch){
    return next(new AppError("user not exists",400))
  }
  user.password = undefined
  res.status(200).json({
      message:'Login sucesfull',user
    })
})

const verifyEmail = catchAsync(async(req,res)=>{
  const {code} = req.body

  if(!code){
    return next(new AppError("verification code is required",400))
  }

  const user = await Auth.findOne({verfricationCode: code})

  if(!user){
    return next(new AppError("invalid verification code"))
  }
  user.ifVerified = true
  user.verfricationCode = undefined 

  await user.save()

  res.json({
    message: "email verified sucesfully"
  })
})

module.exports ={ signUp,login,verifyEmail}