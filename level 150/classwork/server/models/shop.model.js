const mongoose = require('mongoose')


const productSchema = ({
  name: {
    type: String,
    required: true
  },
  decription:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  quantity:{
    type: Number,
    required: true
  },
  img:{
    type: String,
    required: true
  }
})

const Product = mongoose.model('Product',productSchema)

module.exports = Product



/*
 Schema სქემა
Schema აღწერს დოკუმენტის სტრუქტურას
 რა ველები აქვს
 რა ტიპის მონაცემებია
 სავალდებულოა თუ არა
*/

/* Model მოდელი
 Model არის Schema ზე დაფუძნებული კლასი
 რომლის საშუალებითაც ვაკეთებთ CRUD ოპერაციებს DB-ში
 (find, create, update, delete )
 */

