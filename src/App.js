import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AuthContext, { AuthContextProvider } from "./store/AuthContext";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import ForgotPassword from "./containers/ForgotPassword/ForgotPassword";
import ResetPassword from "./containers/ResetPassword/ResetPassword";
import "./App.css";

function App() {
  const authCtx = useContext(AuthContext);
  const token = localStorage.getItem("token");
  if (token) {
    authCtx.login(token);
  }

  const TempNav = () => {
    return (
      // Temp navigation for deploy preview
      <div>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/signup">Signup</Link>
        <br />
        <Link to="/forgot-password">Forgot Password</Link>
        <br />
        <Link to="/reset-password">Reset Password</Link>
        <br />
      </div>
    );
  };

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TempNav />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
