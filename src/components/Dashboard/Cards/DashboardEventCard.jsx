import DashboardCardWrapper from "./Wrapper/DashboardCardWrapper";
import checkmarkimg from "../../../assets/images/dashboard-event-regismark.png";
import "./DashboardEventCard.scss";

const DashboardEventCard = ({ eventName, startDate, startTime, isTeamEvent, noMembersInTeam, teamMaxCapacity, teamName, isTeamFull, isEventsMoreThan5 }) => {
    return (
        <DashboardCardWrapper className="dashboard-event-carousel-card" giveInlineFlex={isEventsMoreThan5}>
            <div className="dashboard-event-carousel-card__title">{eventName.toUpperCase()}</div>
            <div className="dashboard-event-carousel-card__dt-cont">
                <div className="dashboard-event-carousel-card__dt-cont__date">{startDate}</div>
                <div className="dashboard-event-carousel-card__dt-cont__time">{startTime}</div>
            </div>
            {
                isTeamEvent &&
                <>
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
                        isTeamFull &&
                        <div className="dashboard-event-carousel-card__checkmark">
                            <img src={checkmarkimg} alt="check" />
                        </div>
                    }
                </>
            }
        </DashboardCardWrapper>
    )
}

export default DashboardEventCard;