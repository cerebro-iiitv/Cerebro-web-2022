import React from "react";
import "./BurgerNav.scss";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import burgericon from "../../assets/images/burger-icon.svg";

const BurgerNav = () => {
  const toggledrawer = () => {
    setdrawerOut((prevdrawerOut) => !prevdrawerOut);
  };
  const closedrawer = () => {
    setdrawerOut(false);
  };

  const auth = useAuth();
  const [drawerOut, setdrawerOut] = React.useState(false);

  return (
    <div className="hamburger-container">
      <div className="burger-container">
        <img
          className="burger-icon"
          src={burgericon}
          alt="Open menu"
          onClick={toggledrawer}
        />
      </div>

      <div
        id="blur-background"
        className={drawerOut ? "blur-background-visible" : null}
        onClick={closedrawer}
      />

      <div id="drawer" className={drawerOut ? "drawer-visible" : null}>
        <div className="burger-header">
          <div id="drawer-button" className="burger-container insidedrawer">
            <img
              className="burger-icon"
              src={burgericon}
              alt="Open menu"
              onClick={toggledrawer}
            />
          </div>
          <div className="burger-heading">CEREBRO 22</div>
          <div className="burger-spacer"></div>
        </div>

        <Link className="list_element" onClick={closedrawer} exact to="/">
          <span className="elements">Home</span>
        </Link>

        <Link className="list_element" onClick={closedrawer} to="/events">
          <span className="elements">Events</span>
        </Link>

        <Link className="list_element" onClick={closedrawer} to="/team">
          <span className="elements">Team</span>
        </Link>

        <Link className="list_element" onClick={closedrawer} to="/timeline">
          <span className="elements">Timeline</span>
        </Link>

        <Link className="list_element" onClick={closedrawer} to="/faq">
          <span className="elements">Faqs</span>
        </Link>

        <a className="list_element" onClick={closedrawer} href="https://online.fliphtml5.com/dobmw/qsik/" target="_blank" rel="noreferrer">
          <span className="elements">Brochure</span>
        </a>

        {auth.isLoggedIn ? (
          <>
            <Link className="list_button" onClick={closedrawer} to="/dashboard">
              <span className="btn_element">Dashboard</span>
            </Link>
          </>
        ) : (
          <Link className="list_button" onClick={closedrawer} to="/login">
            <span className="btn_element">Login / Signup</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default BurgerNav;
