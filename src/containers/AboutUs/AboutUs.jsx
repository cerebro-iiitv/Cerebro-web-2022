import { Link } from "react-router-dom";
import "./AboutUs.scss";
import React from "react";

const AboutUs = (props) => {
  return (
    <div className={props.status==='first'?"aboutus":"aboutUs"}>
      <div className="aboutus-main">
        <div className="aboutus-main-content">
          <div className="name-and-info">
            <div className="aboutus-name">
              <p className="mainhead">CEREBRO 2022</p>
              <p className="sechead">Techfest IIIT Vadodara</p>
            </div>
            <div className="aboutus-info">
              <p className="infotext">
                Cerebro is the Annual Technical Festival of Indian Institute of
                Information Technology, Vadodara. It is organized by the
                Technical Society of IIIT Vadodara and serves as a platform for
                technophiles to showcase their creativity and intelligence.
              </p>
            </div>
          </div>
          <div className="sponsor-and-circles">
            <div className="aboutus-sponsor">
              <p className="joindis">
                Join the{" "}
                <a href="https://discord.gg/VRTeuWZp2a" target="_blank" rel="noreferrer">
                  <span id="disserver">discord server</span>
                </a>{" "}
                for further communication!
              </p>


              <Link to='/sponsors' className="sponsordiv">
              <div className="our-sponsors">
                <p className="our-sponsors-text">Our Sponsors</p>
              </div>
              </Link>
            
            
            </div>
            <div className="aboutus-circles">
              <div className="hov1">
                <div className="circle1"></div>
                <div className="firstlayer fl1">Prize Worth</div>
                <div className="secondlayer sl1">7 Lakhs</div>
              </div>
              <div className="hov2">
              <div className="circle2"></div>
              <div className="firstlayer fl2">No. of Events</div>
                <div className="secondlayer sl2">19</div>
              </div>
              <div className="hov3">
              <div className="circle3"></div>
              <div className="firstlayer fl3">Number of Days</div>
                <div className="secondlayer sl3">7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
