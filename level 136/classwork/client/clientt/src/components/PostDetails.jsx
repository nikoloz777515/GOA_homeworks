import { usePost } from "../context/PostsContext";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const { posts } = usePost();

  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return <p style={notFoundStyle}>Post not found 🌱</p>;
  }

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <span style={badgeStyle}>🌿 Post Details</span>

        <h2 style={titleStyle}>{post.title}</h2>

        <p style={contentStyle}>{post.content}</p>

        <div style={footerStyle}>
          <div>
            <span style={labelStyle}>Author</span>
            <p style={authorStyle}>{post.userId || "Unknown"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

/* ===== styles ===== */

const pageStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #0f766e, #22c55e)",
  padding: "20px",
};

const cardStyle = {
  background: "#ecfdf5",
  borderRadius: "20px",
  padding: "32px",
  maxWidth: "650px",
  width: "100%",
  boxShadow: "0 20px 50px rgba(0, 128, 96, 0.35)",
  border: "1px solid #a7f3d0",
};

const badgeStyle = {
  display: "inline-block",
  background: "#22c55e",
  color: "#fff",
  padding: "6px 14px",
  borderRadius: "999px",
  fontSize: "13px",
  fontWeight: "600",
  marginBottom: "14px",
};

const titleStyle = {
  fontSize: "30px",
  color: "#065f46",
  marginBottom: "16px",
};

const contentStyle = {
  fontSize: "17px",
  lineHeight: "1.8",
  color: "#064e3b",
  marginBottom: "28px",
};

const footerStyle = {
  borderTop: "1px solid #bbf7d0",
  paddingTop: "16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const labelStyle = {
  fontSize: "12px",
  color: "#16a34a",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const authorStyle = {
  fontSize: "15px",
  fontWeight: "600",
  color: "#14532d",
};

const notFoundStyle = {
  fontSize: "22px",
  color: "#065f46",
  marginTop: "40px",
};
