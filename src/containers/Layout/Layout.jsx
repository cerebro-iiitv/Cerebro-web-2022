import Navbar from "../Navbar/Navbar";
import "./Layout.scss";
import React from "react";
import dashboard from "../../assets/images/dashboard icon.svg";
import blurlayer from "../../assets/images/glass-top.svg";
const Layout = (props) => {
  function LoginButton(props) {
    return (
      //  <Link to="/login">
      <div className="login-btn">
        <p id="lgndash">
          LOGIN / SIGNUP
        </p>
      </div>
      //  </Link>
    );
  }
  function Dashboard() {
    return (
      //  <Link to="/dashboard">
      <div className="dashboard-btn">
        <img src={dashboard} alt="dashboard" className="dashboard-btn-img"></img>{" "}
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
      return <div>{button}</div>;
    }
  }

  return (
    <>
      <div className="visible-layer">
        <div className="login-button-container">
          <LogStatus />
        </div>
        <div classname="main-content" id="main-content"> {props.children} </div>
        <div className={props.status === "hover" ? "navhover navbarr" : "navbarr"}>
          <Navbar />
        </div>
        <div className="blur-layer"></div>
        <div className={props.status === "hover" ? "tophover" : "hud-top"}>
        </div>
      </div>
    </>
  );
};

export default Layout;
// 