import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/index.jsx";
import Home from "./components/Home/index.jsx";
import SignUp from "./components/SignUp/index.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId="976802788054-aib5ai70hs4lfgrhqmf6hngtopbmblbt.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;