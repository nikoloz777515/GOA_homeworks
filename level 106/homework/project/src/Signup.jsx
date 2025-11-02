import { useState,useContext } from "react";
import { AuthContext } from "./AuthContext";

function Signup(){
    const {signUp} = useContext(AuthContext)
    const [form,setForm] = useState({
         name: "",
        email: "",
        password:  "",
    })

    const handlechange = (e) =>{
        setForm({...form,[e.target.name]: e.target.value })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        signUp(form)
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>SignUp</h1>
            <input name = "name " onChange={handlechange} placeholder="name" required/>
         <input
        name="email"
        type="email"
        onChange={handlechange}
        placeholder="Email"
        required
      />

            <input
        name="password"
        type="password"
        onChange={handlechange}
        placeholder="password"
        required
      />
      <button  type="submit">Register</button>
        </form>
    )
}

export default Signup;