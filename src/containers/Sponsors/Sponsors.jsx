import React, { useState } from "react";
import './Sponsors.scss';

import SponsorGrid from "../../components/Sponsor/Sponsor-grid";

import sponsorDataJson from "./util/sponsorData.json";
import {default as leftPillar} from "../../assets/images/Sponsors/left-pillar.png";
import {default as rightPillar} from "../../assets/images/Sponsors/right-pillar.png";


const Sponsors = () => {

    const [visible, setVisible] = useState(0);

    const loadMore = () => {
        setVisible(visible+6);
    }    

    const loadLess = () => {
        setVisible(visible-6);
    }    
    return (
        <div className="sponsors">
            <div className="left-pillar">
                <img src={leftPillar} alt="left-pillar" />
            </div>
            <div className="main-cont">
                <div className="title-cont">
                    <h1 className="title">Our Sponsors</h1>
                </div>

                <div className="sponsor-grid">
                    <SponsorGrid sponsorData = {sponsorDataJson.sponsors} visible = {visible} loadMore = {loadMore} loadLess = {loadLess}/>
                </div>
            </div>
            <div className="right-pillar">
                <img src={rightPillar} alt="right-pillar" />
            </div>
        </div>
    )
}

export default Sponsors;