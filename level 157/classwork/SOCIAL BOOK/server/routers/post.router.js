const express = require('express')
const { getAllPost, createPost, updatePost, deletePost, getMyPosts } = require('../controllers/post.controller')

const PostRouter = express.Router()

PostRouter.post('/',  createPost)
PostRouter.get('/',getAllPost)
PostRouter.patch('/:id',  updatePost)
PostRouter.delete('/:postId',  deletePost)
PostRouter.get('/myposts/:userId', getMyPosts)

 module.exports = PostRouter