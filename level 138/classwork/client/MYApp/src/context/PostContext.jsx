import { createContext,useContext } from "react";

const PostContext = createContext()

export const usePost = () =>{
  return useContext(PostContext)
} 

export const Provider = ({children}) =>{
    const createPost =() =>{

    }

    return(
      <PostContext.Provider value={{createPost}}>
        {children}
      </PostContext.Provider>
       
    )
}

// 2) შექმენით PostContext კონტექსტი თავისი კაუჭით და PostProvider დაამატეთ createPost ფუნქცია ჯერჯერობით 
// ცარიელი იყოს.