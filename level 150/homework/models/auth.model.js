const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

userSchema.pre('save',async function(){
    if(!this.isModified('password')) return 
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.comparePassword = async function (candidate){
  return await bcrypt.compare(candidate,this.password)
}

const User = mongoose.model('user',userSchema)
module.exports = User



// 1) გამოიყენეთ user schema_ზე pre მოვლენის მსმენელი რომელიც ჰეშირებას გაუკეთებს პაროლს მხოლოდ იმ შემთხვევაში თუ ის არის შეცვლილი თუ არ არის გაითიშება

// 2) შექმენით მეთოდი სქემაზე სახელად  comparePassword რომელსაც გადაეცემა კანდიდატი პაროლი და ამოწმებს უდრის თუ არა შენახულ ჰეშირებულ პაროლს

// საბოლოოდ გამოიყენეთ და გატესტეთ შექმენილი მეთოდი/შუამავალი ფუნქციები POSTMAN გამოყენებით