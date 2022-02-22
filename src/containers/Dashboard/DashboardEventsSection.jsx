import DashboardEventCarousel from "./DashboardEventsCarousel";
import "./DashboardEventsSection.scss";

// temp data
const tempeventsData = [
    {
        eventName: "Valorant", startDate: "10-03-2022", startTime: "2:00PM", isTeamEvent: true, noMembersInTeam: "3", teamMaxCapacity: "3", teamName: "ValoXD", isTeamFull: true,
    },
    {
        eventName: "Cook-a-code", startDate: "10-03-2022", startTime: "2:00PM", isTeamEvent: false
    },
    {
        eventName: "Hired", startDate: "10-03-2022", startTime: "2:00PM", isTeamEvent: true, noMembersInTeam: "1", teamMaxCapacity: "3", teamName: "ValoXD", isTeamFull: false,
    },
    {
        eventName: "Valorant", startDate: "10-03-2022", startTime: "2:00PM", isTeamEvent: true, noMembersInTeam: "3", teamMaxCapacity: "3", teamName: "ValoXD", isTeamFull: true,
    },
    {
        eventName: "Cook-a-code", startDate: "10-03-2022", startTime: "2:00PM", isTeamEvent: false
    },
    {
        eventName: "Hired", startDate: "10-03-2022", startTime: "2:00PM", isTeamEvent: true, noMembersInTeam: "1", teamMaxCapacity: "3", teamName: "ValoXD", isTeamFull: false,
    },
    {
        eventName: "Valorant", startDate: "10-03-2022", startTime: "2:00PM", isTeamEvent: true, noMembersInTeam: "3", teamMaxCapacity: "3", teamName: "ValoXD", isTeamFull: true,
    },
    {
        eventName: "Cook-a-code", startDate: "10-03-2022", startTime: "2:00PM", isTeamEvent: false
    },
    {
        eventName: "Hired", startDate: "10-03-2022", startTime: "2:00PM", isTeamEvent: true, noMembersInTeam: "1", teamMaxCapacity: "3", teamName: "ValoXD", isTeamFull: false,
    },
]

const DashboardEventsSection = ({ eventsData }) => {
    return (
        <div className="dashboard-events">
            <div className="dashboard-events__title">
                My Events
            </div>
            {/* <DashboardEventCarousel eventsData={eventsData} /> */}
            <DashboardEventCarousel eventsData={tempeventsData} />
        </div>
    )
}

export default DashboardEventsSection;