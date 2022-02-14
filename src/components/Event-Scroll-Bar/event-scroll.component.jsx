import React from "react";

import { default as sphere } from '../../assets/images/Events/sphere.svg';
import { default as line } from '../../assets/images/Events/line.svg';
import { default as selectedDot } from '../../assets/images/Events/selected-dot.svg';
import { default as button } from '../../assets/images/Events/button.svg';

import './event-scroll.styles.scss';

const EventScrollBar = ({ visible, loadless6, loadMore6, currIdx, events, loadPage }) => {

    return (
        <>
            <div className="button-cover1">
                <img onClick={loadless6} alt="nav-button-left" className={visible === 0 ? "button1 disable" : "button1"} src={button} />
            </div>


            <div className="scroll-bar">
                {
                    events.slice(visible, visible + 7).map((event, idx) => (
                        // onclick it goes to the function loadPage where it takes the event we clicked and then we are using it to display it above in the rendering div.
                        // in the class name the logic is for -> disabling the buttons on idx 6 and we are not supposed to disable the button at start and end i.e., event 1 and 19

                        <div onClick={() => { loadPage(event, idx + visible) }} key={event.id} className={(idx % 6 === 0 && visible !== 0) || (visible === 0 && idx === 6) ? "disable-on particular-element" : "particular-element"}>


                            {/* If we have selected or clicked on any button then we have to show the selected sphere else we have to show the normal sphere. */}

                            <img src={idx + visible === currIdx ? selectedDot : sphere} alt="small-sphere" className="sphere" />

                            {
                                /* 
                                 here -> We have used the logic of idx+visible==currIdx so that we can know if the current element is clicked or not.
                                 if clicked we give it a style of selected yellow glowing color else we dont.

                                 Also if idx % 2 === 0 (i.e., at even index) then the text is supposed to be up else text is down. those classnames are in scss file.
                                 Also we are supposed to give a blur effect to the idx 6 (keeping in mind we are rendering 7 at a time out of which 2 are not supposed to be active)
                                 we have created these for them.
                                */

                                idx + visible !== 0 && idx === 0 ? <p style={idx + visible === currIdx ? { textShadow: "0px 0px 4.85399px #FEC600", color: "#FFFCC9" } : { color: "" }} className={idx % 2 !== 0 ? "text-down" : "text-up  gradient-text"}>{event.title}</p>
                                    : <p id={(idx + visible !== 0) && ((idx % 6 === 0)) ? "gradient-text0" : ""} style={idx + visible === currIdx ? { textShadow: "0px 0px 4.85399px #FEC600", color: "#FFFCC9" } : { color: "" }} className={idx % 2 !== 0 ? "text-down" : "text-up"}>{event.title}</p>
                            }

                        </div>
                    ))
                }
                <img src={line} alt="nav-line" className="nav-line" />

            </div>





            <div className="button-cover2">
                <img onClick={loadMore6} src={button} alt="nav-button-right" className={visible === 15 ? "button2 disable" : "button2"} />
            </div>

        </>
    )
}

export default EventScrollBar;