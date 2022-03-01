import brochure_nav_btn from "../../assets/images/brochure_nav_btn.svg"
import brochure_nav_btn_top from "../../assets/images/brochure_nav_btn_top.svg"
import "./BrochureNavBtn.scss";

const BrochureNavBtn = () => {
    return (
        <div className="brochure-btn-cont">
            <a
                href="https://online.fliphtml5.com/nmsmv/flhr/"
                target="_blank"
                rel="noreferrer"
            >
                <div className="brochure_link">
                    <img src={brochure_nav_btn_top} alt="" className="brotop" />
                    <img src={brochure_nav_btn} alt="brochure" style={{ cursor: "pointer" }} className="bro" />
                </div>
            </a>
        </div>
    )
}

export default BrochureNavBtn;