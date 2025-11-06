import { createContext, useContext, useState } from "react";

const Authcontext =  createContext()

export const useAuth = () => useContext(Authcontext)

export const Autprovider = ({children}) =>{
    const [user,setUser] = useState(null)

    const register = (formData) =>{
        const users = JSON.parse(localStorage.getItem('users'))

        if(!users){
            localStorage.setItem('users',JSON.stringify([formData]))

        }else{
            const existUser = users.find(obj =>obj.email === formData.email)
        }
        if(existUser){
            alert("user is exist")
            return;
        }
        
    }
    const login = (formData) =>{
        const users = JSON.parse(localStorage.getItem('users')) || []
        const user = users.find(user => user.email === formData && user.password === formData.password)

        if(!user){
            alert("user dont exist")
            return
        }

    }
    return(
        <Authcontext.Provider value={{user,register,login}}>
            {children}
        </Authcontext.Provider>
    )

}




















// 2) შექმენით auth.context.js თავისი კაუჭით, შემდეგ კონტექსტში შექმენით  register ფუნქცია, რომელიც ლოკალურ ბაზაში შეინახავს რეგისტრირებულ მომხმარებლებს მას უნდა გადაეცემოდეს formData პარამეტრი, აგრეთვე შეამოწმეთ შენახვამდე არსებობს თუ არა მომხმარებელი უკვე იმეილით თუ არსებობს არ დაამატოთ თუ არ არსებობს დაამატეთ და შეინახეთ მასივი თავიდან ლოკალურ ბაზაში