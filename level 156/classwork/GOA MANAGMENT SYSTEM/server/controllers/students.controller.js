const Students =  require('../models/students.model')

const getAllStudents = async (req,res) =>{
  try{
    const students = await Students.find()

    res.status(201).json({
      status: "succecess",
      length:students.length,
      message: "all students is returned"
    })
  }catch(err){
    console.log(err)
  }
}

const createStudents = async(req,res) =>{
  try{
    const { fullname, email, group, password, github, facebook, level, xp } = req.body

    const newStudent = await Students.create({
      fullname,
      email,
      group,
      password,
      github,
      facebook,
       level,
       xp
    })

     res.status(201).json({
      status: "success",
      data: newStudent
    })
  }catch(err){
    console.log(err)
  }
}

const deleteStudent = async (req,res) =>{
  try{
      const { id } = req.params
    const deleted = await Students.findByIdAndDelete(id)

      if (!deleted) {
      return res.status(404).json({ message: "Student not found" })
    }
     res.status(200).json({
      status: "success",
      message: "Student deleted"
    })
  }catch(err){
    console.log(err)
  }
}

module.exports = {getAllStudents,createStudents,deleteStudent}


// 2) დაამატეთ კონტროლერები (GET, POST, DELETE) შემდეგ დააკავშირეთ როუტერთან და როუტერი დააკავშირეთ მთავარ სერვერთან, სანამ სერვცერი ჩაითვება იქამდე დაუკავშირდით ლოკალურ მონაცემთა ბაზხას mongoose დახმარებით