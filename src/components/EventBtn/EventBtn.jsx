import React from "react";
import { useNavigate } from "react-router-dom";
import BtnLoader from "../BtnLoader/BtnLoader";
import "./EventBtn.scss";

const EventBtn = ({
  errors,
  submitStatus,
  isSubmitting,
  submitText,
  backText,
  successMessage,
}) => {
  const navigate = useNavigate();
  const onClick = () => navigate("/events");

  const custom = submitStatus ? "disable" : "enable";

  return (
    <div className="eventbtn">
      <div className="eventbtn__status">
        {errors.event && (
          <span className="eventbtn__status__error">{errors.event}</span>
        )}
        {submitStatus && (
          <span className="eventbtn__status__success">{successMessage}</span>
        )}
      </div>
      <div className="eventbtn__bottom">
        <button
          type="submit"
          disabled={submitStatus}
          className={`eventbtn__bottom__${custom}`}
        >
          <div className={`eventbtn__bottom__${custom}__text`}>
            {isSubmitting ? <BtnLoader /> : submitText}
          </div>
        </button>
        <div className="eventbtn__bottom__vl" />
        <button className="eventbtn__bottom__back" onClick={onClick}>
          <span className="eventbtn__bottom__back__text">{backText}</span>
        </button>
      </div>
    </div>
  );
};

EventBtn.defaultProps = {
  submitStatus: false,
  successMessage: "Succeeded",
  submitText: "Submit",
  backText: "Back to Events",
};

export default EventBtn;
