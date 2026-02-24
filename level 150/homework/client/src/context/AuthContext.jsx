import { createContext, useState } from "react";

const API_URL = "http://localhost:3000/api"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const signUp = async (formData) => {
    try {
      const res = await fetch(`${API_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json();

      setUser(data.user || data.newUser);
    } catch (err) {
      console.log(err)
    }
  }
  const login = async (formData) => {
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json();
      setUser(data.user || data.loggedInUser)
    } catch (err) {
      console.log(err)
    }
  }
    const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signUp,login,signOut }}>
      {children}
    </AuthContext.Provider>
  )
}