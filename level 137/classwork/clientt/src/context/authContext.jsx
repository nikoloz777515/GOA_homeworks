import { createContext, useState, useContext, } from "react";
import { login } from "../../../server/controller/auth.controller";

const AuthContext = createContext(null)


export const useAuth = () => useContext(AuthContext)

const API_URL = 'http://localhost:3000/auth';

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null)

  const register = async (user) => {
    try {
      const res = await fetch(API_URL + 'auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Registration failed");
      }

      const data = await res.json();
      return data;

    } catch (err) {
      console.log(err)
    }
  }
    const login = async (credentials) =>{
      const res = await fetch(API_URL + "/login",{
          method: "POST",
          headers:{
            "Content-Type" : "application/json",
          },
          body: JSON.stringify(credentials)
      })
       if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message);
    }
    const data = await res.json()
    setuser(data.user)
    return data

    }
    const logout = () =>{
      setuser(null)
    }
  return (
   <AuthContext.Provider value={{ user, register,login,logout}}>
      {children}
    </AuthContext.Provider>
  )
}






// 3) დაამატეთ profile გვერდი, როდესაც წარმატებით მოხდება ავტორიზაცია ავტომატურად გადაიყვანეთ პროფილის გვერდზე, აგრეთვე შექმენით ProtectedRoute კომპონენტი, რომელიც შეამოწმებს არის თუ არა მომხმარებელი ავტროიზირებული, თუ არა არის კონკრეტულ გვერდზე სადაც იყენებთ არ უნდა შეუშვას, დაამატეთ logout ფუნქციაც კონტექსტში რომელიც მომხმარტევბელს გამოიყვანს თავისი აქაუნთიდან.


// 2) შექმენით login კონტროლერი დაამტეთ ახალი როუტე /login, შექმენით login ფუნქცია context_ში და აამუშავეთ ავტორიზაცია.


// 1) გააკეთეთ კოდის re-construction, დაამატეთ კონტექსტი და react-router, აგრეთვე Nav კომპონენტი და რეგისტრაციისა
//  და ლოგინის გვერდები

