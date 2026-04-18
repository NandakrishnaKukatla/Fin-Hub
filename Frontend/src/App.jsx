import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/index.jsx";
import Home from "./components/Home/index.jsx";
import SignUp from "./components/SignUp/index.jsx";
import Layout from "./components/Nav-Bar/Layout.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID || "your_google_client_id"}>
      <BrowserRouter>
        <Routes>
          {/* Everything inside this Layout route will share the Navbar */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;