const path = require("path");
const { readFile, writeFile } = require("../utils/file");

const POSTS_FILE = path.join(__dirname, "../database/posts.json");

const createPost = (req, res) => {
  const { title, content, userId } = req.body;

  if (!title || !content || !userId) {
    return res.status(400).json({ message: "All fields required" });
  }

  const post = {
    id: Date.now(),
    title,
    content,
    userId
  };

  writeFile(post, POSTS_FILE);
  res.status(201).json(post);
};

const getPosts = (req, res) => {
  const posts = readFile(POSTS_FILE);
  res.json(posts);
};

const getUserPosts = (req, res) => {
  const userId = Number(req.params.userId);
  const posts = readFile(POSTS_FILE);
  const userPosts = posts.filter(p => p.userId === userId);
  res.json(userPosts);
};

module.exports = { createPost, getPosts, getUserPosts };
