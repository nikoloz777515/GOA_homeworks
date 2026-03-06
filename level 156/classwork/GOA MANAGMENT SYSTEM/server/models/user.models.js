const mongoose = require('mongoose')

const userSchema =  new mongoose.Schema({
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
         facebook:{
           type: String,
           required: true
         },
         role:{
          type: String,
          enum: ["admin","mentor","leader"],
         default: "mentor"
         }
})


const Users = mongoose.model('Users',userSchema)


module.exports = Users


// 1) შექმენით ჯგუფის, სტუდენტების და user მოდელები