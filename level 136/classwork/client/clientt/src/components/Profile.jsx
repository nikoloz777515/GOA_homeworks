import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

 function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return <p>Please login first</p>;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile