import MainLayout from "./containers/Layout/Layout";
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContext, { AuthContextProvider } from "./store/AuthContext";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import Hero from "./containers/Hero/Hero";
import ForgotPassword from "./containers/ForgotPassword/ForgotPassword";
import ResetPassword from "./containers/ResetPassword/ResetPassword";
import Timeline from "./containers/Timeline/Timeline";
import FAQs from "./containers/FAQs/FAQs";
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
        <MainLayout status="no-hover">
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                  </>
                }
              />
            </Routes>
          </BrowserRouter>
        </MainLayout>

        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/account/password-reset/:uidb64/:token"
              element={<ResetPassword />}
            />
          </Routes>
        </BrowserRouter>

        <MainLayout status="hover">
          <BrowserRouter>
            <Routes>
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
              <Route
                path="/timeline"
                element={
                  <Timeline/>
                }
              />
            </Routes>
            {/* <MainLayout status="hover"/> */}
          </BrowserRouter>
        </MainLayout>
      </AuthContextProvider>
    </div>
  );
}

export default App;
