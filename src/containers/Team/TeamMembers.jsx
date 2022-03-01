import TeamMember from "../../components/Team/TeamMember/TeamMember"
import "./TeamMembers.scss"

const TeamMembers = ({ category, selectedTeamData }) => {
    
    return (
        <div className="team-members">
            <div className="team-members-cont">
                {
                    selectedTeamData.map(({ profilepic, name, role, twitter, linked_in, github, id }) => (
                        <TeamMember
                            category = {category}
                            key={id}
                            profilepic={`${profilepic}`}
                            github={github}
                            twitter={twitter}
                            linked_in={linked_in}
                            name={name}
                            role={role}
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default TeamMembers;