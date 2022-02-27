import TeamSelectorItem from '../../../containers/Team/TeamSelectorItem';
import './TeamSelector.scss';

const TeamSelector = ({ teamOptions, selectedTeam, setSelectedTeam }) => {
    return (
        <div className="team-selector">
            {
                teamOptions.map((teamTitle, index) => (
                    <TeamSelectorItem
                        title={teamTitle}
                        selectedItem={selectedTeam}
                        setSelectedTeam={setSelectedTeam}
                        isEvenNumbered={(index + 1) % 2 === 0} />
                ))
            }
        </div>
    )
}

export default TeamSelector;