import { usePost } from "../context/PostsContext";

const UploadPost = () => {
  const { createPost } = usePost();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title: e.target.title.value, content: e.target.content.value };
    await createPost(data);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" required />
      <textarea name="content" placeholder="Content" required />
      <button>Upload Post</button>
    </form>
  );
};

export default UploadPost;
