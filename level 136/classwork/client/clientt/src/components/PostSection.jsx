import UploadPost from "./UploadPost.jsx";
import Posts from "./Posts.jsx";

const PostsSection = () => {
  return (
    <div>
      <h2>My Posts Section</h2>

     {/* create Post */}
      <UploadPost />

      <hr />

    {/* created post */}
      <Posts />
    </div>
  );
};

export default PostsSection;
