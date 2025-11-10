import { useNavigate } from "react-router"

function Register(){

const navigate = useNavigate()
const handleNavigate = () =>{
    navigate('/login')
}
    return(
         <div>
        <h1>Register</h1>

        <form>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="password" />
            <input type="email" placeholder="email" />

            <button onClick={handleNavigate}>Submit</button>
        </form>
    </div>
    )
}

export default Register