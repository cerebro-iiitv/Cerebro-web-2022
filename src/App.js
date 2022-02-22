import MainLayout from "./containers/Layout/Layout";
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AuthContext, { AuthContextProvider } from "./store/AuthContext";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import ForgotPassword from "./containers/ForgotPassword/ForgotPassword";
import ResetPassword from "./containers/ResetPassword/ResetPassword";
import Timeline from "./containers/Timeline/Timeline";
import FAQs from "./containers/FAQs/FAQs";
import "./App.css";

import Events from "./containers/Events/Events";

function App() {
  const authCtx = useContext(AuthContext);
  const token = localStorage.getItem("token");
  if (token) {
    authCtx.login(token);
  }
  
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <MainLayout status="hover">
            <Routes>
              <Route
                path="/"
                element={
                  <div>
                    <Link to="/login">Login</Link>
                    <br />
                    <Link to="/signup">Signup</Link>
                    <br />
                    <Link to="/forgot-password">Forgot Password</Link>
                  </div>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route
                path="/account/password-reset/:uidb64/:token"
                element={<ResetPassword />}
              />
              <Route
                path="/team"
                element={
                  // Temp navigation for deploy preview
                  <div>{/* <h1>Team</h1> */}</div>
                }
              />
              <Route
                path="/faq"
                element={
                  // Temp navigation for deploy preview
                  <FAQs />
                }
              />
              <Route
                path="/event"
                element={
                  <Events />
                }
              />
              <Route path="/timeline" element={<Timeline />} />
            </Routes>
          </MainLayout>
          {/* <MainLayout status="hover"/> */}
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
