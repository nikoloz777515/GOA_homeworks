const Post = require('../models/Post.model')
const AppError = require('../utils/AppError')
const catchAsync = require('../utils/catchAsync')


const createPost = catchAsync(async (req, res) => {
  const { title, content, userId } = req.body

   const post = await Post.create({ title, content, userId });

    res.status(201).json({
        message: "Post created succesfully!",
        status: "success",
        data: {
          post
        }
    });
});
const getAllPost = catchAsync(async(req,res)=>{
  const post = await Post.find()

  res.status(200).json({
    status: "success",
    message: "post returned successfully",
    data: post
  })
})
const updatePost = catchAsync(async(req,res,next)=>{
  const {postId} = req.params 
  const {title,content,userId} = req.body 

  const post = await Post.findById(postId);

    if(!post) {
        return next(new AppError("Post cant be found!", 404));
    }

    if(post.userId != userId) {
        return next(new AppError("You dont own this post!", 401));
    }
    if(title) post.title = title;
    if(content) post.content = content;

    await post.save();

    res.status(200).json({
        message: "Post updated succesfully!",
        status: "success",
        data: {
            post
        }
    });
});
const deletePost = catchAsync(async(req,res,next)=>{
  const {postId} = req.params
  const {userId} = req.body

  const post = await Post.findById(postId)

  if(!post){
    return next(new AppError("post not found",404))
  }

  if(post.userId.toString() !== userId){
    return next(new AppError("You dont own this post!",401))
  }

  await Post.findByIdAndDelete(postId)

  res.status(200).json({
    status: "success",
    message: "post deleted successfully"
  })
})
const getMyPosts = catchAsync(async(req,res,next)=>{
  const posts = await Post.find({ userId: req.user._id })

  res.status(200).json({
    status: "success",
    message: "your posts returned successfully",
    data: posts
  })
})

module.exports = {createPost,getAllPost,updatePost,deletePost,getMyPosts}
  
// 1) თქვენს პროექტში socialbook, დაამატეთ ახალი controller, router, model -- post - ისთვის, controller - ების ფაილში პოსტების ატვირთვის წაშლის წამოღებისა და განახლების გარდა დაამატეთ, მომხმარებლის (თავისი) პოსტების წამოღების ფუნქციაც

// 2) ვისაც არ გაქვთ დასრულებული Level 157 - ზე მოცემული დავალებები ყველამ დაასრულეთ, თქვენს პროექტში გამოიყენეთ .env 
// - ფაილიც და ახსენით თუ რისთვის გამოიყენება ის