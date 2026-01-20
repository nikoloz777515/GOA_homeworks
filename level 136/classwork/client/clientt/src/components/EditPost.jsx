import { useParams, useNavigate } from "react-router-dom";
import { usePost } from "../context/PostsContext";
import { useEffect, useState } from "react";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, updatePost } = usePost();

  const post = posts.find(p => p.id === Number(id));

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  if (!post) return <p>Post not found</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost(id, { title, content });
    navigate("/posts");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Post</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <textarea value={content} onChange={e => setContent(e.target.value)} />
      <button>Save</button>
    </form>
  );
};

export default EditPost;
