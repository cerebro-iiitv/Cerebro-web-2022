import React from 'react'

import './EventScrollItem.scss';

import { default as leftLine } from '../../assets/images/Events/slice-left-line.png';
import { default as rightLine } from '../../assets/images/Events/sliced-right-line.png';
import { default as selectedDot } from '../../assets/images/Events/selected-dot.svg';
import { default as sphere } from '../../assets/images/Events/sphere.svg';

export const EventScrollItem = ({ event, idx, currIdx, visible, loadPage, isSelected }) => {
    return (

        <div className="item-container">
            {
                idx % 2 === 0 ? <div className="text-dot-container-even" onClick={() => { loadPage(event, idx + visible) }} id={idx === 6 || (idx === 0 && visible !== 0) ? "disable-onn" : ""}>

                    {
                        isSelected === false ?
                            <div className="text">
                                {
                                    idx === 0 && visible !== 0 ?
                                        <p className="text-up gradient-text" style={idx + visible === currIdx ? { textShadow: "0px 0px 4.85399px #FEC600", color: "#FFFCC9" } : { color: "" }}>{event.title}</p>
                                        :
                                        <p id={idx === 6 ? "gradient-text0" : ""} className="text-up" style={visible === 0 && idx === 0 ? { textShadow: "0px 0px 4.85399px #FEC600", color: "#FFFCC9" } : { color: "" }}>{event.title}</p>

                                }
                            </div> :
                            <div className="text">
                                {
                                    idx === 0 && visible !== 0 ?
                                        <p className="text-up gradient-text" style={idx + visible === currIdx ? { textShadow: "0px 0px 4.85399px #FEC600", color: "#FFFCC9" } : { color: "" }}>{event.title}</p>
                                        :
                                        <p id={idx === 6 ? "gradient-text0" : ""} className="text-up" style={idx + visible === currIdx ? { textShadow: "0px 0px 4.85399px #FEC600", color: "#FFFCC9" } : { color: "" }}>{event.title}</p>

                                }
                            </div>
                    }

                    <div className="line-dot-container">
                        <div className='line-cont'>
                            {
                                idx === 0 && visible === 0 ?
                                    <img src={leftLine} alt="left-line" className='left-line' />
                                    :
                                    <img src={rightLine} alt="left-line" className='left-line' />
                            }
                        </div>

                        {
                            isSelected === false ?
                                <img src={idx === 0 && visible === 0 ? selectedDot : sphere} alt="small-sphere" className="sphere" />
                                :
                                <img src={idx + visible === currIdx ? selectedDot : sphere} alt="small-sphere" className="sphere" />
                        }



                        <div className="line-cont">
                            <img src={rightLine} alt="right-line" className='right-line' />
                        </div>
                    </div>

                </div> :
                    <div className="text-dot-container-odd" onClick={() => { loadPage(event, idx + visible) }}>
                        <div className="temp-div">

                        </div>
                        <div className="line-dot-container">
                            <div className="line-cont">
                                <img src={rightLine} alt="left-line" className='left-line' />
                            </div>

                            <img src={idx + visible === currIdx ? selectedDot : sphere} alt="small-sphere" className="sphere" />


                            <div className="line-cont">
                                <img src={rightLine} alt="right-line" className='right-line' />
                            </div>
                        </div>
                        <div className="text">
                            <p className="text-down" style={idx + visible === currIdx ? { textShadow: "0px 0px 4.85399px #FEC600", color: "#FFFCC9" } : { color: "" }}>{event.title}</p>
                        </div>
                    </div>
            }

        </div>

    )
}