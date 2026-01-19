import { useEffect } from "react";
import { usePost } from "../context/PostsContext";

const Posts = () => {
  const { posts, getPosts } = usePost();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {posts.map(p => (
        <div key={p.id}>
          <h4>{p.title}</h4>
          <p>{p.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
