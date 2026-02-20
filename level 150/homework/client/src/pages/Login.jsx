import useAuth from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    }

    try {
      await login(formData)
      console.log("Login successful");
    } catch (err) {
      console.error( err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login