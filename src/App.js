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
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MainLayout status="no-hover">
                    <Hero />
                  </MainLayout>
                </>
              }
            />
          </Routes>

          <Routes>
            <Route
              path="/login"
              element={
                
                  <Login />
             
              }
            />
            <Route
              path="/signup"
              element={
                
                  <Signup />
                
              }
            />
            <Route
              path="/forgot-password"
              element={
                
                  <ForgotPassword />
                
              }
            />
            <Route
              path="/account/password-reset/:uidb64/:token"
              element={
                
                  <ResetPassword />
                
              }
            />
            <Route
              path="/dashboard"
              element={
                
                  <p>Hello Human</p>
              
              }
            />
          </Routes>

          <Routes>
            {/* <MainLayout status="hover"> */}

            <Route
              path="/team"
              element={
                <MainLayout status="hover">
                  <div>{/* <h1>Team</h1> */}</div>
                </MainLayout>
              }
            />
            <Route
              path="/faq"
              element={
                <MainLayout status="hover">
                  <FAQs />
                </MainLayout>
              }
            />
            <Route
              path="/event"
              element={
                <MainLayout status="hover">
                  
                  <div>{/* <h1>Event</h1> */}</div>
                </MainLayout>
              }
            />
            <Route
              path="/timeline"
              element={
                <MainLayout status="hover">
                  <Timeline />
                </MainLayout>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
