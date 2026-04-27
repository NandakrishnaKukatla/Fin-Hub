import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from "./components/Login/index.jsx";
import Home from "./components/Home/index.jsx";
import SignUp from "./components/SignUp/index.jsx";
import Navbar from "./components/Nav-Bar/index.jsx";
import Expenses from "./components/Expenses/index.jsx";
import Cookies from "js-cookie";
import { GoogleOAuthProvider } from '@react-oauth/google';

const ProtectedRoute = () => {
  const jwtToken = Cookies.get("token");
  if (!jwtToken) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID || "your_google_client_id"}>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            {/* Everything inside this Layout route will share the Navbar */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/expenses" element={<Expenses />} />
            </Route>
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