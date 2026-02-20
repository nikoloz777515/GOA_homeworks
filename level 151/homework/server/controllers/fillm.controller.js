const Film = require('../model/fillms.model')

exports.createFilm = async (req,res) =>{
  try{
    const film = await Film.create(req.body)
    res.status(201).json({
      message: 'product created sucesfully'
    })
  }catch(err){
    console.log(err)
  }
}

exports.getAllFilm = async (req,res)=>{
  try{
    const film = await Film.find()
    res.status(201).json(Film)
  }catch(err){
    console.log(err)
  }
}

