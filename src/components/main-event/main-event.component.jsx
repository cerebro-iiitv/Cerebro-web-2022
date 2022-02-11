import React, { useEffect, useState } from "react";

import './main-event.styles.scss';
import eventJson from '../../assets/jsons/events.json'
import { ParticularEvent } from "../particular-event/particular-event.component";

import { default as sphere} from '../../assets/images/sphere.svg';
import {default as line} from '../../assets/images/line.svg';
import {default as selectedDot} from '../../assets/images/selected-dot.svg';
import {default as button} from '../../assets/images/button.svg';
// import {default as buttonLeft} from '../../assets/images/button-left.svg'

const Events = () => {
    const [events, setEvents] = useState([]);
    const [visible, setVisible] = useState(0);
    const [currEvent, setCurrEvent] = useState({});
    const [isActive, setIsActive] = useState(false);
    const [bgColor, setBgColor] = useState({id: -1, color: '#FFFCC9'});
    const [tweaker, setTweaker] = useState({up: false, down: false});

    useEffect(async function eventHandler() {
        const response = await fetch('http://cerebro2022.herokuapp.com/events/');
        var data = await response.json();
        setEvents(data);
    }, []);

    const loadMore6 = () => {
        setVisible(visible + 5);
    }
    const loadless6 = () => {
        setVisible(visible - 5);
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
                        isActive === true ? <ParticularEvent key={currEvent.id} title={currEvent.title} prize={currEvent.prize} team_size = {currEvent.team_size} start_time = {currEvent.start_time} end_time = {currEvent.end_time} description = {currEvent.description}/>
                            : <ParticularEvent key={1} title={"Tech Hunt"} prize={10000} team_size = {5} start_time = {"18/3/2022"} end_time = {"20/3/2022"} description = {"Tech Hunt event"}/>
                    }

                </div>

                <div className="event-scroller">
                    <div className="button-cover1">
                         <img onClick={loadless6} className={visible === 0 ? "button disable" : "button1"} src = {button} />
                    </div>     
                    <div className="scroll-bar">
                        {
                            events.slice(visible, visible + 7).map((event,idx) => (
                                <div onClick={() => { loadPage(event,idx+visible)}} key={event.id} className={ (idx % 6 === 0 && visible !== 0) || (visible === 0 && idx === 6) ? "disable-on particular-element" : "particular-element"}>
                                        <img src={idx + visible === bgColor.id ? selectedDot : sphere} alt="small-sphere" className="sphere"/>
                                        {/* <img src={selectedDot} alt="selected-dot" className={idx+visible === bgColor.id ? "showDot dot"  : "dot"} /> */}
                                        {
                                            idx === 0 ? <h4 id = {idx+visible === bgColor.id  ? "tweak-down" : ""} style={idx+visible === bgColor.id ? {color: bgColor.color}:{color: ""}} className={idx % 2 !==0 ? "text-down gradient-text" : "text-up gradient-text"}>{event.title}</h4>
                                            : <h4 id = {idx+visible === bgColor.id  ? "tweak-down" : ""} style={idx+visible === bgColor.id ? {color: bgColor.color}:{color: "rgba(255, 255, 255, 0.1)"}, idx === 6 ? {display: "none"} : {display: "block"}} className={idx % 2 !==0 ? "text-down" : "text-up"}>{event.title}</h4>
                                        }
                                        {
                                            idx % 6 === 0 && idx !== 0 ? <h4 id = {idx+visible === bgColor.id  ? "tweak-down" : ""} style={idx+visible === bgColor.id ? {color: bgColor.color}:{color: ""}} className="text-up gradient-text0">{event.title}</h4>
                                            : <h4 id = {idx+visible === bgColor.id ? "tweak-down" : ""} style={idx+visible === bgColor.id ? {color: bgColor.color}:{color: "rgba(255, 255, 255, 0.1)"}} className={idx % 2 !==0 ? "text-down" : "text-up"}>{event.title}</h4>
                                        }
                                </div>
                            ))
                        }
                        <img src={line} alt="nav-line"  className="nav-line"/>

                    </div>           
                    <div className="button-cover2">
                        <img onClick={loadMore6} src = {button} className={visible === 15 ? "button disable" : "button2"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events;