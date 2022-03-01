import React from "react";

import './EventWrapper.scss';

import Events from "./Events";
import EventMobile from "./Event-Mobile-View/event-mobile-view";

const EventWrapper = () => {
    return (
        <div className="event-wrapper">
            <div className="event-desk">
                <Events />
            </div>
            <div className="event-mobile">
                <EventMobile />

            </div>
        </div>
    )
}

export default EventWrapper;