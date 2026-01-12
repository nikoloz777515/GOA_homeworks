const phones = require('../data/phones')

const getAllphone = (req,res) =>{
  res.status(200).json(phones)
}

const getPhonebyId = (req,res) =>{
  const id = Number(req.params.id)

  const phone = phones.find(p => p.id === id)

  if(!phone){
    res.status(404).json({
      message:'wrong id'
    })
  }

  res.status(200).json(phone)
}

const createPhone = (req,res) =>{
  const {brand,model,price} = req.body 

  const newPhone = {
    id: phones.length +1,
    brand,
    model,
    price: Number(price)
  }

  phones.push(newPhone)

  res.status(201).json(newPhone)
}

const updatePhone = (req,res) =>{
  const id = Number(req.params.id)

  const phone = phones.find(p => p.id === id)
    if (!phone) {
    return res.status(404).json({ message: 'phone not found' })
  }
    const {brand,model,price} = req.body

    phone.brand = brand
    phone.model = model
    phone.price = price
  res.status(200).json(phone)
}

const deletePhone = (req,res) =>{
  const id = Number(req.params.id)
  const index = phones.findIndex(i => i.id === id)

  if(index === -1){
    return res.status(404).json({
      message:'wrong id'
    })
  }

  phones.splice(index,1)
  res.status(200).json({
    message:'phone deleted sucesfully'
  })
}

module.exports ={
  getAllphone,
  getPhonebyId,
  createPhone,
  updatePhone,
  deletePhone
}
// 3) შექმენით პროექტი, სადაც შეგეძლებათ ახალი ტელეფონების დამატება, წაშლა, განახლება და წამოღება (როგორც id - ით ისე id - ის გარეშე), მოცემული კოდები გადაანაწილეთ შესაბამის folder, file - ებში, აგრეთვე შექმენით თქვენივე middleware ფუნქციები მაგალითად (body checker რომელიც შეამოწმებს არის თუ არა body - ში ტელეფონისთვის აუცილებელი კუთვნილებები მოცემული) გამოიყენეთ ისინი, შეგიძლიათ გამოიყენოთ ისეთი middleware ფუნქციები რომლებიც მოცემული დავალებისთვის გჭირდებათ
