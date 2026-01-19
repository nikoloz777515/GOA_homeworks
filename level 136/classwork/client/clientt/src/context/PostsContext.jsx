import { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";

const PostContext = createContext();
export const usePost = () => useContext(PostContext);

const API_URL = "http://localhost:3000/api/post";

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useAuth();

  const createPost = async (postData) => {
    if (!user) return alert("Please login first");
    const res = await fetch(`${API_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...postData, userId: user.id }),
    });
    const data = await res.json();
    if (!res.ok) return alert(data.message);
    setPosts(prev => [...prev, data]);
  };

  const getPosts = async () => {
    const res = await fetch(`${API_URL}`);
    const data = await res.json();
    if (!res.ok) return alert(data.message);
    setPosts(data);
  };

  return (
    <PostContext.Provider value={{ posts, createPost, getPosts }}>
      {children}
    </PostContext.Provider>
  );
};
