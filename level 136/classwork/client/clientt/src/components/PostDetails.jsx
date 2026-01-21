import { usePost } from "../context/PostsContext";
import { useParams } from "react-router-dom";

const PostDetails =() =>{
  const {id} = useParams()
  const {posts} = usePost()

  const post = posts.find(p => p.id === Number(id))

  if(!post){
    return <p>Post not Found</p>
  }

  return(
    <div>
      <h2>author: {post.title}</h2>
      <p>{post.content}</p>
    </div>
  )
}

export default PostDetails