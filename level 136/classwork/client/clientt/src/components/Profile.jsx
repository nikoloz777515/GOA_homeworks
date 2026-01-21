import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import UploadPost from "./UploadPost.jsx";
import Posts from "./Posts.jsx";
import { useEffect,useState } from "react";

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [posts,setPosts] = useState([])

 useEffect(() => {
    fetch("http://localhost:3000/api/post")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.log(err));
  }, [posts]);

  if (!user) return <p>Please login first</p>;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Profile</h2>

      <div style={styles.userInfo}>
        <p><b>Username:</b> {user.username}</p>
        <p><b>Email:</b> {user.email}</p>
        <button style={styles.logoutBtn} onClick={handleLogout}>Logout</button>
      </div>

      <hr style={styles.divider} />

      <div style={styles.postSection}>
        <h3 style={styles.subHeading}>Create a New Post</h3>
        <UploadPost />
      </div>

      <hr style={styles.divider} />

      <div style={styles.postSection}>
        <h3 style={styles.subHeading}>All Posts</h3>
        <Posts posts = {posts}/>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "30px auto",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
  },
  heading: {
    textAlign: "center",
    color: "#333"
  },
  userInfo: {
    textAlign: "center",
    marginBottom: "20px"
  },
  logoutBtn: {
    marginTop: "10px",
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#ff4d4f",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold"
  },
  divider: {
    margin: "25px 0",
    border: "0",
    height: "1px",
    background: "#ddd"
  },
  postSection: {
    marginBottom: "20px"
  },
  subHeading: {
    marginBottom: "12px",
    color: "#555"
  }
};

export default Profile;
