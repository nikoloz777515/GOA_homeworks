const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const sendMail = require('../utils/email')

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
  required: [true, "password field is required"],
  minlength: [6, "password must be at least 6 characters"]
},
  ifVerified:{
    type: Boolean,
    default: false
  },
  verificationCode:{
    type: Number

  }
})

userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;

  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.sendVerificationCode = async function(){
  const code =  Math.floor(1000 + Math.random() * 9000);
  this.verificationCode = code
  await this.save()
  sendMail(this.email,'Email verification code',`Your verification Code is${code}`)
  
}

 

userSchema.methods.comparePassword = async function (candidate) {
  return bcrypt.compare(candidate, this.password);
};
const User = mongoose.model('user',userSchema)
module.exports =  User