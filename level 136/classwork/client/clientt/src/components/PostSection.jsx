import UploadPost from "./UploadPost.jsx";
import Posts from "./Posts.jsx";

const PostsSection = () => {
  return (
    <div>
      <h2>My Posts Section</h2>

      {/* პოსტის შექმნა */}
      <UploadPost />

      <hr />

      {/* უკვე დამატებული პოსტები */}
      <Posts />
    </div>
  );
};

export default PostsSection;
