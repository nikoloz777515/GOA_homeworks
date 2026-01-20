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


const fs = require('fs')


const deletePost = (req, res) => {
  const { id } = req.params;

  const posts = readFile(POSTS_FILE);
  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  const filtered = posts.filter(p => p.id !== Number(id));

  fs.writeFileSync(
    POSTS_FILE,
    JSON.stringify(filtered, null, 2)
  );

  res.json({ message: "Post deleted" });
};


const updaTePost=(req,res) =>{
    const { id } = req.params;
  const { title, content, userId } = req.body;

  const posts = readFile(POSTS_FILE)

  const index = posts.findIndex(p => p.id === Number(id))

    if (index === -1) return res.status(404).json({ message: "Post not found" })

        if (posts[index].userId !== userId) {
    return res.status(403).json({ message: "Not allowed" });
  }

  posts[index].title = title
  posts[index].content = content

  fs.writeFileSync(POSTS_FILE,JSON.stringify(posts,null,2))
  res.json(posts[index])

}

module.exports = { createPost, getPosts, getUserPosts, deletePost,
  updaTePost };
