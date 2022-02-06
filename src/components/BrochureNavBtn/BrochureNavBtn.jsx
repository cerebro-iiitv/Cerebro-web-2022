import { NavLink } from "react-router-dom";

import brochure_nav_btn from "../../assets/images/brochure_nav_btn.svg"
import brochure_nav_btn_top from "../../assets/images/brochure_nav_btn_top.svg"
import "./BrochureNavBtn.scss";

const BrochureNavBtn = () => {
    return (
        <div className="brochure-btn-cont">
            {/* <NavLink to=""> */}
            <div className="brochure_link">
                <img src={brochure_nav_btn_top} alt="" />
                <img src={brochure_nav_btn} alt="brochure" />
            </div>
            {/* </NavLink> */}
        </div>
    )
}

export default BrochureNavBtn;