import React from "react";

import "./Sponsor-grid.scss";

import { default as leftArrow } from "../../assets/images/Sponsors/left-arrow.png";
import { default as rightArrow } from "../../assets/images/Sponsors/right-arrow.png";

import ParticularSponsor from "../ParticularSponsorType/ParticularSponsor";

const SponsorGrid = ({sponsorData, loadMore, loadLess, visible}) => {
    console.log(sponsorData.length);
    return (
        <div className="grid">
            <div className="left-arrow">
                <img id = {visible === 0 ? "disable-on" : ""} onClick={loadLess} src={leftArrow} alt="left-arrow" className="left-arrow-img"/>
            </div>

            <div className="details">
                {
                    sponsorData.slice(visible, visible+6).map((sponsor,idx) => (
                        <ParticularSponsor logo = {sponsor.logo} websiteLink = {sponsor.websiteLink} type = {sponsor.type} key = {sponsor.id} background = {sponsor.background}/>
                    ))
                }
            </div>

            <div className="right-arrow">
                <img id = {visible === (sponsorData.length) - 6 ? "disable-on" : ""} onClick={loadMore} src={rightArrow} alt="right-arrow" className="right-arrow-img"/>
            </div>
        </div>
    )
}

export default SponsorGrid;