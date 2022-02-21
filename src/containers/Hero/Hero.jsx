import React, { Component } from "react";
import HeroInitial from "../../components/Hero-Initial/Hero-Initial";
import AboutUs from "../AboutUs/AboutUs";
const Hero = (props) => {
  class Redeeirect extends Component {
    componentDidMount() {
      if (props.flagprop === true) {
        this.id = setTimeout(() => {
          props.setredir(true);
          props.setflagprop(false);
        }, 5000);
      }
    }

    render() {
      return props.redir ? <AboutUs /> : <HeroInitial />;
    }
  }

  return (
    <>
      <Redeeirect />
    </>
  );
};

export default Hero;
