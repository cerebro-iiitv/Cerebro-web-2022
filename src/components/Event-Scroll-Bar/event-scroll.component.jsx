import React from "react";

import { default as button } from '../../assets/images/Events/button.png';

import { EventScrollItem } from "../EventScrollItem/event-scroll-item.component";
import './event-scroll.styles.scss';

const EventScrollBar = ({ visible, loadless6, loadMore6, currIdx, events, loadPage }) => {

    return (
        <div className="scroll-bar-button">
            <div className="button-cover1">
                <img onClick={loadless6} alt="nav-button-left" className={visible === 0 ? "button1 disable" : "button1"} src={button} />
            </div>


            <div className="scroll-bar">
                {
                    events.slice(visible, visible+7).map((event,idx) => (
                        <EventScrollItem event = {event} idx = {idx} currIdx = {currIdx} visible={visible} loadPage={loadPage} />
                    ))
                }
            </div>
            
            <div className="button-cover2">
                <img onClick={loadMore6} src={button} alt="nav-button-right" className={visible === 15 ? "button2 disable" : "button2"} />
            </div>

        </div>
    )
}

export default EventScrollBar;