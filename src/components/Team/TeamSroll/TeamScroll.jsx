import React from "react";
import './TeamScroll.scss';

const TeamScrollMobile = ({teamOptions, onTouchOpen, currIdx}) => {
    return(
        <div className="team_wrapper">
            <div className="team-scroll-bar">
                {
                    teamOptions.map((option, idx) => (
                        <div className="particular-team" onClick={() => {onTouchOpen(option,idx)}}><p className={currIdx === idx ? "active" : ""}>{option}</p></div>
                    ))
                }
            </div>
        </div>
    )
}

export default TeamScrollMobile;