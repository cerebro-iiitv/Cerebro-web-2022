import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './particular-event-mobile.scss';
import { default as toDot } from '../../../assets/images/Events/to-dot.svg';
import { default as dateLine } from '../../../assets/images/Events/date-line.svg';
import { default as midLineEvent } from '../../../assets/images/Events/mobile-event-line.svg';
import { default as midButtonLine } from '../../../assets/images/Events/mid-button-line.svg';
import { default as greenTick } from '../../../assets/images/Events/green-tick.svg';

const ParticularMobileEvent = ({ currEvent, isLogged }) => {
    // currEvent.is_registered = true;
    // currEvent.registration_closed = true;
    // currEvent.submission_required = true;
    // currEvent.team_full = true;
    // currEvent.submitted = true;

    const startDate = currEvent.start_time.split("-");
    const endDate = currEvent.end_time.split("-");


    const authNotifier = () => {
        toast.info("Log In to Register", { position: toast.POSITION.TOP_LEFT });
    }

    return (
        <div className="particular-event-section">

            <div className="main-body">
                <div className="event-desc">
                    <p className="desc">{currEvent.description}. For further communication join our <a href="https://discord.com/invite/VRTeuWZp2a">Discord Server</a></p>
                </div>
                {/* Time Line */}
                <div className='time-line'>
                    <div className='date1'>
                        <p className='date1-items'>{startDate[0]} </p>
                        <img src={dateLine} alt="date-line" className='date-line' />
                        <p className="time">{startDate[1]}</p>
                    </div>
                    <img src={toDot} alt="to-dot" className='to-dot' />
                    <div className='date1'>
                        <p className='date1-items'>{endDate[0]} </p>
                        <img src={dateLine} alt="date-line" className='date-line' />
                        <p className="time">{endDate[1]}</p>
                    </div>
                </div>

                {/* Mid Line */}
                <div className="mid-line">
                    <img src={midLineEvent} alt="mid-line" />
                </div>

                {/* Prize, Team queries, rules and regulations */}
                <div className="queries">
                    <div className="prize">
                        <p className="prize-query">Prize Worth</p>
                        <p className="prize-details">{currEvent.prize} INR</p>
                    </div>
                    <div className="team_det">
                        <p className="prize-query">Team Size</p>
                        <p className="prize-details">{currEvent.team_size}</p>
                    </div>
                    <div className="rules-soc">
                        <a href={currEvent.rules_doc} className="rules">Rules and Regulations</a>
                        <a href={currEvent.social_media} className="social">Social Media</a>
                    </div>
                </div>

                {/* Mid Line */}
                <div className="mid-line">
                    <img src={midLineEvent} alt="mid-line" />
                </div>

                {/* Convenors, CoConvenors, Members section */}

                <div className="organizers">
                    <div className="convenor-details">
                        <p className="convenor-query">Convenor</p>
                        <p className="convenor-details">{currEvent.contacts[0] ? currEvent.contacts[0].name : "Dhruv Dave"}</p>
                    </div>
                    <div className="co-convenor-details">
                        <p className="co-convenor-query">Co Convenor</p>
                        <div className="co-dets">
                            <p className="co-convenor-details">{currEvent.contacts[1] ? currEvent.contacts[1].name : "Dhruv Dave"}</p>
                            <p className="co-convenor-details">{currEvent.contacts[2] ? currEvent.contacts[2].name : "Dhruv Dave"}</p>
                        </div>
                    </div>
                    <div className="members-details">
                        <p className="members-query">Members</p>
                        <div className="mem-dets">
                            <p className="mem-details">{currEvent.contacts[3] ? currEvent.contacts[3].name : "Dhruv Dave"}</p>
                            <p className="mem-details">{currEvent.contacts[4] ? currEvent.contacts[4].name : "Dhruv Dave"}</p>
                        </div>
                    </div>
                </div>

                {/* Mid Line */}
                <div className="mid-line">
                    <img src={midLineEvent} alt="mid-line" />
                </div>

                {/* Button System */}

                <div className="reg-cont">
                    {
                        currEvent.registration_closed && !currEvent.submission_required ? <p className="close-text">Registrations Closed</p>
                            :
                            <div className="buttonCont">
                                {
                                    isLogged === false ?
                                        <div className='button-container'>
                                            {/* <button id="single-button" onClick={authNotifier}>Register</button> */}
                                            {
                                                currEvent.team_size === 1 ?
                                                    <button id='single-button' onClick={authNotifier}>Register</button>
                                                    :

                                                    <button id="single-button" href={null} onClick={authNotifier}>Create Team</button>
                                            }

                                            {
                                                currEvent.team_size > 1 ?
                                                    <img src={midButtonLine} className="mid-button-line" alt="mid-button-line" />
                                                    :
                                                    ""
                                            }
                                            {
                                                currEvent.team_size > 1 ?

                                                    <button onClick={authNotifier}>Join Team</button>
                                                    :
                                                    ""
                                            }
                                        </div>
                                        : <div className='buttonCont'>
                                            {
                                                // here the user is logged in now we check if isReg
                                                currEvent.is_registered === true ? <div className='button-container'>
                                                    {
                                                        currEvent.submission_required === true ? <div>
                                                            {
                                                                !currEvent.team_full && currEvent.team_full !== undefined ? <p className="incompleteTeam">In order to submit, you must complete your team</p> 
                                                                :
                                                                currEvent.submitted === true 
                                                                    ? <div className="submit-text"><p className="submit_text">You have already submitted</p><img src={greenTick} alt="greenTick" className='green-tick' /></div>
                                                                    : <a id="single-button" href={`event/submit/${currEvent.short_name}`}>Submit</a>
                                                            }
                                                        </div>
                                                            : <div>
                                                                {/* Here no submission is required */}
                                                                {/* Route to details page */}
                                                                <div className="submit-text">
                                                                    <div className="text_image">
                                                                        <p className="submitted_text">You have registered</p>
                                                                        <img src={greenTick} alt="greenTick" className='green-tick' />
                                                                    </div>
                                                                    <p className='team_code_text'>Check Dashboard for more details</p>
                                                                    {
                                                                        currEvent.team_size > 1 ?
                                                                            <p className="team_code_text">Team Code: <span className='teamCode'>{currEvent.team_code}</span></p>
                                                                            :
                                                                            ""
                                                                    }
                                                                </div>
                                                            </div>
                                                    }
                                                </div> :
                                                    <div className='button-container'>
                                                        {
                                                            currEvent.team_size === 1 ?
                                                                <a id='single-button' href={`event/join/${currEvent.short_name}`}>Register</a>
                                                                :

                                                                <a id="single-button" href={`event/create/${currEvent.short_name}`} >Create Team</a>


                                                        }

                                                        {
                                                            currEvent.team_size > 1 ?
                                                                <img src={midButtonLine} className="mid-button-line" alt="mid-button-line" />
                                                                :
                                                                ""
                                                        }
                                                        {
                                                            currEvent.team_size > 1 ?

                                                                <a href={`event/join/${currEvent.short_name}`}>Join Team</a>

                                                                :
                                                                ""
                                                        }
                                                    </div>

                                            }

                                        </div>
                                }

                            </div>
                    }
                </div>

            </div>
        </div>
    )
}

export default ParticularMobileEvent;