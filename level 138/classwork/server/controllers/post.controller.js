const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, '../data/posts.json');

const CreatePost = (req,res) =>{
  const {title,content,useId} = req.body 

    if (!title || !content || !usId) {
    return res.status(400).json({ message: "Missing fields" });
  }
const posts = JSON.parse(fs.readFileSync(postsPath, "utf-8"));

  const neWpost ={
    id: Date.now(),
    title,
    content,
    useId
    
  }
  posts.push(neWpost)
  fs.writeFileSync(postsPath, JSON.stringify(posts,2))

  res.status(201).json(neWpost)

}

module.exports = {
  CreatePost,
}


// 3) შექმენით post.controller.js რითიც შექმნით ახალ პოსტებს, title, content და useId ამოიღეთ body 
// კუთვნილებიდან, შექმენით ახალი პოსტიო და დაამატეთ posts.json ფაილში.