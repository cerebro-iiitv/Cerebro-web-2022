import DashboardEventCarousel from "./DashboardEventsCarousel";
import "./DashboardEvents.scss";

// temp data
const eventsData = [
    {
        title: "1", date: "10-03-2022", time: "2:00PM", noMembersInTeam: "3", teamMaxCapacity: "3", teamName: "ValoXD", isRegistered: true
    },
    {
        title: "2", date: "10-03-2022", time: "2:00PM", noMembersInTeam: "3", teamMaxCapacity: "3", teamName: "ValoXD", isRegistered: true
    },
    {
        title: "3", date: "10-03-2022", time: "2:00PM", noMembersInTeam: "3", teamMaxCapacity: "3", teamName: "ValoXD", isRegistered: true
    },
    {
        title: "4", date: "10-03-2022", time: "2:00PM", noMembersInTeam: "3", teamMaxCapacity: "3", teamName: "ValoXD", isRegistered: true
    },
    {
        title: "Valorant", date: "10-03-2022", time: "2:00PM", noMembersInTeam: "3", teamMaxCapacity: "3", teamName: "ValoXD", isRegistered: true
    },
    {
        title: "6", date: "10-03-2022", time: "2:00PM", noMembersInTeam: "3", teamMaxCapacity: "3", teamName: "ValoXD", isRegistered: true
    },
    {
        title: "7", date: "10-03-2022", time: "2:00PM", noMembersInTeam: "3", teamMaxCapacity: "3", teamName: "ValoXD", isRegistered: true
    },
    {
        title: "8", date: "10-03-2022", time: "2:00PM", noMembersInTeam: "3", teamMaxCapacity: "3", teamName: "ValoXD", isRegistered: true
    },
    {
        title: "9", date: "10-03-2022", time: "2:00PM", noMembersInTeam: "3", teamMaxCapacity: "3", teamName: "ValoXD", isRegistered: true
    },
]

const DashboardEvents = () => {
    return (
        <div className="dashboard-events">
            <div className="dashboard-events__title">
                My Events
            </div>
            <DashboardEventCarousel eventsData={eventsData} />
        </div>
    )
}

export default DashboardEvents;