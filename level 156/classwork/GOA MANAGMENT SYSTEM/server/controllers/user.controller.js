const Users = require('../models/user.models')


const createUsers = async (req,res) =>{
  try{
    const {fullname,email,group,password,facebook,role} = req.body

    const newUser = await Users.create({
      fullname,
      email,
      group,
      password,
      facebook,
      role
    })

    res.status(201).json({
      message: "user created sucesfully",
      user: newUser 
    })
  }catch(err){
    console.log(err)
  }
}

const getAllusers = async (req,res) =>{
  try{
    const users = await Users.find()
  res.status(201).json({
      status: "succecess",
      message: "all students is returned",
      data: users
  })
}catch(err){
  console.log(err)
}
}

const updateUsers = async (req,res) =>{
  try{
      const {id} = req.params
    

      const updatedUsers = await Users.findByIdAndUpdate(id,
      req.body,
      {
        new: true,
        runValidators: true
      })

       if (!updatedUsers) {
      return res.status(404).json({ status: "fail", message: "user not found" });
    }
    res.status(200).json({
      status: "suceccess",
      message: "user updated sucesfully"
    })
  }catch(err){
    console.log(err)
  }
}
const deleteUsers = async (req,res) =>{
  try{
    const {id} = req.params 
    const deleted = await Users.findByIdAndDelete(id)

    if (!deleted) {
      return res.status(404).json({ status: "fail", message: "User not found" });
    }
    res.status(200).json({
      message: "user deleted sucesfully"
    })
  }catch(err){
    console.log(err)
  }
}

module.exports = {createUsers,getAllusers,updateUsers,deleteUsers}