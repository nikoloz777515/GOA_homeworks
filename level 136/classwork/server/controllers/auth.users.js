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

  const login = (req,res) =>{
    const {email,password} = req.body

    if(!email || !password){
      return res.status(409).json({
        message:'all fields are required'
      })
    }
    const users = readFile()
    const user = users.find(u => u.email === email && u.password === password)

      if (!user) {
    return res.status(401).json({ message: "Invalid credentials" })
  }
    res.status(200).json({ message: "Login successful", user });

  }
  module.exports = {register,login}