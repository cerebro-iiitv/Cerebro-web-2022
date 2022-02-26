import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import useAuth from "./hooks/useAuth";
import MainLayout from "./containers/Layout/Layout";
import Dashboard from "./containers/Dashboard/Dashboard"
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import Hero from "./containers/Hero/Hero";
import ForgotPassword from "./containers/ForgotPassword/ForgotPassword";
import ResetPassword from "./containers/ResetPassword/ResetPassword";
import ChangePassword from "./containers/ChangePassword/ChangePassword";
import Timeline from "./containers/Timeline/Timeline";
import FAQs from "./containers/FAQs/FAQs";
import Sponsors from "./containers/Sponsors/Sponsors";
import PrivateRoute from "./components/RouteElements/PrivateRoute";
import UserRoute from "./components/RouteElements/UserRoute";
import "./App.css";

import Events from "./containers/Events/Events";

function App() {
  const auth = useAuth();
  const token = localStorage.getItem("token");
  const [redirect,setredirect] = React.useState(false);
  const [flag,setflag] = React.useState(true);
  const [hover,sethover ] = React.useState(true);

  if (token) {
    auth.login(token);
  }
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MainLayout status="no-hover" hover={hover} sethover={sethover}>
                    <Hero redir={redirect} setredir={setredirect} flagprop={flag} setflagprop={setflag} />
                  </MainLayout>
                </>
              }
            />
          </Routes>

          <Routes>
            <Route element={<UserRoute />}>
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

            </Route>

            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/change-password" element={<ChangePassword />} />
            </Route>



            <Route
              path="/dashboard"
              element={
                <p>Hello Human</p>
              }
            />

            <Route
              path="/sponsors"
              element={
                <MainLayout status="hover" hover={hover} sethover={sethover}>
                  <Sponsors/>
                </MainLayout>
              }
            />

            <Route
              path="/team"
              element={
                <MainLayout status="hover" hover={hover} sethover={sethover}>
                  <div>{/* <h1>Team</h1> */}</div>
                </MainLayout>
              }
            />
            <Route
              path="/faq"
              element={
                <MainLayout status="hover" hover={hover} sethover={sethover}>
                  <FAQs />
                </MainLayout>
              }
            />
            <Route
              path="/event"
              element={
                <MainLayout status="hover" hover={hover} sethover={sethover}>
                  <div>{/* <h1>Event</h1> */}</div>
                  <Events />
                </MainLayout>
              }
            />
            <Route
              path="/timeline"
              element={
                <MainLayout status="hover" hover={hover} sethover={sethover}>
                  <Timeline />
                </MainLayout>
              }
            />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
