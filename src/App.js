import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import MainLayout from "./containers/Layout/Layout";
import Dashboard from "./containers/Dashboard/Dashboard";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import Hero from "./containers/Hero/Hero";
import ForgotPassword from "./containers/ForgotPassword/ForgotPassword";
import ResetPassword from "./containers/ResetPassword/ResetPassword";
import ChangePassword from "./containers/ChangePassword/ChangePassword";
import Timeline from "./containers/Timeline/Timeline";
import FAQs from "./containers/FAQs/FAQs";
import Sponsors from "./containers/Sponsors/Sponsors";
import JoinTeam from "./containers/JoinTeam/JoinTeam";
import CreateTeam from "./containers/CreateTeam/CreateTeam";
import Submission from "./containers/Submission/Submission";
import VerifyEmail from "./containers/VerifyEmail/VerifyEmail";
import PrivateRoute from "./components/RouteElements/PrivateRoute";
import UserRoute from "./components/RouteElements/UserRoute";

import "./App.css";

import TeamWrapper from "./containers/Team/TeamWrapper";

import EventWrapper from "./containers/Events/EventWrapper";


function App() {
  const auth = useAuth();
  const token = localStorage.getItem("token");
  const [redirect, setredirect] = React.useState(false);
  const [flag, setflag] = React.useState(true);
  const [hover, sethover] = React.useState(true);

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
              <MainLayout status="no-hover" hover={hover} sethover={sethover}>
                <Hero
                  redir={redirect}
                  setredir={setredirect}
                  flagprop={flag}
                  setflagprop={setflag}
                />
              </MainLayout>
            }
          />

          <Route element={<UserRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/account/email-verify" element={<VerifyEmail />} />
            <Route
              path="/account/password-reset/:uidb64/:token"
              element={<ResetPassword />}
            />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/event/join/:eventName" element={<JoinTeam />} />
            <Route path="/event/create/:eventName" element={<CreateTeam />} />
            <Route path="/event/submit/:eventName" element={<Submission />} />
          </Route>

          <Route
            path="/sponsors"
            element={
              <MainLayout status="hover" hover={hover} sethover={sethover}>
                <Sponsors />
              </MainLayout>
            }
          />

          <Route
            path="/team"
            element={
              <MainLayout status="hover" hover={hover} sethover={sethover}>
               <TeamWrapper />
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
            path="/events"
            element={
              <MainLayout status="hover" hover={hover} sethover={sethover}>
                <EventWrapper />
                 {/* {
                  mobileView ? <EventMobile /> : <Events />
                } */}
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
