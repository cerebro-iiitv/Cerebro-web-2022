import React, { useEffect, useState } from "react";

import './team-mobile-view.scss';
import TeamItem from "../../../components/Team/TeamItem/TeamItem";
import axiosInstance from "../../../services/AxiosInstance";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import TeamScrollMobile from "../../../components/Team/TeamSroll/TeamScroll";

const teamOptionsArr = ["Core", "PR", "Core Support", "Web Dev", "Design", "Video Editing", "Gaming"];

const TeamMobile = () => {
    const [teamData, setTeamData] = useState([]);
    const [currTeam, setCurrentTeam] = useState({});
    const [currIdx, setCurrIdx] = useState(0);
    const [isLoading, setLoading] = useState(true);

    
    useEffect(() => {
        async function fetchData() {
            var data = await axiosInstance.get('/teams/');
            setTeamData(data.data);
            setCurrentTeam(data.data["Core"]);
            setLoading(false);
        }
        fetchData();
    }, []);

    const openOnTouch = (team, idx) => {
        setCurrentTeam(teamData[team]);
        setCurrIdx(idx);
    }
    
    return (
        <div className="team-layout">
            {
                isLoading ? <LoadingSpinner />
                    :
                    <div className="team-mobile">
                        <div className="team-title">
                        <p className="title">Team</p>
                        </div>
                        <div className="team-items">
                            <TeamItem currTeam = {currTeam}/>
                        </div>
                        <div className="team-scroll-bar">
                            <TeamScrollMobile teamOptions={teamOptionsArr} onTouchOpen = {openOnTouch} currIdx={currIdx}/>
                        </div>
                    </div>

            }

        </div>
    )
}

export default TeamMobile;