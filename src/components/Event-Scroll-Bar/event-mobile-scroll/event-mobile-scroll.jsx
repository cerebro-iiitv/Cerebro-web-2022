import React from "react";
import './event-mobile-scroll.scss';
const EventMobileScroll = ({ events, currIdx, onTouchOpen }) => {
    return (
        <div className="scroll_bar_view_port">
            <div className="scroll_bar" >
                {
                    events.map((event, idx) => (
                        <div className="particular-element" onClick={() => { onTouchOpen(idx,event)}}> <p className={idx === currIdx ? "active":""}>{event.title}</p> </div>
                    ))
                }
            </div>
        </div>
    )
}

export default EventMobileScroll;