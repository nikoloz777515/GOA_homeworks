import { Link } from "react-router"
import { useNavigate } from "react-router"

function Login(){
    const navigate = useNavigate()

    const handlenav = () =>{
        navigate('/profile')
    }
    return(
    <div>
        <h1>Login</h1>

        <form>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="password" />

            <button onClick={handlenav} >Submit</button>
        </form>
    </div>
    )
}

export default Login