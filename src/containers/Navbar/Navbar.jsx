import HorizontalNavMenu from "./HorizontalNavMenu";
import BrochureNavBtn from "../../components/BrochureNavBtn/BrochureNavBtn";
import NavTimer from "./NavTimer";

import "./Navbar.scss";
const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navbar__bg-img">
        <div className="navbar__content">
          <div className={props.status === "hover" ? "navbar__content__hoverbar" : "navbar__content__hoverbar notvisible"}></div>
          <div className="navbar__hori">
            <HorizontalNavMenu nohover={props.nohover}/>
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
