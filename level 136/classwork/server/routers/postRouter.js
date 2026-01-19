const express = require("express");
const {
  createPost,
  getPosts,
  getUserPosts
} = require("../controllers/post.controller");

const router = express.Router();

router.post("/", createPost);
router.get("/", getPosts);
router.get("/user/:userId", getUserPosts);

module.exports = router;
