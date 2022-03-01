import React from "react";
import "./EventForm.scss";

const EventForm = ({ children, title }) => {
  return (
    <div className="evnt-form">
      <div className="evnt-form__container">
        <div className="evnt-form__container__title">{title}</div>
        <div className="evnt-form__container__children">{children}</div>
      </div>
    </div>
  );
};

export default EventForm;
