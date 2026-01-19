import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

 function LogIn() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      await login(data);
      navigate("/profile");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button>Login</button>
      </form>
      <p>Don't have account? <Link to="/signup">Signup</Link></p>
    </div>
  );
}

export default LogIn