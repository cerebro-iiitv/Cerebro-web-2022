import React from "react";
import './event-mobile-scroll.scss';
const EventMobileScroll = ({ events, currIdx, onTouchOpen }) => {
    return (
        <div className="scroll_bar_view_port">
            <div className="scroll_bar" >
                {
                    events.map((event, idx) => {
                        if(event.title === "Counter-Strike: Global Offensive"){
                            event.title = "CSGO"
                        } else if(event.title === "Call of Duty: Mobile"){
                            event.title = "CODM"
                        }
                       return <div className="particular-element" onClick={() => { onTouchOpen(idx,event)}}> <p className={idx === currIdx ? "active":""}>{event.title}</p> </div>
                    })
                }
            </div>
        </div>
    )
}

export default EventMobileScroll;