import HorizontalNavMenu from "./HorizontalNavMenu";
import BrochureNavBtn from "../../components/BrochureNavBtn/BrochureNavBtn";
import NavTimer from "./NavTimer";

import "./Navbar.scss";
const Navbar = (props) => {
  return (
    <div className={props.status === "hover" ? "navhover navbar" : "navbar"}>
      <div className="navbar__bg-img">
        <div className="navbar__content">
          <div className="navbar__content__hoverbar"></div>
          <div className="navbar__hori">
            <HorizontalNavMenu />
          </div>
          <div className="navbar__lower-cont">
            <BrochureNavBtn />
            <NavTimer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
