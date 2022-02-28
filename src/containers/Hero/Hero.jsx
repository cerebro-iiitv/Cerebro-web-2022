import React, { Component } from "react";
import HeroInitial from "../../components/Hero-Initial/Hero-Initial";
import AboutUs from "../AboutUs/AboutUs";
import "./Hero.scss"
const Hero = (props) => {
  class Redeeirect extends Component {
    componentDidMount() {
      if (props.flagprop === true) {
        this.id = setTimeout(() => {
      
          props.setredir(true);
        
          setTimeout(() => {
          props.setflagprop(false);
        }, 1000);
        
      }, 5000);
      }
    }

    render() {
      return props.redir ? <AboutUs status={props.flagprop ? "first" : "second" } /> : <HeroInitial />;
    }
  }

  return (
    <>
    <div className="desktop-hero">
      <Redeeirect />
    </div>
     <div className="mobile-hero">
     <AboutUs />
   </div>
   </>
  );
};

export default Hero;
