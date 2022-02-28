import Navbar from "../Navbar/Navbar";
import "./Layout.scss";
import dashboard from "../../assets/images/dashboard icon.svg";
import useAuth from "../../hooks/useAuth";
import {Link} from "react-router-dom";
import React from "react";
import BurgerNav from "../../components/BurgerNav/BurgerNav";

const Layout = (props) => {

const auth = useAuth();
const hoveroff = () => {
  props.sethover(false);
  setTimeout(()=>{props.sethover(true)}, 5000);    
}

const HandleMouseLeave = () => {
  setTimeout(()=>{props.sethover(true)}, 50);    
}

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

    render() {
      let button;
      if (auth.isLoggedIn===true) {
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
        <BurgerNav />
        <div className="login-button-container">

          <LogStatus />
        </div>
        <div className="main-content" id="main-content"> {props.children} </div>
        <div id={(((props.status === "hover") && props.hover) ? "navhover" : "")} className={props.status === "hover" ? "navbarr-hover" : "navbarr"} onMouseLeave={HandleMouseLeave}>
          <Navbar status={props.status} nohover={hoveroff}/>
        </div>
        <div className="blur-layer"></div>
        <div className={props.status === "hover" ? "tophover" : "hud-top"} id="temp">
          <p className={props.status === "hover" ? "tophud-text" : "notext"}>CEREBRO'22</p>
        </div>
      </div>
    </>
  );
};

export default Layout;
// 