import MainLayout from "./containers/Layout/Layout";
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AuthContext, { AuthContextProvider } from "./store/AuthContext";
import Dashboard from "./containers/Dashboard/Dashboard";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import ForgotPassword from "./containers/ForgotPassword/ForgotPassword";
import ResetPassword from "./containers/ResetPassword/ResetPassword";
import Timeline from "./containers/Timeline/Timeline";
import FAQs from "./containers/FAQs/FAQs";
import Sponsors from "./containers/Sponsors/Sponsors";

import "./App.css";



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
                  // Temp navigation for deploy preview
                  <div>
                    <Link to="/login">Login</Link>
                    <br />
                    <Link to="/signup">Signup</Link>
                    <br />
                    <Link to="/forgot-password">Forgot Password</Link>
                    <br />
                    <Link to="/sponsors">Sponsors</Link>
                  </div>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/sponsors" element={<Sponsors />} />
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
                  // Temp navigation for deploy preview
                  <div>{/* <h1>Event</h1> */}</div>
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
