const http = require('http')
const express = require('express')
const cors = require('cors')
const {Server} = require('socket.io')


const app = express()

const server = http.createServer(app)
const io = new Server(server,{
  cors:{
    origin: "*"
  }
})

app.use(cors())

app.get('/', (req,res) =>{
    res.send("Socket.io + Express server is runing")
})

io.on('conection', (socket)=>{
    console.log(`user connected to ${socket.id}`)

    socket.on('disconect',(reson)=>{
      console.log(`User disconnected ${socket.id} (${reson})`)
    })
})

server.listen(3000,()=>{
  console.log('server is listen on port 3000')
})



// 1) გამოიყენეთ socket.io სერვერზე და socket.io-client ვებსაიტის მახრეს, შექმენით მარტივი ჩათის ფუნქცია, გახსენით ოპრი ბრაუზერი და თქვენს თავთან დაამყარეთ მიმოწერა