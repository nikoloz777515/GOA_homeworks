import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const API_URL = 'http://localhost:3000/auth';

function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value
    };

    try {
      const res = await fetch(API_URL + '/register', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      alert(result.message);
      if (res.ok) navigate("/login");
      e.target.reset();

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button>Submit</button>
      </form>
      <p>Already have account? <Link to="/login">Login</Link></p>
    </main>
  );
}

function LogIn({ setUser }) {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    };

    try {
      const res = await fetch(API_URL + "/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      if (res.ok) {
        setUser(result.user);
        navigate("/profile");
      } else {
        alert(result.message);
      }

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button>Login</button>
      </form>
      <p>Don't have account? <Link to="/signup">Signup</Link></p>
    </div>
  );
}

function Profile({ user }) {
  if (!user) return <p>Please login first</p>;

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <Link to="/login">Logout</Link>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn setUser={setUser} />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="*" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
