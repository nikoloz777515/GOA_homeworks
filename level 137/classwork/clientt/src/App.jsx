import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
      </Routes>
    </>
  );
}

export default App;
