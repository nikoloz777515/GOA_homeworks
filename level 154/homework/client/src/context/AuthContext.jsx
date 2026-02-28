import { createContext,useContext,useState } from "react";

const AuthContext = createContext()
export const useAuth = useContext(AuthContext)

export const Authprovider = ({children}) =>{
  const [user,setUser] = useState(null)
  const [verificationRequired,setVerificationRequired] = useState(false)


  const register = async (formData) =>{
    try{
      const res =  await fetch("http://localhost:3000/api/signup",{
        method: 'POST',
        headers: {'Content-Type': 'Application/json'},
        body: JSON.stringify(formData)
      })
      const data = await res.json()

      if(!res.ok) throw data

      setVerificationRequired(true)
      setUser({email: formData.email})
      return data
    }catch(err){
      console.log(err)
    }
  }

  const verifyEmail = async(code) =>{
    try{
      const res =  await fetch("http://localhost:3000/api/verify",{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({code})
      })
      const data = await res.json()
      if(!res.ok) throw data
      return data
    }catch(err){
      console.log(err)
    }
  }
  const login = async(formData)=>{
      try{
        const res =  await fetch("http://localhost:3000/api/login",{
        method: 'POST',
        headers: {'Content-Type': 'Application/json'},
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if(!res.ok) throw data 
      setUser({name: data.user.name, email: data.user.email})
      return data   
      }catch(err){
        console.log(err)
      }
  }

  const logout = setUser(null)

  return(
    <AuthContext.Provider value={{user,verificationRequired,register,verifyEmail,login,logout}}>
      {children}
    </AuthContext.Provider>
  )
}