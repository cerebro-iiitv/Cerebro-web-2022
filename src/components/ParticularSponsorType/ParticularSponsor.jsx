import React from "react";

import "./ParticularSponsor.scss";


const ParticularSponsor = ({ logo, websiteLink, type }) => {

    return (

        <div className="particular-component">
            <a href={websiteLink} className="sponsor-background">
                <img src={logo} alt="sponsor-logo" className="logo" />
            </a>

            <div className="sponsor-type">
                <p className="type">{type}</p>
            </div>
        </div>



    )
}


export default ParticularSponsor;