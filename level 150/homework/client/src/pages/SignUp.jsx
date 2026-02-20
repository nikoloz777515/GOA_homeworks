import useAuth from "../context/AuthContext";

const SignUp = () => {
  const { signUp } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }

    try {
      await signUp(formData)
      console.log("SignUp successful");
    } catch (err) {
      console.error("SignUp error:", err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default SignUp;