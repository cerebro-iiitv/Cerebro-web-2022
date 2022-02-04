import React, { useState, useEffect } from "react";
import NavMenuCard from "../../components/NavMenuCard/NavMenuCard";

import "./HorizontalMenu.scss";

let navMenuDetails = [
    { title: "Option1" },
    { title: "Option2" },
    { title: "Option3" },
    { title: "Option4" },
    { title: "Option5" },
]
navMenuDetails = [...navMenuDetails, ...navMenuDetails, ...navMenuDetails];

const HorizontalMenu = () => {
    const [leftCardIndex, setLeftCardIndex] = useState(5);
    const [leftAndRightDisabled, setLeftAndRightDisabled] = useState(false);
    const [isTransitionEnabled, setIsTransitionEnabled] = useState(true)
    const [touchPosition, setTouchPosition] = useState(null);

    const transitionDuration = 500;

    // Setting up the tilt css classes using wrappers around the visible cards
    const cardComponentsWithClones = React.useMemo(() => {
        let tempArr = navMenuDetails.map((option, i) => {
            let tiltClass = "";
            if (i === leftCardIndex) {
                tiltClass = "visible-card--1";
            }
            if (i === leftCardIndex + 1) {
                tiltClass = "visible-card--2";
            }
            if (i === leftCardIndex + 2) {
                tiltClass = "visible-card--3";
            }
            if (i === leftCardIndex + 3) {
                tiltClass = "visible-card--4";
            }
            if (i === leftCardIndex + 4) {
                tiltClass = "visible-card--5";
            }

            return (
                <NavMenuCard className={tiltClass}
                    title={option.title}
                    isTransitionEnabled={isTransitionEnabled} />
            )
        });
        return tempArr;
    }, [leftCardIndex]);


    useEffect(() => {
        if (leftCardIndex + 4 === cardComponentsWithClones.length - 1) {
            setLeftAndRightDisabled(true)
            setTimeout(() => {
                setIsTransitionEnabled(false)
                setLeftCardIndex(5)
            }, transitionDuration)
        }

        if (leftCardIndex === 0) {
            setLeftAndRightDisabled(true)
            setTimeout(() => {
                setIsTransitionEnabled(false)
                setLeftCardIndex(5)
            }, transitionDuration)
        }

        if (leftCardIndex === 5) {
            setTimeout(() => {
                setIsTransitionEnabled(true)
            }, transitionDuration)
        }
    }, [leftCardIndex])

    useEffect(() => {
        if (leftAndRightDisabled) {
            setTimeout(() => {
                setLeftAndRightDisabled(false)
            }, transitionDuration * 2)
        }
    }, [leftAndRightDisabled])

    const scrollLeft = () => {
        setLeftCardIndex((prevState) => prevState - 1)
    }

    const scrollRight = () => {
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

    return (
        <div className="hori-menu">
            <div className="hori-menu__carousel-container">
                <div className="hori-menu__carousel-wrapper">
                    <button className="hori-menu__carousel__left-arrow"
                        onClick={!leftAndRightDisabled ? scrollLeft : null}
                    >
                        left
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
                        onClick={!leftAndRightDisabled ? scrollRight : null}
                    >
                        right
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HorizontalMenu;