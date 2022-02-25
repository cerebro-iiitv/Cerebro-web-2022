import React, { useState, useEffect } from "react";
import DashboardEventCard from "../../components/Dashboard/Cards/DashboardEventCard";
import arrow_img from "../../assets/images/dashboard-event-carousel-btn.png";
import "./DashboardEventsCarousel.scss";

const DashboardEventCarousel = ({ participantDetails, eventsData }) => {
    const noOfEvents = eventsData.length;
    const initialLeftCardIndex = noOfEvents > 5 ? Math.floor((noOfEvents - 5) / 2) : 0;
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
                    isEventsMoreThan5={noOfEvents > 5}
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
        if (leftCardIndex + 4 === noOfEvents - 1) {
            setIsRigthDisabled(true);
        }
        if (leftCardIndex + 4 === noOfEvents - 2) {
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

        if (diff > 5) {
            scrollRight();
        }

        if (diff < -5) {
            scrollLeft();
        }

        setTouchPosition(null);
    }

    const transformPptValue = noOfEvents > 5 ? `translateX(-${leftCardIndex * (20)}%)` : `translateX(-${leftCardIndex * (100 / noOfEvents)}%)`;

    return (
        <div className="event-menu">
            <div className="event-menu__carousel-container">
                <div className="event-menu__carousel-wrapper">
                    {!isLeftDisabled && noOfEvents > 5
                        &&
                        <button className="event-menu__carousel__left-arrow"
                            onClick={scrollLeft}
                        >
                            <img src={arrow_img} alt="left" />
                        </button>
                    }
                    <div className="event-menu__carousel-content-wrapper"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}>
                        <div className="event-menu__carousel-content"
                            style={{
                                transform: transformPptValue,
                                justifyContent: noOfEvents > 5 ? "flex-start" : "center",
                            }}
                        >
                            {cardComponents}
                        </div>
                    </div>
                    {!isRightDisabled && noOfEvents > 5
                        &&
                        <button className="event-menu__carousel__right-arrow"
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

export default DashboardEventCarousel;