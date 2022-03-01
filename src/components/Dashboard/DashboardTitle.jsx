import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import homeicon from "../../assets/images/home-icon.png";
import homeicon_mob from "../../assets/images/Dashboard-mob/mobile-home-btn.png";
import logouticon from "../../assets/images/logout-icon.png";
import logouticon_mob from "../../assets/images/Dashboard-mob/mobile-logout-btn.png";
import "./DashboardTitle.scss";

const DashboardTitle = () => {
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);

    const goToHomeHandler = () => {
        navigate("/", { replace: false })
    }
    const logoutHandler = () => {
        authCtx.logout();
        navigate("/", { replace: true })
    }
    return (
        <div className="dashboard__title-cont">
            <button className="dashboard__title-cont__home" onClick={goToHomeHandler}>
                <div className="dashboard__title-cont__home-icon">
                    <img src={homeicon} alt="home" />
                </div>
                <h3 className="dashboard__title-cont__home-title">
                    Home
                </h3>
                {/* below img is only for tab view */}
                <div className="dashboard__title-cont__home-icon--tab">
                    <img src={homeicon_mob} alt="home" />
                </div>
            </button>
            <h1 className="dashboard__title-cont__main-heading">
                Dashboard
            </h1>
            <button className="dashboard__title-cont__logout" onClick={logoutHandler}>
                <h3 className="dashboard__title-cont__logout-title">
                    Logout
                </h3>
                <div className="dashboard__title-cont__logout-icon">
                    <img src={logouticon} alt="logout" />
                </div>
                <div className="dashboard__title-cont__logout-icon--tab">
                    <img src={logouticon_mob} alt="logout" />
                </div>
            </button>
            {/* below container is only for mob view */}
            <div className="dashboard__title-cont__mob-btns-cont">
                <button
                    className="dashboard__title-cont__mob-btns-cont__home"
                    onClick={goToHomeHandler}>
                    <div className="dashboard__title-cont__mob-btns-cont__home-icon">
                        <img src={homeicon_mob} alt="home" />
                    </div>
                </button>
                <button
                    className="dashboard__title-cont__mob-btns-cont__logout"
                    onClick={logoutHandler}>
                    <div className="dashboard__title-cont__mob-btns-cont__logout-icon">
                        <img src={logouticon_mob} alt="logout" />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default DashboardTitle;