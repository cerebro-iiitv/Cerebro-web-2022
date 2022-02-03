import React, { useState, useEffect } from "react";
import NavMenuCard from "../../components/NavMenuCard/NavMenuCard";

import "./HorizontalMenu.scss";

const navMenuDetails = [
    { title: "Option1" },
    { title: "Option2" },
    { title: "Option3" },
    { title: "Option4" },
    { title: "Option5" }
]

const HorizontalMenu = () => {
    const [leftCardIndex, setLeftCardIndex] = useState(5);
    const [leftAndRightDisabled, setLeftAndRightDisabled] = useState(false);
    const [isTransitionEnabled, setIsTransitionEnabled] = useState(true)
    const [touchPosition, setTouchPosition] = useState(null);

    const cardComponentsWithClones = React.useMemo(() => {
        let tempArr = navMenuDetails.map((option) => {
            return (
                <NavMenuCard title={option.title} />
            )
        });
        tempArr = [...tempArr, ...tempArr, ...tempArr]
        return tempArr;
    }, []);

    useEffect(() => {
        if (leftCardIndex + 4 === cardComponentsWithClones.length - 1) {
            setLeftAndRightDisabled(true)
            setTimeout(() => {
                setIsTransitionEnabled(false)
                setLeftCardIndex(5)
            }, 250)
        }

        if (leftCardIndex === 0) {
            setLeftAndRightDisabled(true)
            setTimeout(() => {
                setIsTransitionEnabled(false)
                setLeftCardIndex(5)
            }, 250)
        }

        if (leftCardIndex === 5) {
            setTimeout(() => {
                setIsTransitionEnabled(true)
            }, 250)
        }
    }, [leftCardIndex])

    useEffect(() => {
        if (leftAndRightDisabled) {
            setTimeout(() => {
                setLeftAndRightDisabled(false)
            }, 250 * 2)
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