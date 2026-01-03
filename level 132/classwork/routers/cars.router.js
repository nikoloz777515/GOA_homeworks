const express = require('express')
const router = express.Router()


let cars = [
  { id: 1, brand: 'BMW', model: 'X5', year: 2020 },
  { id: 2, brand: 'Mercedes', model: 'C Class', year: 2019 },
  { id: 3, brand: 'Audi', model: 'A6', year: 2021 }
]



router.post('/',(req,res)=>{
  const {brand,model,year} = req.query

  const neWcar = {
    id: cars.length +1,
    brand,
    model,
    year:Number(year)
  }
  cars.push(neWcar)
  res.status(201).json(neWcar)
})

router.get('/',(req,res)=>{
  res.status(200).json(cars)
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  const car = cars.find(c => c.id === id)

  if (!car) {
    return res.status(404).json({ 
      message: 'Car not found' 
    })
  }

  res.json(car)
})

router.patch('/:id', (req, res) => {
  const id = Number(req.params.id)
  const car = cars.find(c => c.id === id)

  if (!car) {
    return res.status(404).json({ message: 'Car not found' })
  }

  const { brand, model, year } = req.query

  if (brand) car.brand = brand
  if (model) car.model = model
  if (year) car.year = Number(year)

  res.json(car)
})
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  cars = cars.filter(c => c.id !== id)

  res.json({ message: 'Car deleted successfully' })
})


module.exports = router