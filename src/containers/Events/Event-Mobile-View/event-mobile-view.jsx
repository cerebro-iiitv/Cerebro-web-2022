import React, { useState, useEffect } from "react";
import axiosInstance from "../../../services/AxiosInstance";
import {default as logo} from '../../../assets/images/Events/Logo.png';

import { default as useAuth } from '../../../hooks/useAuth';
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

import EventMobileScroll from "../../../components/Event-Scroll-Bar/event-mobile-scroll/event-mobile-scroll";
import ParticularMobileEvent from "../../../components/particular-event/particular-event-mobile/particular-event-mobile";
import './event-mobile-view.scss';
const EventMobile = () => {
    const [events, setEvents] = useState([]);
    const [currEvent, setCurrEvent] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [currIdx, setCurrIdx] = useState(0);

  const auth = useAuth();

    useEffect(() => {
        async function fetchData() {
            // Using axios instance to get the data
            var data = await axiosInstance.get('/events/');
            data = data.data;
            // To change the name of csgo and codm
            data[8].title = "CSGO";
            data[11].title = "CODM";

            // swap event at index 14 and 17
            var temp = data[14];
            data[14] = data[17];
            data[17] = temp;

            setCurrEvent(data[0]);
            setEvents(data);
            setLoading(false);
        }
        fetchData();
    }, []);

    function onTouchLoadEvent (idx, event) {
        setCurrIdx(idx);
        setCurrEvent(event);
    }

    return (
        <div className="event-base">
            {
                isLoading === true 
                ? 
                    <LoadingSpinner />
                :
                    <div className="main-cont">
                        <div className="event-mobile-scrollbar">
                            <EventMobileScroll events = {events} currIdx = {currIdx} onTouchOpen={onTouchLoadEvent}/>
                        </div>

{/* Continue with the making of following components */}

                        <div className="particular-event-display">
                            <ParticularMobileEvent isLogged = {auth.isLoggedIn} currEvent = {currEvent}/>
                        </div>

                    </div>
            }
        </div>
    )
}

export default EventMobile;