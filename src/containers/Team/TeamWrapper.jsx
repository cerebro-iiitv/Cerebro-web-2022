import React from "react";

import './TeamWrapper.scss';

import Team from "./Team";
import TeamMobile from "./TeamMobileView/team-mobile-view";

const TeamWrapper = () => {
    return (
        <div className="team-wrapper">
            <div className="team-desk">
                <Team />
            </div>
            <div className="team-mobile">
                <TeamMobile />
            </div>
        </div>
    )
}

export default TeamWrapper;