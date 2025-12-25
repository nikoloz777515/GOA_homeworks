const express = require('express')

const app = express()

app.use(express.json()) 

const animals = [
  { id: 1, name: "Dog", type: "Mammal" },
  { id: 2, name: "Cat", type: "Mammal" },
  { id: 3, name: "Cow", type: "Mammal"},
  { id: 4, name: "Horse", type: "Mammal" },
  { id: 5, name: "Sheep", type: "Mammal" },
  { id: 6, name: "Goat", type: "Mammal"},
  { id: 7, name: "Lion", type: "Mammal"},
  { id: 8, name: "Tiger", type: "Mammal" },
  { id: 9, name: "Elephant", type: "Mammal" },
  { id: 10, name: "Monkey", type: "Mammal" },
  { id: 11, name: "Duck", type: "Bird",},
  { id: 12, name: "Chicken", type: "Bird" },
  { id: 13, name: "Snake", type: "Reptile" },
  { id: 14, name: "Frog", type: "Amphibian" },
  { id: 15, name: "Fish", type: "Aquatic",}
];

app.get('/animals',(req,res)=>{
  res.status(200).json(animals)
})


app.get('/animals/:id',(req,res)=>{
    const id = Number(req.params.id)

    const animal = animals.find(a => a.id === id)

    if(!animal){
      res.status(404).json({
        message: 'something went wrong'
      })
    }
    res.status(200).json(animal)
})

app.post('/animals',(req,res)=>{
  const {name,type,} = req.body

  if(! name || !type ){
    res.status(404).json({
      message:'all fields are required'
    })
  }
   const newAnimal = {
    id: animals.length + 1,
    name,
    type,
  }
  animals.push(newAnimal)

  
  res.status(201).json(newAnimal)
})

app.delete('/animals/:id',(req,res)=>{
    const id = Number(req.params.id) 

    const index = animals.findIndex(a => a.id === id)

      if (index === -1) {
    return res.status(404).json({
      message: 'Animal not found'
    })
  }

  
  const deletedAnimal = animals.splice(index, 1)

  res.status(200).json({
    message: 'Animal deleted succesfuly',
    deletedAnimal: deletedAnimal[0]
  })
})

app.patch('/animals/:id', (req, res) => {
  const id = Number(req.params.id)
  const animal = animals.find(a => a.id === id)

  if (!animal) {
    return res.status(404).json({
      message: 'Animal not found'
    })
  }

  const { name, type, sound } = req.body

  if (name) animal.name = name
  if (type) animal.type = type

  res.status(200).json({
    message: 'Animal updated successfully',
    animal
  })
})



app.listen(3000,()=>{
  console.log('server is listen on port 3000')
})
// 1) შექმენით მასივი სადაც გექნებათ 15 ცხოველის ობიექტი მოცემული

// 2) მოუსმინეთ GET მოთხოვნას '/animals' ბილიკზე, რომელიც დააბრუნებს მთლიან მასივს

// 3) მოუსმინეთ GET მოთხოვნას '/animals/:id' ბილკზე, რომელიც id - ის მიხედვით დააბრუნებს შესაბამისი ცხოველის ობიექტს

// 4) მოუსმინეთ POST მოთხოვნას 'animals' მოცემული ბილკზე, რომელიც თქვენს მიერ შექმნილ ობიექტს არსებულ მასივში ჩაამატებს

// 5) მოუსმნიეთ DELETE მოთხოვნას 'animals/:id' მოცემულ ბილიკზე, რომელიც მოცემული id - ით კონკრეტულ ცხოველის ობიექტს მასივიდან წაშლის

// BONUS
// 6) მოუსმინეთ PATCH - მოთხოვნას 'animals/:id' მოცემულ ბილკზე რომელიც კონკრეტული ცხოველის ობიექტის კუთვნილებებს განაახლებს