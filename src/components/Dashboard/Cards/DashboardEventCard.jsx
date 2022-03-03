import { useState } from "react";
import DashboardCardWrapper from "./Wrapper/DashboardCardWrapper";
import EventModal from "../../../containers/EventModal/EventModal";
import checkmarkimg from "../../../assets/images/dashboard-event-regismark.png";
import "./DashboardEventCard.scss";

const DashboardEventCard = ({ eventData, isEventsMoreThan5, participantDetails }) => {
    const {
        eventName,
        startDate,
        startTime,
        isTeamEvent,
        noMembersInTeam,
        teamMaxCapacity,
        teamName,
        isTeamFull } = eventData;
    const [showEventModal, setShowEventModal] = useState(false);
    const checkMarkCondition = !isTeamEvent || isTeamFull;
    const showModal = () => {
        setShowEventModal(true);
    }
    return (
        <>
            <DashboardCardWrapper className="dashboard-event-carousel-card"
                giveInlineFlex={isEventsMoreThan5}
                onClick={showModal}
            >
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
                    </>
                }
                {
                    checkMarkCondition &&
                    <div className="dashboard-event-carousel-card__checkmark">
                        <img src={checkmarkimg} alt="check" />
                    </div>
                }
            </DashboardCardWrapper>
            {showEventModal &&
                <EventModal
                    setShowModal={setShowEventModal}
                    modalData={{ ...participantDetails, ...eventData }} />}
        </>
    )
}

export default DashboardEventCard;