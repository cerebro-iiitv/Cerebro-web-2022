import { useEffect, useState } from "react";
import axiosInstance from "../../services/AxiosInstance";
import TeamMembers from "./TeamMembers";

import "./Team.scss"

const teamOptionsArr = ["Core", "Public Relation", "Core Support", "Web Dev", "Design", "Video Editing", "Gaming"];
const Team = () => {
    const [teamData, setTeamData] = useState({});
    const [selectedTeam, setSelectedTeam] = useState("Core");

    let selectedTeamData = [];
    for (let i in teamData) {
        if (i === selectedTeam) {
            selectedTeamData = teamData[i];
        }
    }

    useEffect(() => {
        axiosInstance.get("/teams", {
            "Content-Type": "application/json",
        }).then(res => setTeamData(res.data));
    }, []);

    return (
        <div className="team">
            <TeamMembers selectedTeamData={selectedTeamData} />
            {/* <TeamSelector /> */}
            {teamOptionsArr.map((element) => (
                <button key={element} onClick={() => { setSelectedTeam(element) }}>{element}</button>
            ))}
        </div>
    )
}

export default Team;