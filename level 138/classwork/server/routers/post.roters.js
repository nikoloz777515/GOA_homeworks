// 4) დაამატეთ როუტერი post.router.js (edited)Saturday, January 17, 2026 7:35 PM


const express = require("express");
const router = express.Router();

const { createPost } = require("../controllers/post.controller");

router.post("/", createPost);

module.exports = router;