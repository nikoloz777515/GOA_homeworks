const { readFile, writeFile } = require("../utils/file");
const fs = require("fs");
const path = require("path");

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

  writeFile(post, POSTS_FILE); // helper
  res.status(201).json(post);
};

const getPosts = (req, res) => {
  const posts = readFile(POSTS_FILE);
  const { userId } = req.query;

  if (userId) {
    const userPosts = posts.filter(p => p.userId === Number(userId));
    return res.json(userPosts);
  }
  res.json(posts);
};

const deletePost = (req, res) => {
  const { postId } = req.params; // router-ში: :postId
  const userId = Number(req.query.userId);

  if (!userId) return res.status(400).json({ message: "UserId is required" });

  const posts = readFile(POSTS_FILE);
  const post = posts.find(p => p.id === Number(postId));

  if (!post) return res.status(404).json({ message: "Post not found" });
  if (post.userId !== userId) return res.status(403).json({ message: "Not allowed" });

  const filtered = posts.filter(p => p.id !== Number(postId));
  fs.writeFileSync(POSTS_FILE, JSON.stringify(filtered, null, 2));

  res.json({ message: "Post deleted" });
};

const updatePost = (req, res) => {
  const { postId } = req.params;
  const { title, content, userId } = req.body;

  const posts = readFile(POSTS_FILE);
  const index = posts.findIndex(p => p.id === Number(postId));

  if (index === -1) return res.status(404).json({ message: "Post not found" });
  if (posts[index].userId !== userId) return res.status(403).json({ message: "Not allowed" });

  posts[index].title = title;
  posts[index].content = content;

  fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2));
  res.json(posts[index]);
};

module.exports = { createPost, getPosts, deletePost, updatePost };

  
// 1) გამოიყენეთ param მეთოდი, იმისათის რომ შეამოწმოთ პარამეტრი postId, შეამოწმეთ არსებობს თუ არა კონკრეტული პოსტი თუ არ არსებობს დააბრუნეთ ერორი, თუ არსებობს request ობიექტზე დაამაგრეთ post/posts კუთვნილებები და შემდეგ გამოიყენეთ next, ხოლო იმ კონტროლერებში სადაც მეორდება პოსტის შეამოწმებელკი ლოგიკა წაშალეთ. (ახსენით კომენტარებით რაში გვეხმარება param მეთოდი)