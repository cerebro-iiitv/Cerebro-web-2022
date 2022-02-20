import React from "react";
import "./TimelineItem.scss";

const TimelineItem = ({ top }) => {
  const custom = top ? "" : "timeline-item__bottom";

  return (
    <div className="timeline-item">
      <div className={`timeline-item__shapes ${custom}`}>
        <div className="timeline-item__shapes__box" />
        <div className="timeline-item__shapes__box" />
        <div className="timeline-item__shapes__rectangle" />
      </div>
      <div className={`timeline-item__container ${custom}__container`}>
        <div className={`timeline-item__container__inner ${custom}__inner`}>
          <div
            className={`timeline-item__container__inner__title  ${custom}__title`}
          >
            <span className="timeline-item__container__inner__title__text">
              CS:GO
            </span>
          </div>
          <div className="timeline-item__container__inner__timestamp">
            <span
              className={`timeline-item__container__inner__timestamp__text ${custom}__timestamp`}
            >
              10-03-2022
            </span>
            <span
              className={`timeline-item__container__inner__timestamp__text ${custom}__timestamp`}
            >
              2:00PM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

TimelineItem.defaultProps = {
  top: false,
};

export default TimelineItem;
