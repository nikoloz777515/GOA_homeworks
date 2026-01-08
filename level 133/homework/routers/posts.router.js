const express = require('express')
const router = express.Router()


const{
   getAllpost,
  getPostbyId,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/posts.controllers')

router.get('/',getAllpost)
router.get('/:id',getPostbyId)

router.post('/',createPost)

router.put('/:id',updatePost)

router.delete('/:id',deletePost)

module.exports = router