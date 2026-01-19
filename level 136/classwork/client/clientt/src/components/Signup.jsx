import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function SignUp() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      await register(data);
      navigate("/profile");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <main>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button>Submit</button>
      </form>
      <p>Already have account? <Link to="/login">Login</Link></p>
    </main>
  );
}

export default SignUp