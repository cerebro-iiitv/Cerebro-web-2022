import { useEffect, useState } from "react";
import axiosInstance from "../../services/AxiosInstance";
import DashboardTitle from "../../components/Dashboard/DashboardTitle";
import DashboardInfoCards from "../../components/Dashboard/DashboardInfoCards";
import DashboardEventsSection from "./DashboardEventsSection";

const Dashboard = () => {
    const [userData, setUserData] = useState(null);

    const isInfoCardDataPresent = userData && userData.personal_details;
    const infoCardData = isInfoCardDataPresent ? {
        name: userData.personal_details.first_name + " " + userData.personal_details.last_name,
        instituteName: userData.personal_details.institute_name,
        email: userData.personal_details.email,
        mobileNo: userData.personal_details.mobile_number,
        noOfRegsiteredEvents: userData.registered_events.length
    } : {};

    const isEventsSectionDataPresent = userData && userData.registered_events && userData.registered_events.length;
    const eventsSectionData = isEventsSectionDataPresent ? userData.regsitered_events.map(
        (event) => (
            {
                eventName: event.event_title,
                startDate: event.start_date,
                startTime: event.start_time,
                isTeamEvent: event.is_team_event,
                noMembersInTeam: event.current_size,
                teamMaxCapacity: event.max_size,
                teamName: event.team_name,
                isTeamFull: event.is_full,
            }
        )
    ) : [];

    useEffect(() => {
        axiosInstance.get("/account/dashboard/").then(res => {
            setUserData(res.data);
        });
    }, []);
    return (
        <div className="dashboard">
            <DashboardTitle />
            <DashboardInfoCards  {...infoCardData} />
            <DashboardEventsSection eventsData={eventsSectionData} />
        </div>
    )
}

export default Dashboard;