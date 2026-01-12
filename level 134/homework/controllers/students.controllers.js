const students = require('../data/students')


const getAllstudent = (req,res) =>{
  const {grade} = req.query

  if(grade){
    const filtered = students.filter(s => s.grade === Number(grade))
      return res.status(200).json(filtered)
  }
  res.status(200).json(students)
}

const getStudentbyID = (req,res) =>{
  const id = Number(req.params.id)
  const student = students.find(s => s.id === id)

  if(!student){
    res.status(404).json({
      message: 'wrong id'
    })
  }
  res.status(200).json(student)
}

const