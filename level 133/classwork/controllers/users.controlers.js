const express = require('express')
const app = express()
app.use(express.json())

const posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the first post content"
  },
  {
    id: 2,
    title: "Learning JavaScript",
    content: "JavaScript is very popular and powerful"
  },
  {
    id: 3,
    title: "Express Basics",
    content: "Express.js makes backend development easier"
  },
  {
    id: 4,
    title: "Middleware Explained",
    content: "Middleware works between request and response"
  }
]

app.get('/posts',(req,res)=>{
  res.status(200).json(posts)
})

app.post('/posts',(req,res)=>{
  const {title,content} = req.query

  const neWpost ={
    id: posts.length +1,
    title,
    content
  }
  posts.push(neWpost)
  res.status(201).json(neWpost)
})

app.get('/posts/:id',(req,res)=>{
  const id = Number(req.params.id)

  const post = posts.find(p => p.id === id)

  if(!post){
   return  res.status(404).json({
      message: 'wrong post'
    })
  }
  res.status(200).json(post)
})

app.delete('/posts/:id',(req,res)=>{
  const id = Number(req.params.id)
  const index = posts.findIndex(i => i.id === id)

    if (index === -1) {
    return res.status(404).json({ message: 'wrong post' })
  }

  posts.splice(index, 1)
  res.status(200).json({ message: 'post deleted' })
})

app.put('/posts/:id',(req,res)=>{
  const id = Number(req.params.id)
  const {title,content} = req.query

  const post = posts.find(p => p.id === id)
  if (!post) {
    return res.status(404).json({ message: 'wrong post' })
  }

  if(title) post.title = title
  if(content) post.content = content
  
  res.status(200).json(post)

})
