import { Link } from "react-router-dom"
import { useAuth } from "../context/authContext"

const Nav = () => {
  const { user, logout } = useAuth();

  return (
    <header>
      <h1>App</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        {user ? (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/register">register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Nav
