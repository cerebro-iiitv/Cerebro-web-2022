import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./containers/Dashboard/Dashboard";
import useAuth from "./hooks/useAuth";
import MainLayout from "./containers/Layout/Layout";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import ForgotPassword from "./containers/ForgotPassword/ForgotPassword";
import ResetPassword from "./containers/ResetPassword/ResetPassword";
import ChangePassword from "./containers/ChangePassword/ChangePassword";
import Timeline from "./containers/Timeline/Timeline";
import FAQs from "./containers/FAQs/FAQs";
import Sponsors from "./containers/Sponsors/Sponsors";
import PrivateRoute from "./components/RouteElements/PrivateRoute";
import UserRoute from "./components/RouteElements/UserRoute";
import "./App.css";

function App() {
  const auth = useAuth();
  const token = localStorage.getItem("token");
  if (token) {
    auth.login(token);
  }

  return (
    <div className="App">
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
                  <Link to="/change-password">Change Password</Link>
                  <br />
                  <Link to="/sponsors">Sponsors</Link>
                </div>
              }
            />
            <Route element={<UserRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route
                path="/account/password-reset/:uidb64/:token"
                element={<ResetPassword />}
              />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/change-password" element={<ChangePassword />} />
            </Route>
            <Route path="/sponsors" element={<Sponsors />} />
            <Route
              path="/team"
              element={
                // Temp navigation for deploy preview
                <div>{/* <h1>Team</h1> */}</div>
              }
            />
            <Route path="/faq" element={<FAQs />} />
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
    </div>
  );
}

export default App;
