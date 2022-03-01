import { useEffect, useState } from "react";
import axiosInstance from "../../services/AxiosInstance";
import TeamMembers from "./TeamMembers";
import TeamSelector from "../../components/Team/TeamSelector/TeamSelector";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import "./Team.scss";

const teamOptionsArr = ["Core", "PR", "Core Support", "Web Dev", "Design", "Video Editing", "Gaming"];

const Team = () => {
    const [teamData, setTeamData] = useState({});
    const [selectedTeam, setSelectedTeam] = useState("Core");
    const [selectedTeamData, setSelectedTeamData] = useState([]);
    const [showLoadingSpinner, setShowLoadingSpinner] = useState(true);

    useEffect(() => {
        axiosInstance.get("/teams").then(res => setTeamData(res.data));
    }, []);

    useEffect(() => {
        setShowLoadingSpinner(true);
        for (let i in teamData) {
            if (i === selectedTeam) {
                setSelectedTeamData(teamData[i]);
            }
        }
        setShowLoadingSpinner(false);
    }, [selectedTeam, showLoadingSpinner, teamData]);

    return (
        <div className="team">
            {
                showLoadingSpinner
                    ? <LoadingSpinner />
                    :
                    <>
                        <TeamMembers selectedTeamData={selectedTeamData} />
                        <TeamSelector
                            teamOptions={teamOptionsArr}
                            setSelectedTeam={setSelectedTeam}
                            selectedTeam={selectedTeam} />
                    </>
            }
        </div>
    )
}

export default Team;