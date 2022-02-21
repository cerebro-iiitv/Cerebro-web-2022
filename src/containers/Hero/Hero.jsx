import React,{Component} from "react";
import HeroInitial from "../../components/Hero-Initial/Hero-Initial";
import AboutUs from "../AboutUs/AboutUs";
const Hero=()=>{

    class Redeeirect extends Component {
        state = {
          redirect: false
        }
      
        componentDidMount() {
          this.id = setTimeout(() => this.setState({ redirect: true }), 5000)
        }
      
        render() {
          return this.state.redirect
            ? <AboutUs/>
            : <HeroInitial/>
        }
      }

    return(
        <>
            <Redeeirect/>
        </>
    )
}

export default Hero;