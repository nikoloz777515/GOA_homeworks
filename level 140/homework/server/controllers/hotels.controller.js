const {readFile,writeFile} = require('../utils/heper')

const createBooking = (req,res) =>{
  const bookings = readFile('database/booking.json')
    const booking ={
      id: Date.now(),
      ...req.body
    }
    bookings.push(booking)
    writeFile('database/booking.json',bookings)
    res.status(200).json({
      message: 'booking created',booking
    })
}

const getBooking =(req,res) =>{
  const booking = readFile('database/booking.json')
  res.status(200).json(booking)
}