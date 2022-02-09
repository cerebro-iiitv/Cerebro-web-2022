import React, { useEffect, useState } from "react";

import './main-event.styles.scss';
import eventJson from '../../assets/jsons/events.json'
import { ParticularEvent } from "../particular-event/particular-event.component";

import { default as sphere} from '../../assets/images/sphere.svg';
import {default as line} from '../../assets/images/line.svg';
import {default as selectionDot} from '../../assets/images/selection-dot.svg';
import {default as button} from '../../assets/images/button.svg';
import {default as buttonLeft} from '../../assets/images/button-left.svg'

const Events = () => {
    const [events, setEvents] = useState([]);
    const [visible, setVisible] = useState(0);
    const [currEvent, setCurrEvent] = useState({});
    const [isActive, setIsActive] = useState(false);
    const [bgColor, setBgColor] = useState({});

    useEffect(function eventHandler() {
        setEvents(eventJson.events);
    }, []);

    const loadMore6 = () => {
        setVisible(visible + 6);
    }
    const loadless6 = () => {
        setVisible(visible - 6);
    }

    function loadPage(event,idx) {
        setCurrEvent(event);
        setIsActive(true);
        setBgColor({color: '#FFFCC9', id: idx});
    }
    return (
        <div className="main-event">
            <div className="event-outer">
                
                <div className="upper-nav">

                </div>

                <div className="event-rendering">
                    {
                        isActive === true ? <ParticularEvent key={currEvent.id} title={currEvent.name} deadline={currEvent.deadline} prize={currEvent.price} />
                            : <p></p>
                    }

                </div>

                <div className="event-scroller">

                    <div className="button-cover1">
                         <img onClick={loadless6} className={visible === 0 ? "button disable" : "button1"} src = {buttonLeft} />
                    </div>
                   
                    <div className="scroll-bar">
                        <img src={line} alt="nav-line"  className="nav-line"/>
                        {
                            events.slice(visible, visible + 6).map((event,idx) => (
                                <div onClick={() => { return loadPage(event,idx+visible) }} key={event.id} className="particular-element">
                                        <img src={sphere} alt="small-sphere" className="sphere"/>
                                        <img src={selectionDot} alt="selection-dot" className={idx+visible === bgColor.id ? "showDot dot"  : "dot"} />
                                        <h4 style={idx+visible === bgColor.id ? {color: bgColor.color}:{color: "white"}} className={idx % 2 !==0 ? "text-down" : "text-up"}>{event.name}</h4>
                                </div>
                            ))
                        }
                    </div>
                    
                    <div className="button-cover2">
                        <img onClick={loadMore6} src = {button} className={visible === 18 ? "button disable" : "button2"} />
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Events;