import DashboardEventCarousel from "./DashboardEventsCarousel";
import "./DashboardEventsSection.scss";

// temp data
// const tempeventsData = [
//     {
//         eventName: "Valorant", startDate: "10-03-2022", startTime: "2:00PM", isTeamEvent: true, noMembersInTeam: "3", teamMaxCapacity: "3", teamName: "ValoXD", isTeamFull: true,
//     },
//     {
//         eventName: "Valorant", startDate: "10-03-2022", startTime: "2:00PM", isTeamEvent: true, noMembersInTeam: "3", teamMaxCapacity: "3", teamName: "ValoXD", isTeamFull: true,
//     },
//     {
//         eventName: "Valorant", startDate: "10-03-2022", startTime: "2:00PM", isTeamEvent: true, noMembersInTeam: "3", teamMaxCapacity: "3", teamName: "ValoXD", isTeamFull: true,
//     },
//     {
//         eventName: "Valorant", startDate: "10-03-2022", startTime: "2:00PM", isTeamEvent: true, noMembersInTeam: "3", teamMaxCapacity: "3", teamName: "ValoXD", isTeamFull: true,
//     },
//     {
//         eventName: "Valorant", startDate: "10-03-2022", startTime: "2:00PM", isTeamEvent: true, noMembersInTeam: "3", teamMaxCapacity: "3", teamName: "ValoXD", isTeamFull: true,
//     },
//     {
//         eventName: "Valorant", startDate: "10-03-2022", startTime: "2:00PM", isTeamEvent: true, noMembersInTeam: "3", teamMaxCapacity: "3", teamName: "ValoXD", isTeamFull: true,
//     },
//     {
//         eventName: "Valorant", startDate: "10-03-2022", startTime: "2:00PM", isTeamEvent: true, noMembersInTeam: "3", teamMaxCapacity: "3", teamName: "ValoXD", isTeamFull: true,
//     },
//     {
//         eventName: "Valorant", startDate: "10-03-2022", startTime: "2:00PM", isTeamEvent: true, noMembersInTeam: "3", teamMaxCapacity: "3", teamName: "ValoXD", isTeamFull: true,
//     },
// ]

const DashboardEventsSection = ({ eventsData }) => {
    return (
        <div className="dashboard-events">
            <div className="dashboard-events__title">
                My Events
            </div>
            {!eventsData.length &&
                <h3 className="dashboard-events__no-events">You haven't registered for any events yet.</h3>}
            {eventsData.length &&
                <DashboardEventCarousel eventsData={eventsData} />
                // <DashboardEventCarousel eventsData={tempeventsData} />
            }
        </div>
    )
}

export default DashboardEventsSection;