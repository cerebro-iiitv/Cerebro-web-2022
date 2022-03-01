import React, { useState, useEffect } from "react";
import DashboardEventCard from "../../../components/Dashboard/Cards/DashboardEventCard";
import arrow_img from "../../../assets/images/dashboard-event-carousel-btn.png";
import "./DashboardMobileEventsCarousel.scss";

const DashboardMobileEventCarousel = ({ participantDetails, eventsData }) => {
    const noOfEvents = eventsData.length;
    const initialLeftCardIndex = noOfEvents > 1 ? Math.floor((noOfEvents - 1) / 2) : 0;
    const [leftCardIndex, setLeftCardIndex] = useState(initialLeftCardIndex);
    const [isLeftDisabled, setIsLeftDisabled] = useState(false);
    const [isRightDisabled, setIsRigthDisabled] = useState(false);
    const [touchPosition, setTouchPosition] = useState(null);

    const cardComponents = React.useMemo(() => {
        return eventsData.map((event) => {
            return (
                <DashboardEventCard
                    key={event.eventName}
                    eventData={event}
                    isEventsMoreThan5={noOfEvents > 1}
                    participantDetails={participantDetails} />
            )
        });
    }, [eventsData, noOfEvents, participantDetails]);

    useEffect(() => {
        if (leftCardIndex === 0) {
            setIsLeftDisabled(true);
        }
        if (leftCardIndex === 1) {
            setIsLeftDisabled(false);
        }
        if (leftCardIndex === noOfEvents - 1) {
            setIsRigthDisabled(true);
        }
        if (leftCardIndex === noOfEvents - 2) {
            setIsRigthDisabled(false);
        }
    }, [noOfEvents, leftCardIndex]);

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

        if (diff > 1) {
            scrollRight();
        }

        if (diff < -1) {
            scrollLeft();
        }

        setTouchPosition(null);
    }

    const transformPptValue = `translateX(-${leftCardIndex * (100)}%)`;

    return (
        <div className="event-menu-mob">
            <div className="event-menu-mob__carousel-container">
                <div className="event-menu-mob__carousel-wrapper">
                    {!isLeftDisabled && noOfEvents > 1
                        &&
                        <button className="event-menu-mob__carousel__left-arrow"
                            onClick={scrollLeft}
                        >
                            <img src={arrow_img} alt="left" />
                        </button>
                    }
                    <div className="event-menu-mob__carousel-content-wrapper"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}>
                        <div className="event-menu-mob__carousel-content"
                            style={{
                                transform: transformPptValue,
                                justifyContent: noOfEvents > 1 ? "flex-start" : "center",
                            }}
                        >
                            {cardComponents}
                        </div>
                    </div>
                    {!isRightDisabled && noOfEvents > 1
                        &&
                        <button className="event-menu-mob__carousel__right-arrow"
                            onClick={scrollRight}
                        >
                            <img src={arrow_img} alt="right" />
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default DashboardMobileEventCarousel;