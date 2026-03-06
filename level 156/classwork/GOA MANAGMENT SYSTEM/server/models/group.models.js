const mongoose = require('mongoose')

const groupSchema =  new mongoose.Schema({
  number:{
    type: Number,
    required: true
  },
  type:{
    type: String,
    enum:["Web Development", "Data Scientist", "Cybersecurity","Game Development"],
    required: true,
    default: "Web Development"
  },
  mentor:{
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true
  }
})


const Group = mongoose.model('Group',groupSchema)


module.exports = Group









// 1) შექმენით ჯგუფის, სტუდენტების და user მოდელები