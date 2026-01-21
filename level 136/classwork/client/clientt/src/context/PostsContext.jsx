import { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";

const PostContext = createContext();
export const usePost = () => useContext(PostContext);

const API_URL = "http://localhost:3000/api/post";

export const PostProvider = ({ children }) => {
  const { user } = useAuth();

 const [posts, setPosts] = useState(() => {
  try {
    const saved = localStorage.getItem("posts");
    return saved ? JSON.parse(saved) : [];
  } catch (err) {
    console.log("Failed to parse localStorage posts:", err);
    return [];
  }
});

  
  // CREATE 
  const createPost = async (postData) => {
    if (!user) return alert("Please login first");

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...postData, userId: user.id }),
    });

    const data = await res.json();
    if (!res.ok) return alert(data.message);

    setPosts(prev => {
      const updated = [...prev,data]
      localStorage.setItem('posts',JSON.stringify(updated))
      return updated
    });
  };

  //  GET ALL 
  const getPosts = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();

    if (!res.ok) return alert(data.message);

     setPosts(data);
  localStorage.setItem("posts", JSON.stringify(data));
  };
 


  // DELETE 
const deletePost = async (id) => {
  if (!user) return;

  const res = await fetch(`${API_URL}/${id}?userId=${user.id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    const err = await res.json();
    return alert(err.message);
  }

  setPosts(prev => {
    const updated = prev.filter(p => p.id !== id);
    localStorage.setItem("posts", JSON.stringify(updated));
    return updated;
  });
};

  //  UPDATE 
  const updatePost = async (id, updatedData) => {
    if (!user) return;

    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    const data = await res.json();
    if (!res.ok) return alert(data.message);

   setPosts(prev => {
      const updated = prev.map(p =>
        p.id === Number(id) ? data : p
      );
      localStorage.setItem("posts", JSON.stringify(updated));
      return updated;
    });
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
