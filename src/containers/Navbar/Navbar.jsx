import HorizontalNavMenu from "./HorizontalNavMenu";
import BrochureNavBtn from "../../components/BrochureNavBtn/BrochureNavBtn";
import NavTimer from "./NavTimer";

import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__bg-img">
                <HorizontalNavMenu />
                <div className="navbar__lower-cont">
                    <BrochureNavBtn />
                    <NavTimer />
                </div>
            </div>
        </div>
    )
}

export default Navbar;