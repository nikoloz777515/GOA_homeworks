const express = require("express");
const path = require("path");
const { readFile } = require("../utils/file");
const {
  createPost,
  getPosts,
  deletePost,
  updatePost
} = require("../controllers/post.controller");

const router = express.Router();
const POSTS_FILE = path.join(__dirname, "../database/posts.json");

router.param("postId", (req, res, next, postId) => {
  const posts = readFile(POSTS_FILE);
  const post = posts.find(p => p.id === Number(postId));

  if (!post) {
    return next({ statusCode: 404, message: "Post not found" });
  }

  req.post = post;
  req.posts = posts;
  next();
});

router.post("/", createPost);
router.get("/", getPosts);
router.delete("/:postId", deletePost);
router.put("/:postId", updatePost);


router.get("/test-error", (req, res, next) => {
  next({ statusCode: 500, message: "This is a test error" });
});

module.exports = router;





/*
  router.param გამოიყენება იმისთვის,
  რომ კონკრეტული პარამეტრი 
  ერთხელ შევამოწმოთ და აღარ გავიმეოროთ ეს ლოგიკა
  ყველა კონტროლერში
*/
