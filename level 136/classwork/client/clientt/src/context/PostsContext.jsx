import { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";

const PostContext = createContext();
export const usePost = () => useContext(PostContext);

const API_URL = "http://localhost:3000/api/post";

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useAuth();

  // -------- CREATE --------
  const createPost = async (postData) => {
    if (!user) return alert("Please login first");

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...postData, userId: user.id }),
    });

    const data = await res.json();
    if (!res.ok) return alert(data.message);

    setPosts(prev => [...prev, data]);
  };

  // -------- GET ALL --------
  const getPosts = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();

    if (!res.ok) return alert(data.message);
    setPosts(data);
  };

  // -------- DELETE --------
  const deletePost = async (id) => {
    if (!user) return;

    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) return alert("Delete failed");

    setPosts(prev => prev.filter(p => p.id !== id));
  };

  // -------- UPDATE --------
  const updatePost = async (id, updatedData) => {
    if (!user) return;

    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    const data = await res.json();
    if (!res.ok) return alert(data.message);

    setPosts(prev =>
      prev.map(p => (p.id === Number(id) ? data : p))
    );
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        createPost,
        getPosts,
        deletePost,
        updatePost
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
