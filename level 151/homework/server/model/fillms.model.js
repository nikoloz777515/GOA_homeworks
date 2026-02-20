const mongoose = require('mongoose')


const FilmsSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  img:{
    type: String,
    required: true  

  }
})
const Film = mongoose.model('Film',FilmsSchema)
module.exports = Film