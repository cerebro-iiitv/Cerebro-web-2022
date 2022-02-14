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
    const [currIdx, setCurrIdx] = useState(-1);
    
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
        setCurrEvent(event);
        setIsActive(true);
        setCurrIdx(idx);
    }   

    
    return (
        <div className="main-event">
            <div className="event-outer">
                
                <div className="upper-nav">
                        {/* space kept for the upper nav design */}
                </div>

                <div className="event-rendering">
                    {
                        // isActive is for knowing if any change has occured and through state it renders the current event
                        isActive === true ? <ParticularEvent key={currEvent.id} title={currEvent.title} prize={currEvent.prize} team_size = {currEvent.team_size} start_time = {currEvent.start_time} end_time = {currEvent.end_time} description = {currEvent.description} convenor = {currEvent.contacts[0]  ? currEvent.contacts[0].name : "Dhruv Dave"}
                        co_convenor1 = {currEvent.contacts[1] ? currEvent.contacts[1].name : "Dhruv Dave"} co_convenor2 = {currEvent.contacts[2] ? currEvent.contacts[2].name : "Dhruv Dave"} mem1 = {currEvent.contacts[3]  ? currEvent.contacts[3].name : "Dhruv Dave"} mem2 = {currEvent.contacts[4] ? currEvent.contacts[4].name : "Dhruv Dave"} />
                            : <ParticularEvent key={1} title={"Tech Hunt"} prize={10000} team_size = {5} start_time = {"18/3/2022"} end_time = {"20/3/2022"} description = {"Tech Hunt event"} convenor = {"Shreyansh Mishra"} co_convenor1 = {"Prathak Garg"} co_convenor2 = {"Anubhav Kushwaha"} mem1 = {"Spruha Thorat"} mem2 = {"Raghav Agiwal"}/>
                    }

                </div>

                <div className="event-scroller">
                    <div className="button-cover1">
                         <img onClick={loadless6} alt="nav-button-left" className={visible === 0 ? "button disable" : "button1"} src = {button} />
                    </div>     
                    <div className="scroll-bar">
                        {
                            events.slice(visible, visible + 7).map((event,idx) => (
                                // onclick it goes to the function loadPage where it takes the event we clicked and then we are using it to display it above in the rendering div.
                                // in the class name the logic is for -> disabling the buttons on idx 6 and we are not supposed to disable the button at start and end i.e., event 1 and 19

                                <div onClick={() => { loadPage(event,idx+visible) }} key={event.id} className={ (idx % 6 === 0 && visible !== 0) || (visible === 0 && idx === 6) ? "disable-on particular-element" : "particular-element"}>
                                        
                                        {/* If we have selected or clicked on any button then we have to show the selected sphere else we have to show the normal sphere. */}
                                        <img src={idx + visible === currIdx ? selectedDot : sphere} alt="small-sphere" className="sphere"/>
                                        
                                        {
                                            /* 
                                             here -> We have used the logic of idx+visible==currIdx so that we can know if the current element is clicked or not.
                                            //  if clicked we give it a style of selected yellow glowing color else we dont.

                                            // Also if idx % 2 === 0 (i.e., at even index) then the text is supposed to be up else text is down. those classnames are in scss file.
                                            //  Also we are supposed to give a blur effect to the idx 6 (keeping in mind we are rendering 7 at a time out of which 2 are not supposed to be active)
                                            // we have created these for them.
                                            */  

                                            idx+visible != 0 && idx === 0 ? <p style={idx+visible === currIdx ? {textShadow: "0px 0px 4.85399px #FEC600",color:"#FFFCC9"}:{color: ""}} className={idx % 2 !==0  ? "text-down" : "text-up  gradient-text"}>{event.title}</p>
                                            : <p id = { (idx+visible !== 0) && ((idx % 6 === 0))  ? "gradient-text0": ""} style={idx+visible === currIdx ? {textShadow: "0px 0px 4.85399px #FEC600",color:"#FFFCC9"}:{color: ""}} className={idx % 2 !==0  ? "text-down" : "text-up"}>{event.title}</p>
                                        }
                                </div>
                            ))
                        }
                        <img src={line} alt="nav-line"  className="nav-line"/>

                    </div>           
                    <div className="button-cover2">
                        <img onClick={loadMore6} src = {button} alt="nav-button-right" className={visible === 15 ? "button disable" : "button2"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events;