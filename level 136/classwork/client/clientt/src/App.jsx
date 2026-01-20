import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { PostProvider } from "./context/PostsContext.jsx";

import SignUp from "./components/Signup.jsx";
import LogIn from "./components/LogIn.jsx";
import Profile from "./components/Profile.jsx";
import UploadPost from "./components/UploadPost.jsx";
import Posts from "./components/Posts.jsx";
import PostDetails from "./components/PostDetails.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import EditPost from "./components/EditPost.jsx";

function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />

            <Route
              path="/profile"
              element={<ProtectedRoute><Profile /></ProtectedRoute>}
            />

            <Route
              path="/upload"
              element={<ProtectedRoute><UploadPost /></ProtectedRoute>}
            />

            <Route
              path="/posts"
              element={<ProtectedRoute><Posts /></ProtectedRoute>}
            />
            <Route
  path="/edit/:id"
  element={<ProtectedRoute><EditPost /></ProtectedRoute>}
/>

            <Route
              path="/posts/:id"
              element={<ProtectedRoute><PostDetails /></ProtectedRoute>}
            />

            <Route path="*" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
