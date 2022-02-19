import Navbar from "./containers/Navbar/Navbar"
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AuthContext, { AuthContextProvider } from "./store/AuthContext";
import './App.css';
import MainLayout from "./containers/Layout/Layout";

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
            <Route path="/team" element={
              // Temp navigation for deploy preview
              <div>
                {/* <h1>Team</h1> */}
              </div>
            } />
            <Route path="/faq" element={
              // Temp navigation for deploy preview
              <div>
                {/* <h1>FAQ</h1> */}
              </div>
            } />
            <Route path="/event" element={
              // Temp navigation for deploy preview
              <div>
                {/* <h1>Event</h1> */}
              </div>
            } />
            <Route path="/timeline" element={
              // Temp navigation for deploy preview
              <div>
                {/* <h1>Timeline</h1> */}
              </div>
            } />
          </Routes>
          </MainLayout>
          {/* <MainLayout status="hover"/> */}
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
