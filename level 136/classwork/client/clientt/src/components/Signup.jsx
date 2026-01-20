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
    <div style={styles.container}>
      <h2 style={styles.heading}>Sign Up</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input name="username" placeholder="Username" required style={styles.input}/>
        <input name="email" type="email" placeholder="Email" required style={styles.input}/>
        <input name="password" type="password" placeholder="Password" required style={styles.input}/>
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
      <p style={styles.text}>
        Already have account? <Link to="/login" style={styles.link}>Login</Link>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "60px auto",
    padding: "40px",
    borderRadius: "12px",
    backgroundColor: "#f0f0f5",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  heading: { marginBottom: "25px", color: "#333" },
  form: { display: "flex", flexDirection: "column", gap: "18px" },
  input: { padding: "12px 15px", borderRadius: "10px", border: "1px solid #ccc", fontSize: "16px", transition: "0.3s" },
  button: { padding: "12px 0", borderRadius: "10px", border: "none", backgroundColor: "#4CAF50", color: "#fff", fontSize: "16px", fontWeight: "bold", cursor: "pointer", transition: "0.3s" },
  text: { marginTop: "20px", fontSize: "14px", color: "#555" },
  link: { color: "#4CAF50", textDecoration: "none", fontWeight: "bold" }
};

export default SignUp;
