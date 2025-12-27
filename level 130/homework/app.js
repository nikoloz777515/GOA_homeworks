const express = require('express')

const app = express()

app.use(express.json())

const posts = [
  {
    id: 1,
    title: 'First post',
    comments: []
  },
  {
    id: 2,
    title: 'Second post',
    comments: []
  }
]

app.post('/posts/:id/comments',(req,res)=>{
  const id = Number(req.params.id)
  const {text} = req.body


  const post = posts.find(p => p.id === id)

  if(!post){
   return res.status(404).json({
      message:'Wrong post'
    })
  }

  const newComent ={
    id:post.comments.length +1,
    text
  }
  post.comments.push(newComent)

  res.status(201).json(newComent)
})

app.get('/posts/:id/comments',(req,res)=>{
  const id =  Number(req.params.id)

  const post = posts.find(p => p.id === id)

  if(!post){
    return res.status(404).json({
      message:'something wrong'
    })
  }

   res.status(200).json(post.comments)
})

app.get('/posts/:id/comments/:commentId', (req, res) => {
  const postId = Number(req.params.id)
  const commentId = Number(req.params.commentId)

  const post = posts.find(p => p.id === postId)
  if (!post) {
    return res.status(404).json({ message: 'Post not found' })
  }

  const comment = post.comments.find(c => c.id === commentId)
  if (!comment) {
    return res.status(404).json({ message: 'Comment not found' })
  }

  res.json(comment)
})


app.delete('/posts/:id/comments/:commentId',(req,res)=>{
      const postId = Number(req.params.id)
  const commentId = Number(req.params.commentId)

  const post = posts.find(p => p.id === postId)
    if (!post) {
    return res.status(404).json({ message: 'Post not found' })
  }

  const commentIndex = post.comments.findIndex(i => i.id === commentId)

  if(commentIndex === -1){
    return res.status(404).json({
      message: 'comment not found'
    })
  }
  
    post.comments.splice(commentIndex,1)

    res.json({ message: 'Comment deleted successfully' })
})

app.listen(3000,()=>{
  console.log('server is listen on port 3000')
})

// 1) მოუსმინეთ Post მოთხოვნას '/posts/:id/comments' ბილიკზე, თქვენი დავალებაა, რომ id - ის მიხედვით
//  წამოიღოთ post და comments მასივში დაამატოთ ახალი კომენტარი, ამავდროულად მოცემულ comment -
//  ს უნდა მიანიჭოთ id, უნდა შეგეძლოთ კომენტარების როგორც მთლიანად წამოღება ისე id - ის მიხედვით, 
// აგრეთვე კომენტარის წაშლაც

