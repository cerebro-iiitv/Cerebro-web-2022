import { useEffect, useState } from "react";
import axiosInstance from "../../services/AxiosInstance";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import DashboardTitle from "../../components/Dashboard/DashboardTitle";
import DashboardInfoCards from "../../components/Dashboard/DashboardInfoCards";
import DashboardEventsSection from "./DashboardEventsSection";
import "./Dashboard.scss";

const Dashboard = () => {
    const [userData, setUserData] = useState({ infoCardData: {}, eventsSectionData: [] });
    const [isLoading, setIsLoading] = useState(true);

    const getInfoCardData = (fetchedData) => {
        const isInfoCardDataPresent = fetchedData && fetchedData.personal_details;
        return isInfoCardDataPresent ? {
            name: fetchedData.personal_details.first_name + " " + fetchedData.personal_details.last_name,
            instituteName: fetchedData.personal_details.institute_name,
            email: fetchedData.personal_details.email,
            mobileNo: fetchedData.personal_details.mobile_number,
            noOfRegsiteredEvents: fetchedData.registered_events.length
        } : {};
    }

    const getEventsSectionData = (fetchedData) => {
        const isEventsSectionDataPresent = fetchedData && fetchedData.registered_events && fetchedData.registered_events.length > 0;
        return isEventsSectionDataPresent ? fetchedData.registered_events.map(
            (event) => (
                {
                    key: event.event_title,
                    eventName: event.event_title,
                    startDate: event.start_date,
                    startTime: event.start_time,
                    endDate: event.end_date,
                    endTime: event.end_time,
                    isTeamEvent: event.is_team_event,
                    registrationData: event.registration_data,
                    teamName: event.team_name,
                    teamCode: event.team_code,
                    noMembersInTeam: event.current_size,
                    teamMaxCapacity: event.max_size,
                    isTeamFull: event.is_full,
                    teamMember: event.team_member,
                }
            )
        ) : [];
    }

    useEffect(() => {
        axiosInstance.get("/account/dashboard/").then(res => {
            const infoCardData = getInfoCardData(res.data);
            const eventsSectionData = getEventsSectionData(res.data);
            setUserData({ infoCardData, eventsSectionData });
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="dashboard">
            <DashboardTitle />
            {
                isLoading
                    ?
                    <LoadingSpinner />
                    :
                    <>
                        <DashboardInfoCards  {...userData.infoCardData} />
                        <DashboardEventsSection
                            eventsData={userData.eventsSectionData}
                            participantDetails={{
                                participantName: userData.infoCardData.name,
                                participantEmail: userData.infoCardData.email
                            }}
                        />
                    </>
            }
        </div>
    )
}

export default Dashboard;