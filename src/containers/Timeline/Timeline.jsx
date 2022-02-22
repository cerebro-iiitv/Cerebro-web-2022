import React from "react";
import TimelineItem from "../../components/TimelineItem/TimelineItem";
import { timelineData } from "./util/TimelineData";
import useHorizontalScroll from "../../hooks/useHorizontalScroll";
import "./Timeline.scss";

const Timeline = () => {
  const scrollRef = useHorizontalScroll();

  const scroll = (offset) => (scrollRef.current.scrollLeft += offset);

  let leftScroll;
  const startLeftScroll = () =>
    (leftScroll = setInterval(() => scroll(-5), 10));
  const stopLeftScroll = () => clearInterval(leftScroll);

  let rightScroll;
  const startRightScroll = () =>
    (rightScroll = setInterval(() => scroll(5), 10));
  const stopRightScroll = () => clearInterval(rightScroll);

  return (
    <>
      <div className="timeline" ref={scrollRef}>
        <div className="timeline__container">
          <div className="timeline__container__upper">
            <div className="timeline__container__upper__first">
              <div className="timeline__container__upper__first__circle">
                <div className="timeline__container__upper__first__circle__inner" />
              </div>
              <div className="timeline__container__upper__first__jarvis">
                <span className="timeline__container__upper__first__jarvis__text">
                  Jarvis, Initiate Fest
                </span>
                <span className="timeline__container__upper__first__jarvis__text">
                  code : CEREBRO'22
                </span>
              </div>
            </div>
            {timelineData.upper.map((item, index) => (
              <TimelineItem top item={item} key={index} />
            ))}
          </div>
          <div className="timeline__container__lower">
            {timelineData.lower.map((item, index) => (
              <TimelineItem item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div
        className="timeline__button__left"
        onClick={() => scroll(-2000)}
        onMouseEnter={startLeftScroll}
        onMouseLeave={stopLeftScroll}
      >
        <hr className="timeline__button__left__line" />
      </div>
      <div
        className="timeline__button__right"
        onClick={() => scroll(2000)}
        onMouseEnter={startRightScroll}
        onMouseLeave={stopRightScroll}
      >
        <hr className="timeline__button__right__line" />
      </div>
    </>
  );
};

export default Timeline;
