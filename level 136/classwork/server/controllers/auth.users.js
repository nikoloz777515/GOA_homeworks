const {readFile,
    writeFile} = require('../utils/file')

  const register = (req,res) =>{
    const {username,password,email} = req.body

        if (!username || !email || !password) {
    return res.status(400).json({
      message: "All fields are required"
    })
  }
  const users = readFile()

  const usereXists = users.find(u => u.email === email)
  if(usereXists){
     return res.status(404).json({
      message: "User already exists"
    })
  }
   const newUser = {
    id: Date.now(),
    username,
    email,
    password
  }
  
  users.push(newUser)
  writeFile(users)
  
  res.status(201).json({
    message: "User registered successfully"
  })

  }
  module.exports = {register}