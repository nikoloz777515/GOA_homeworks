const posts = require('../data/posts')

const getAllpost = (req,res) =>{
  res.status(200).json(posts)
}

const getPostbyId = (req,res)=>{
  const id = Number(req.params.id)

  const post = posts.find(p => p.id === id)

  if(!id){
    return res.status(404).json({
      message:'wrong post id'
    })
  }
  res.status(200).json(post)
}

const createPost = (req,res) =>{
  const {title,content} = req.body

  if(!title || !content){
    return res.status(404).json({
      message: 'title and content are required'
    })
  }

  const neWpost = {
    id: posts.length +1,
    title,
    content
  }

  posts.push(neWpost)

  res.status(201).json(neWpost)
}

const updatePost = (req,res) =>{
  const id = Number(req.params.id)

  const post = posts.find(p => p.id === id)

  if(!post){
    return res.status(404).json({
      message: 'wrong post'
    })
  }

  post.title = req.body.title ?? post.title
  post.content = req.body.content ?? post.content

  res.status(200).json(post)
}

const deletePost = (req,res) =>{
  const id = Number(req.params.id)
  const index = posts.findIndex(i => i.id === id)

    if (index === -1) {
    return res.status(404).json({
      message: 'post not found'
    })
  }

  posts.splice(index,1)
   res.status(200).json({
    message: 'post deleted',
    deletePost
  })
}

module.exports ={
  getAllpost,
  getPostbyId,
  createPost,
  updatePost,
  deletePost
}