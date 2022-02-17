import Navbar from "../Navbar/Navbar";
import "./CommonLayer.scss";
import "../Navbar/Navbar.scss";
import React from "react";
import dashboard from "../../assets/images/dashboard icon.svg";
const CommonLayer = () => {
  function LoginButton(props) {
    return (
      //  <Link to="/login">
      <>
        <p id="lgndash" onClick={props.onClick}>
          LOGIN / SIGNUP
        </p>
      </>
      //  </Link>
    );
  }
  function Dashboard() {
    return (
      //  <Link to="/dashboard">
      <>
        <img src={dashboard} alt="dashboard"></img>{" "}
        <p id="lgndash">DASHBOARD</p>
      </>
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
    // <div className="main-wrapper">
    <div className="visible-layer">
      <div className="visible-layer-top">
        <div className="blur-layer"></div>
        <div className="visible-layer-top-spacer"></div>
        <div className="visible-layer-top-center"></div>
        <div className="visible-layer-top-dashboard">
          <div className="visible-layer-top-dashboard-main">
            <LogStatus />
          </div>
        </div>
      </div>
      <Navbar status="hover" />
    </div>
    // </div>
  );
};

export default CommonLayer;
