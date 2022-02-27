import React from "react";
import { useNavigate } from "react-router-dom";
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
  const onClick = () => navigate("/event");

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
          disabled={isSubmitting}
          className="eventbtn__bottom__submit"
        >
          <span className="eventbtn__bottom__submit__text">{submitText}</span>
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
