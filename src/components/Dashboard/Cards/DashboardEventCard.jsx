import DashboardCardWrapper from "./Wrapper/DashboardCardWrapper";
import checkmarkimg from "../../../assets/images/dashboard-event-regismark.png";
import "./DashboardEventCard.scss";

const DashboardEventCard = ({ title, date, time, noMembersInTeam, teamMaxCapacity, teamName, isRegistered }) => {
    return (
        <DashboardCardWrapper className="dashboard-event-carousel-card">
            <div className="dashboard-event-carousel-card__title">{title.toUpperCase()}</div>
            <div className="dashboard-event-carousel-card__dt-cont">
                <div className="dashboard-event-carousel-card__dt-cont__date">{date}</div>
                <div className="dashboard-event-carousel-card__dt-cont__time">{time}</div>
            </div>
            <div className="dashboard-event-carousel-card__team-size">
                <span>
                    Team size :
                </span>
                <span>
                    {noMembersInTeam}/{teamMaxCapacity}
                </span>
            </div>
            <div className="dashboard-event-carousel-card__team-name">
                <div className="dashboard-event-carousel-card__team-name__title">
                    Team Name
                </div>
                <div className="dashboard-event-carousel-card__team-name__value">
                    {teamName}
                </div>
            </div>
            {
                isRegistered &&
                <div className="dashboard-event-carousel-card__checkmark">
                    <img src={checkmarkimg} alt="check" />
                </div>
            }
        </DashboardCardWrapper>
    )
}

export default DashboardEventCard;