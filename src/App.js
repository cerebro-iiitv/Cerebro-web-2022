
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AuthContext, { AuthContextProvider } from "./store/AuthContext";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import "./App.css";


import Events from './components/main-event/main-event.component';
function App() {
  const authCtx = useContext(AuthContext);
  const token = localStorage.getItem("token");
  if (token) {
    authCtx.login(token);
  }

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              // Temp navigation for deploy preview
              <div>
                <Link to="/login">Login</Link>
                <br />
                <Link to="signup">Signup</Link>
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/events" element={<Events />} />
            
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
