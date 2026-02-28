import { useState } from "react";
import { useAuth } from "../AuthContext";

const verifyEmail = ({email}) =>{
  const [code,setCode] = useState("")
  const {verifyEmail} =  useAuth()

  const handlesubmit = async (e) =>{
    e.prventDefault()

    try{
      await verifyEmail(code)
    }catch(err){
      console.log(err)
    }
  }
  return(
    <div>
        <h1>verify email</h1>
        <p>verification code was sent to {email}</p>

        <form onSubmit={handlesubmit}>
            <input type="text" placeholder="enter verifrication code" value={code} onChange={(e)=>{
              setCode(e.target.value)
            }} />
            <button>verify</button>
        </form>
    </div>
  )
}

export default verifyEmail;