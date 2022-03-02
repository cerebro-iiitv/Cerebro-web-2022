import DashboardCardWrapper from "./Wrapper/DashboardCardWrapper";
import "./DashboardAboutCard.scss";
import { Link } from "react-router-dom";
const DashboardAboutCard = ({ name, instituteName, email, mobileNo }) => {
    return (
        <DashboardCardWrapper darkBg={true} className="dashboard-about-card">
            <div className="dashboard-about-card__row">
                <div className="dashboard-about-card__row__title">Name</div>
                <div className="dashboard-about-card__row__value">{name}</div>
            </div>
            <div className="dashboard-about-card__row">
                <div className="dashboard-about-card__row__title">Institute</div>
                <div className="dashboard-about-card__row__value">{instituteName}</div>
            </div>
            <div className="dashboard-about-card__row">
                <div className="dashboard-about-card__row__title">Email</div>
                <div className="dashboard-about-card__row__value">{email}</div>
            </div>
            <div className="dashboard-about-card__row">
                <div className="dashboard-about-card__row__title">Contact No.</div>
                <div className="dashboard-about-card__row__value">{mobileNo}</div>
            </div>
            
            <div className="pass-reset-main"><Link to="/change-password"><p className="pass-reset-text">Reset Password</p></Link></div>

        </DashboardCardWrapper>
    )
}

export default DashboardAboutCard;