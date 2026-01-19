const express = require("express");
const cors = require("cors");
const authRouter = require("./routers/users.roters");
const postRouter = require("./routers/postRouter");

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/auth", authRouter);
app.use("/api/post", postRouter);

app.listen(3000, () => console.log("Server listening on port 3000"));
