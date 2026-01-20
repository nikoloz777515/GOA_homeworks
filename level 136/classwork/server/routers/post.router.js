const express = require("express");
const {
  createPost,
  getPosts,
  deletePost,
  updaTePost
} = require("../controllers/post.controller"); // შენს controller–დან

const router = express.Router();

router.post("/", createPost);
router.get("/", getPosts);
router.delete("/:id", deletePost);
router.put("/:id", updaTePost);

module.exports = router; // აუცილებლად router
