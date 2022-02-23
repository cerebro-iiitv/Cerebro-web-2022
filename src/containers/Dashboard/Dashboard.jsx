import { useEffect, useState } from "react";
import axiosInstance from "../../services/AxiosInstance";
import DashboardTitle from "../../components/Dashboard/DashboardTitle";
import DashboardInfoCards from "../../components/Dashboard/DashboardInfoCards";
import DashboardEventsSection from "./DashboardEventsSection";
import "./Dashboard.scss";
import loadingLogo from '../../assets/images/Events/Logo.png';

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
        const isEventsSectionDataPresent = fetchedData && fetchedData.registered_events && fetchedData.registered_events.length > 1;
        return isEventsSectionDataPresent ? fetchedData.registered_events.map(
            (event) => (
                {
                    key: event.event_title,
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
                    <div className="dashboard__loading-spinner-cont">
                        <img src={loadingLogo} alt="cerebro-loading-logo" className="dashboard__loading-spinner" />
                    </div>
                    :
                    <>
                        <DashboardInfoCards  {...userData.infoCardData} />
                        <DashboardEventsSection eventsData={userData.eventsSectionData} />
                    </>
            }
        </div>
    )
}

export default Dashboard;