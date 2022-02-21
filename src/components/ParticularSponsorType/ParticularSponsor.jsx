import React from "react";

import "./ParticularSponsor.scss";


const ParticularSponsor = ({ logo, websiteLink, type, background }) => {

    const sponsorStyles = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "50% 50%"
    }

    return (

        <div className="particular-component">
            <a href={websiteLink} className="sponsor-background" style={sponsorStyles}>
                <img src={logo} alt="sponsor-logo" className="logo" />
            </a>

            <div className="sponsor-type">
                <p className="type">{type}</p>
            </div>
        </div>



    )
}


export default ParticularSponsor;