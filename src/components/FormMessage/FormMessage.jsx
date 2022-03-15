import React from "react";
import { Link } from "react-router-dom";
import EventForm from "../EventForm/EventForm";
import "./FormMessage.scss";

const FormMessage = ({ title, children }) => {
  return (
    <EventForm title={title}>
      <div className="form-message__message">
        {children}
        <Link to="/dashboard" className="form-message__backlink">
          <span className="form-message__backlink__text">Dashboard</span>
        </Link>
      </div>
    </EventForm>
  );
};

export default FormMessage;
