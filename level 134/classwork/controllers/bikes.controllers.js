const bikes = require('../data/bikes')

const getallBike =(req,res)=>{
  res.status(200).json(bikes)
}

const getBikebyId = (req,res) =>{
  const id = Number(req.params.id)

  const bike = bikes.find(b => b.id === id)

  if(!bike){
    return res.status(404).json({
      message: 'wrong bike'
    })
  }
  res.status(200).json(bike)
}


const createBike = (req,res) =>{
  const {brand,type,price} = req.body

   if(!brand || !type || !price){
    return res.status(404).json({
      message: 'brand type and price required'
    })
  }

  const neWbike = {
    id: bikes.length +1,
    brand,
    type,
    price: Number(price)
  }

  bikes.push(neWbike)

  res.status(201).json(neWbike)
}

const updaTeBike =(req,res)=>{
  id = Number(req.params.id)

  const bike = bikes.find( b => b.id === id)
    if (!bike) {
    return res.status(404).json({ message: "Bike not found" })
  }
    bike.brand = req.body.brand ?? bike.brand
  bike.type = req.body.type ?? bike.type
  bike.price = req.body.price ?? bike.price

  res.json(bike)
}

const deleTebike = (req,res) =>{
   const id = Number(req.params.id)
  const index = bikes.findIndex(b => b.id === id)

  if (index === -1) {
    return res.status(404).json({ message: "Bike not found" })
  }

  bikes.splice(index,1)
    res.json({ message: "Bike deleted" })
}

module.exports = {
  getallBike,
  getBikebyId,
  createBike,
  updaTeBike,
  deleTebike
}


// 2) შექმენით პროექტი სადაც შეგეძლებათ bikes - ების წამოღება, დამატება წაშლა და განახლება, მოცემული კოდები კი გადაანაწილეთ შესაბამის folder - ებში, ახსენით თქვენი სიტყევბით თუ რა არის controller, router, რა დადებითი მხარეები გააჩნიათ მათ, გამოიყენეთ შესაბამისი middleware ფუნქციები, მოცემული პროექტის მუშაობა კი გატესტეთ