const express = require('express')
const app2 = express()
app2.use(express.json())

const posts = [
  {
    id: 1,
    title: "First Post",
    author: "Nika",
    content: "This is my first post",
    likes: 10
  },
  {
    id: 2,
    title: "Learning JavaScript",
    author: "Mari",
    content: "JavaScript is awesome",
    likes: 25
  },
  {
    id: 3,
    title: "Express.js Tips",
    author: "Giorgi",
    content: "How to build APIs with Express",
    likes: 18
  }
]



app2.get('/posts',(req,res)=>{
    res.status(200).json(posts)
})

app2.post('/posts',(req,res)=>{
    const { role } = req.query

    if(role !== 'admin'){
         return res.status(403).json({ message: 'Access denied' })
    }

    const NewPost = {
      id: posts.length +1,
      title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    likes: req.body.likes || 0
    }

    posts.push(NewPost)
    res.status(201).json(NewPost)
})

app2.put('/posts/:id',(req,res)=>{
   const { role } = req.query
  const id = Number(req.params.id)


    if (role !== 'admin') {
    return res.status(403).json({ message: 'Access denied' })
  }

  const post = posts.find(p => p.id === id)

  if(!post){
      return res.status(404).json({ message: 'Post not found' })
  }
    post.title = req.body.title ?? post.title
  post.author = req.body.author ?? post.author
  post.content = req.body.content ?? post.content
  post.likes = req.body.likes ?? post.likes

   res.status(200).json(post)
})

app2.delete('/posts/:id',(req,res)=>{
    const { role } = req.query
  const id = Number(req.params.id)


    if (role !== 'admin') {
    return res.status(403).json({ message: 'Access denied' })
  }

  const index = posts.findIndex(p => p.id === id)

  if(index === -1){
     return res.status(404).json({ message: 'Post not found' })
  }

  const deletedPosts = posts.splice(index,1)

  res.status(200).json(deletedPosts)
})

app2.listen(3000,()=>{
  console.log('server is listen on port 3000')
})

// 3) შექმენით CRUD ოპერაცია posts - ებზე, query - ში არსებული role - ის მნიშვნელობა კი შეამოწმეთ, თუ admin - ია მაშინ უნდა შეგეძლოთ post - ის წაშლა და დამატება, სხვა შემთხვევაში კი უბრალოდ წამოღება