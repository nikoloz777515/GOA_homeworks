const mongoose = require('mongoose')

const studentsSchema =  new mongoose.Schema({
    fullname:{
      type: String,
      required: true
    },
    email:{
      type: String,
      required: true
    },
    group:{
      type: mongoose.Types.ObjectId,
      ref: "Group "
    },
    password:{
      type: String,
      required: true
    },
    github:{
      type: String,
      required: true
    },
    facebook:{
      type: String,
      required: true
    },
    level:{
      type: Number,
      default: 0 
    },
    xp:{
      type: Number,
      default: 0 
    }
})


const Students = mongoose.model('Students',studentsSchema)


module.exports = Students


