const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.sendVerificationCode = async function () {
  const code = Math.floor(1000 + Math.random() * 9000);

  this.verificationCode = code;
  await this.save();

  console.log(`Verification code for ${this.email}: ${code}`);
};

userSchema.methods.comparePassword = async function (candidate) {
  return bcrypt.compare(candidate, this.password);
};
const User = mongoose.model('user',userSchema)
module.exports =  User