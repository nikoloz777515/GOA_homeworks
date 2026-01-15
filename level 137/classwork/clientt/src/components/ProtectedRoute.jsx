import { Navigate } from "react-router";
import { useAuth } from "../context/authContext";

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    return user ? children : <Navigate to={'/login'}/>
};

export default ProtectedRoute;