const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "the name field is required"] 
  },
  email:{
    type: String,
    required: [true, "email field is required"],
    unique: true
  },
  password:{
    type: String,
    required: [true, "password fiel is required"],
    minLength: [6, "password lenghth must be 6 characters long"],
    maxLength: [18, "password length maximum is 18 letters"]
    
  }
})

const User = mongoose.model('user',userSchema)
module.exports = User