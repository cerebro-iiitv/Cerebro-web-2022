import React from "react";
import "./Hero-Initial.scss";
import logo from "../../assets/images/cerebro-logo.svg";
const HeroInitial = () => {
    return(
        <>
    <div className='hi-mainwrap'>
        <div className="heroinitial">
            <img src={logo} alt="logo" className="cerebro-logo"/>
        </div>
    </div>
    </>
    )
}

export default HeroInitial;