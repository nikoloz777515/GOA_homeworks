import { useEffect } from "react";
import { usePost } from "../context/PostsContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const { posts, getPosts, deletePost } = usePost();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // კომპონენტის ჩატვირთვისას ყველა პოსტის წამოღება backend-იდან
    getPosts();
  }, []);

  return (
    <div>
      {posts.map(p => (
        <div key={p.id} style={cardStyle}>
       
          <h4
            style={{ cursor: "pointer", color: "#4CAF50" }} onClick={() => navigate(`/posts/${p.id}`)}> 
            author: {p.title}
          </h4>

          <p>{p.content}</p>

         
          {user && p.userId === user.id && (
            <div style={{ marginTop: "10px" }}>
              <button style={btnDelete} onClick={() => deletePost(p.id)}>
                Delete
              </button>

              <button
                style={btnEdit} onClick={() => navigate(`/edit/${p.id}`)}>
                Edit
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};



const cardStyle = {
  backgroundColor: "#fff",
  padding: "15px",
  marginBottom: "15px",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
};

const btnDelete = {
  padding: "6px 12px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: "#ff4d4f",
  color: "#fff",
  cursor: "pointer",
  marginRight: "10px"
};

const btnEdit = {
  padding: "6px 12px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: "#4CAF50",
  color: "#fff",
  cursor: "pointer"
};

export default Posts;
