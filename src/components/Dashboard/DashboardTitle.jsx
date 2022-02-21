import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import homeicon from "../../assets/images/home-icon.png";
import logouticon from "../../assets/images/logout-icon.png";
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
            </button>
        </div>
    )
}

export default DashboardTitle;