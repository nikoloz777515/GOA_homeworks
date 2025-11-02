import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Profile() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Profile Page</h2>
      <p>სახელი: {user.name}</p>
      <p>ელფოსტა: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;
