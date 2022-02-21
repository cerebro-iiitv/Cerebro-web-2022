import Navbar from "../Navbar/Navbar";
import "./Layout.scss";
import React from "react";
import dashboard from "../../assets/images/dashboard icon.svg";
import {Link} from "react-router-dom";

const Layout = (props) => {
  function LoginButton() {
    return (
       <Link to="/login">
      <div className="login-btn">
        <p id="lgndash">
          LOGIN / SIGNUP
        </p>
      </div>
     </Link>
    );
  }
  function Dashboard() {
    return (
       <Link to="/dashboard">
      <div className="dashboard-btn">
        <img src={dashboard} alt="dashboard" className="dashboard-btn-img"></img>{" "}
        <p id="lgndash">DASHBOARD</p>
      </div>
      </Link>
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
      return <div className={props.status === "hover" ? "top-btn" : "top-btn-higher"}>{button}</div>;
    }
  }

  return (
    <>
      <div className="visible-layer">
        <div className="login-button-container">
          <LogStatus />
        </div>
        <div className="main-content" id="main-content"> {props.children} </div>
        <div className={props.status === "hover" ? "navhover navbarr" : "navbarr"}>
          <Navbar status={props.status}/>
        </div>
        <div className="blur-layer"></div>
        <div className={props.status === "hover" ? "tophover" : "hud-top"}>
          <p className={props.status === "hover" ? "tophud-text" : "notext"}>CEREBRO'22</p>
        </div>
      </div>
    </>
  );
};

export default Layout;
// 