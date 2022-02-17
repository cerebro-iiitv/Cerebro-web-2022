import Navbar from "../Navbar/Navbar";
import "./CommonLayer.scss";
import "../Navbar/Navbar.scss";
import React from "react";
import dashboard from "../../assets/images/dashboard icon.svg";
const CommonLayer = () => {
  function LoginButton(props) {
    return (
      //  <Link to="/login">
      <div className="login-btn-container">
        <p id="lgndash" onClick={props.onClick}>
          LOGIN / SIGNUP
        </p>
      </div>
      //  </Link>
    );
  }
  function Dashboard() {
    return (
      //  <Link to="/dashboard">
      <div className="login-btn">
        <img src={dashboard} alt="dashboard"></img>{" "}
        <p id="lgndash">DASHBOARD</p>
      </div>
      //  </Link>
    );
  }

  class LogStatus extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isLoggedIn: false };
    }

    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      if (isLoggedIn) {
        button = <Dashboard />;
      } else {
        button = <LoginButton />;
      }
      return <div className="dashboard-content">{button}</div>;
    }
  }

  return (
    <>
      <div className="visible-layer">
        <div className="visible-layer-top-hud">
        </div>
        <div className="login-button-container">
          <Dashboard />
        </div>
        <div className="navhover">
          <Navbar status="hover" />
        </div>
        <div className="blur-layer"></div>;
        <div className="test">
        </div>
      </div>
    </>
  );
};

export default CommonLayer;
// 