import React, { useEffect, useState } from "react";

import './main-event.styles.scss';
import { ParticularEvent } from "../particular-event/particular-event.component";

import { default as sphere} from '../../assets/images/Events/sphere.svg';
import {default as line} from '../../assets/images/Events/line.svg';
import {default as selectedDot} from '../../assets/images/Events/selected-dot.svg';
import {default as button} from '../../assets/images/Events/button.svg';


const Events = () => {
    const [events, setEvents] = useState([]);
    const [visible, setVisible] = useState(0);
    const [currEvent, setCurrEvent] = useState({});
    const [isActive, setIsActive] = useState(false);
    const [bgColor, setBgColor] = useState({id: -1, color: '#FFFCC9'});

    useEffect(async function eventHandler() {
        const response = await fetch('http://cerebro2022.herokuapp.com/events/');
        var data = await response.json();
        // To change the name of csgo and codm
        data[8].title = "CSGO";
        data[11].title = "CODM";

        // swap event at index 14 and 17
        var temp = data[14];
        data[14] = data[17];
        data[17] = temp;
        setEvents(data);
    }, []);

    const loadMore6 = () => {
        setVisible(visible + 5);
    }
    const loadless6 = () => {
        setVisible(visible - 5);
    }

    function loadPage(event,idx) {   
        console.log(event);
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
                        isActive === true ? <ParticularEvent key={currEvent.id} title={currEvent.title} prize={currEvent.prize} team_size = {currEvent.team_size} start_time = {currEvent.start_time} end_time = {currEvent.end_time} description = {currEvent.description} convenor = {currEvent.contacts[0]  ? currEvent.contacts[0].name : "Dhruv Dave"}
                        co_convenor1 = {currEvent.contacts[1] ? currEvent.contacts[1].name : "Dhruv Dave"} co_convenor2 = {currEvent.contacts[2] ? currEvent.contacts[2].name : "Dhruv Dave"} mem1 = {currEvent.contacts[3]  ? currEvent.contacts[3].name : "Dhruv Dave"} mem2 = {currEvent.contacts[4] ? currEvent.contacts[4].name : "Dhruv Dave"} />
                            : <ParticularEvent key={1} title={"Tech Hunt"} prize={10000} team_size = {5} start_time = {"18/3/2022"} end_time = {"20/3/2022"} description = {"Tech Hunt event"} convenor = {"Shreyansh Mishra"} co_convenor1 = {"Prathak Garg"} co_convenor2 = {"Anubhav Kushwaha"} mem1 = {"Spruha Thorat"} mem2 = {"Raghav Agiwal"}/>
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