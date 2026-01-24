const express = require("express");
const { createPost, getPosts, deletePost, updatePost } = require("../controllers/post.controller");

const router = express.Router();

router.param("postId", (req, res, next, postId) => {
  const posts = require("../utils/file").readFile(require("path").join(__dirname, "../database/posts.json"));
  const post = posts.find(p => p.id === Number(postId));
  if (!post) return next({ statusCode: 404, message: "Post not found" });
  req.post = post;
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
