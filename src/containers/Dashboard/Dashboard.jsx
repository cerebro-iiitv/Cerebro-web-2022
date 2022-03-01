import { useEffect, useState } from "react";
import axiosInstance from "../../services/AxiosInstance";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import DashboardTitle from "../../components/Dashboard/DashboardTitle";
import DashboardInfoCards from "../../components/Dashboard/DashboardInfoCards";
import DashboardEventsSection from "./DashboardEventsSection";
import "./Dashboard.scss";


const temp = {
    personal_details: {
        first_name: "Krishna",
        last_name: "Gaur",
        institute_name: "IIITV",
        email: "201951083@gmail.com",
        mobile_number: "9460892963"
    },
    registered_events: [
        {
            event_title: "Penumbera",
            start_time: "18/03/2022-3:00 pm",
            end_time: "20/03/2022-3:00 pm",
            is_team_event: false,
            registration_data: {
                hacker_earth_id: "1"
            },
            submission_data: null
        },
        {
            event_title: "Lights, Camera, Action",
            start_time: "18/03/2022-3:00 pm",
            end_time: "20/03/2022-3:00 pm",
            is_team_event: true,
            max_size: 2,
            team_captain: "201951083@gmail.com",
            team_name: "Forever Silver Niggas Forever Silver Niggas",
            current_size: 1,
            is_full: false,
            team_code: "RCL#00001",
            submission_data: null,
            team_member: [
                {
                    first_name: "Krishna",
                    last_name: "Gaur",
                    email: "201951083@gmail.com",
                    registration_data: {
                        ign: "Paradox@123",
                        epic_games_id: 11204
                    }
                }
            ]
        },
        {
            event_title: "Rocket League",
            start_time: "18/03/2022-3:00 pm",
            end_time: "20/03/2022-3:00 pm",
            is_team_event: true,
            max_size: 2,
            team_captain: "201951083@gmail.com",
            team_name: "Forever Silver Niggas",
            current_size: 2,
            is_full: true,
            team_code: "RCL#00001",
            submission_data: null,
            team_member: [
                {
                    first_name: "Raghu Raj",
                    last_name: "Sodani",
                    email: "201951118@iiitvadodara.ac.in",
                    registration_data: {
                        ign: "Smoke@123",
                        epic_games_id: 22104
                    }
                },
                {
                    first_name: "Krishna",
                    last_name: "Gaur",
                    email: "201951083@gmail.com",
                    registration_data: {
                        ign: "Paradox@123",
                        epic_games_id: 11204
                    }
                }
            ]
        },
    ]
};


const Dashboard = () => {
    const [userData, setUserData] = useState({ infoCardData: {}, eventsSectionData: [] });
    const [isLoading, setIsLoading] = useState(true);

    console.log(userData);

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
            (event) => {
                const startDate = event.start_time.substring(0, 10);
                const startTime = event.start_time.substring(11, event.start_time.length);
                console.log(startDate);
                console.log(startTime);
                const endDate = event.end_time.substring(0, 10);
                const endTime = event.end_time.substring(11, event.end_time.length);
                console.log(endDate);
                console.log(endTime);
                return {
                    key: event.event_title,
                    eventName: event.event_title,
                    startDate: startDate,
                    startTime: startTime,
                    endDate: endDate,
                    endTime: endTime,
                    isTeamEvent: event.is_team_event,
                    registrationData: event.registration_data,
                    teamName: event.team_name,
                    teamCode: event.team_code,
                    noMembersInTeam: event.current_size,
                    teamMaxCapacity: event.max_size,
                    isTeamFull: event.is_full,
                    teamMember: event.team_member,
                }
            }
        ) : [];
    }

    useEffect(() => {
        // axiosInstance.get("/account/dashboard/").then(res => {
        //     const infoCardData = getInfoCardData(res.data);
        //     const eventsSectionData = getEventsSectionData(res.data);
        //     setUserData({ infoCardData, eventsSectionData });
        //     setIsLoading(false);
        // });

        const infoCardData = getInfoCardData(temp);
        const eventsSectionData = getEventsSectionData(temp);
        setUserData({ infoCardData, eventsSectionData });
        setIsLoading(false);
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