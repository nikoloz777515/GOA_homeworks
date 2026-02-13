const users = require('./users.json')

exports.gettAllStudents = (req,res) =>{
    res.status(200).json(users)
}

exports.getStudentById =(req,res) =>{
  const id = Number(req.params.id)

  const user = users.find(u => u.id === id)
  if(!user){
    return res.status(404).json({
      message: "wrong id"
    })
  }
  res.status(200).json(user)
}

exports.createStudent =(req,res) =>{
     const { name, age, grade, active } = req.body;

     if(!name || !age ||!grade){
      return res.status(404).json({
        message: "You have to fill all field"
      })
     }
     const neWstudent = {
      id: Date.now(),
      name,
      age,
      grade,
      active: active ?? true
     }
     users.push(neWstudent)
     res.status(201).json(neWstudent)
}

exports.deleteUser =(req,res) =>{
  const id = Number(req.params.id)
  const index = users.findIndex(i => i.id === id)

  if(index === -1){
    return res.status(404).json({
      message: "something Went Wrong"
    })
  }
  const deleted = users.splice(index,1)
  res.status(200).json(deleted[0])

}