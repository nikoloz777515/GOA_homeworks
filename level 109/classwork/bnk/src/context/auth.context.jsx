import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)

    const register = (formData) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existUser = users.find((obj) => obj.email === formData.email);

    if (existUser) {
      alert("User already exists");
      return;
    }

    const updatedUsers = [...users, formData];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUser(formData);
    alert("Registered successfully!");
  };
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUser(formData);
    alert("Registered successfully!");
  };

  const login = (formData) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (!existingUser) {
      alert("User not found or incorrect password");
      return;
    }

    setUser(existingUser);
    alert("Logged in successfully!");
  };

  const logout = () => {
    setUser(null);
    alert("Logged out");
  };

    return(
        <AuthContext.Provider value={{user,register,login,logout}}>
            {children}
        </AuthContext.Provider>
    )






















// 2) შექმენით auth.context.js თავისი კაუჭით, შემდეგ კონტექსტში შექმენით  register ფუნქცია, რომელიც ლოკალურ ბაზაში შეინახავს რეგისტრირებულ მომხმარებლებს მას უნდა გადაეცემოდეს formData პარამეტრი, აგრეთვე შეამოწმეთ შენახვამდე არსებობს თუ არა მომხმარებელი უკვე იმეილით თუ არსებობს არ დაამატოთ თუ არ არსებობს დაამატეთ და შეინახეთ მასივი თავიდან ლოკალურ ბაზაში