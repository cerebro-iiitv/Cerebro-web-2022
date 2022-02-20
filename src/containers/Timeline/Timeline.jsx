import React, { useRef, useEffect } from "react";
import TimelineItem from "../../components/TimelineItem/TimelineItem";
import { timelineData } from "./util/TimelineData";
import "./Timeline.scss";

const useHorizontalScroll = () => {
  const elRef = useRef();
  useEffect(() => {
    const element = elRef.current;
    if (element) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        element.scrollTo({
          left: element.scrollLeft + e.deltaY,
          // behavior: "smooth",
        });
      };
      element.addEventListener("wheel", onWheel);
      return () => element.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
};

const Timeline = () => {
  const scrollRef = useHorizontalScroll();

  return (
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
          {timelineData.upper.map((item) => (
            <TimelineItem top item={item} />
          ))}
        </div>
        <div className="timeline__container__lower">
          {timelineData.lower.map((item) => (
            <TimelineItem item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
