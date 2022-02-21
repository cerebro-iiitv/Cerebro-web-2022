import DashboardCardWrapper from "./Wrapper/DashboardCardWrapper";
import "./DashboardAboutCard.scss";

const DashboardAboutCard = ({ name, institute, email, contactnum }) => {
    return (
        <DashboardCardWrapper darkBg={true} className="dashboard-about-card">
            <div className="dashboard-about-card__row">
                <div className="dashboard-about-card__row__title">Name</div>
                <div className="dashboard-about-card__row__value">{name}</div>
            </div>
            <div className="dashboard-about-card__row">
                <div className="dashboard-about-card__row__title">Institute</div>
                <div className="dashboard-about-card__row__value">{institute}</div>
            </div>
            <div className="dashboard-about-card__row">
                <div className="dashboard-about-card__row__title">Email</div>
                <div className="dashboard-about-card__row__value">{email}</div>
            </div>
            <div className="dashboard-about-card__row">
                <div className="dashboard-about-card__row__title">Contact No.</div>
                <div className="dashboard-about-card__row__value">{contactnum}</div>
            </div>
        </DashboardCardWrapper>
    )
}

export default DashboardAboutCard;