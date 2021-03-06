import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavMenuCard from "../../components/NavMenuCard/NavMenuCard";

import arrow_img from "../../assets/images/navbar_arrow.svg"
import "./HorizontalNavMenu.scss";

let navMenuDetails = [
    { title: "Team" },
    { title: "FAQ's" },
    { title: "Home" },
    { title: "Events" },
    { title: "Timeline" },
]
navMenuDetails = [...navMenuDetails, ...navMenuDetails, ...navMenuDetails];

const getInitialCardIndex = (currPath) => {
    if (currPath === "/team") return 3;
    if (currPath === "/faq") return 4;
    if (currPath === "/events") return 6;
    if (currPath === "/timeline") return 7;
    return 5; // for "/home" and any other path
}

const HorizontalNavMenu = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const initialCardIndex = getInitialCardIndex(location.pathname);
    
    const [leftCardIndex, setLeftCardIndex] = useState(initialCardIndex);
    const [leftAndRightDisabled, setLeftAndRightDisabled] = useState(false);
    const [isTransitionEnabled, setIsTransitionEnabled] = useState(true)
    const [touchPosition, setTouchPosition] = useState(null);

    const transitionDuration = 400;

    // Setting up the tilt css classes using wrappers around the visible cards
    const cardComponentsWithClones = React.useMemo(() => {

        let tempArr = navMenuDetails.map((option, i) => {
            let tiltClass = "";
            let shift = 0;
            if (i === leftCardIndex) {
                tiltClass = "visible-card--1";
                shift = -2;
            }
            if (i === leftCardIndex + 1) {
                tiltClass = "visible-card--2";
                shift = -1;
            }
            if (i === leftCardIndex + 2) {
                tiltClass = "visible-card--3";
            }
            if (i === leftCardIndex + 3) {
                tiltClass = "visible-card--4";
                shift = 1;
            }
            if (i === leftCardIndex + 4) {
                tiltClass = "visible-card--5";
                shift = 2;
            }

            const cardClickHandler = () => {
                setLeftCardIndex((prevState) => prevState + shift);
            }

            return (
                <NavMenuCard className={tiltClass}
                    title={option.title}
                    isTransitionEnabled={isTransitionEnabled}
                    transitionAfterClick={cardClickHandler}  
                    key={i}
                    nohover={props.nohover}/>
            )
        });
        return tempArr;
    }, [leftCardIndex, isTransitionEnabled,props.nohover]);


    useEffect(() => {
        if (leftCardIndex + 4 === cardComponentsWithClones.length - 1) {
            setLeftAndRightDisabled(true)
            setTimeout(() => {
                setIsTransitionEnabled(false)
                setLeftCardIndex(5)
            }, transitionDuration)
        }

        if (leftCardIndex + 4 === cardComponentsWithClones.length - 2) {
            setLeftAndRightDisabled(true)
            setTimeout(() => {
                setIsTransitionEnabled(false)
                setLeftCardIndex(4)
            }, transitionDuration)
        }

        if (leftCardIndex === 0) {
            setLeftAndRightDisabled(true)
            setTimeout(() => {
                setIsTransitionEnabled(false)
                setLeftCardIndex(5)
            }, transitionDuration)
        }

        if (leftCardIndex === 1) {
            setLeftAndRightDisabled(true)
            setTimeout(() => {
                setIsTransitionEnabled(false)
                setLeftCardIndex(6)
            }, transitionDuration)
        }

        if (leftCardIndex === 4 || leftCardIndex === 5 || leftCardIndex === 6) {
            setTimeout(() => {
                setIsTransitionEnabled(true)
            }, transitionDuration)
        }
    }, [leftCardIndex, cardComponentsWithClones.length])

    useEffect(() => {
        if (leftAndRightDisabled) {
            setTimeout(() => {
                setLeftAndRightDisabled(false)
            }, transitionDuration * 2)
        }
    }, [leftAndRightDisabled])

    const scrollLeft = () => {
        let linkAddr = "/" + navMenuDetails[leftCardIndex + 1].title.toLowerCase();
        if (linkAddr === "/faq's") {
            linkAddr = "/faq"
        }
        if (linkAddr === "/home") {
            linkAddr = "/"
        }
        navigate(linkAddr, { replace: false });
        setLeftCardIndex((prevState) => prevState - 1)
    }

    const scrollRight = () => {
        let linkAddr = "/" + navMenuDetails[leftCardIndex + 3].title.toLowerCase();
        if (linkAddr === "/faq's") {
            linkAddr = "/faq"
        }
        if (linkAddr === "/home") {
            linkAddr = "/"
        }
        navigate(linkAddr, { replace: false });
        setLeftCardIndex((prevState) => prevState + 1)
    }

    // Handling Swipes
    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if (touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            scrollRight();
        }

        if (diff < -5) {
            scrollLeft();
        }

        setTouchPosition(null);
    }

const handleArrowClickRight = (e) => {
    if(!leftAndRightDisabled){
        scrollRight();
    }

    props.nohover();
}


const handleArrowClickLeft = (e) => {
    if(!leftAndRightDisabled){
        scrollLeft();
    }

    props.nohover();
}

    return (
        <div className="hori-menu">
            <div className="hori-menu__carousel-container">
                <div className="hori-menu__carousel-wrapper">
                    <button className="hori-menu__carousel__left-arrow"
                        onClick={handleArrowClickLeft}
                    >
                        <img src={arrow_img} alt="left" className="arrow" />
                    </button>
                    <div className="hori-menu__carousel-content-wrapper"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}>
                        <div className="hori-menu__carousel-content"
                            style={{
                                transform: `translateX(-${leftCardIndex * (20)}%)`,
                                transition: isTransitionEnabled ? undefined : 'none',
                            }}
                        >
                            {cardComponentsWithClones}
                        </div>
                    </div>
                    <button className="hori-menu__carousel__right-arrow"
                        onClick={handleArrowClickRight}
                    >
                        <img src={arrow_img} alt="right" className="arrow" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HorizontalNavMenu;