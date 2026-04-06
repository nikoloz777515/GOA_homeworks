const http = require("http");
const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(cors());

app.get("/", (req, res) => {
  res.send("Socket.io + Express server is running");
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("chat", (msg) => {
    console.log("Message:", msg);

    io.emit("chat", msg); // ყველას უგზავნის მესიჯს
  });

  socket.on("disconnect", (reason) => {
    console.log(`User disconnected: ${socket.id} (${reason})`);
  });
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

// 1) გამოიყენეთ socket.io სერვერზე და socket.io-client ვებსაიტის მახრეს, შექმენით მარტივი ჩათის ფუნქცია, გახსენით ოპრი ბრაუზერი და თქვენს თავთან დაამყარეთ მიმოწერა