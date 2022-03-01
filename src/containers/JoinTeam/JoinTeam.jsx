import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import EventForm from "../../components/EventForm/EventForm";
import FormInput from "../../components/FormInput/FormInput";
import EventBtn from "../../components/EventBtn/EventBtn";
import Loading from "../../components/LoadingSpinner/LoadingSpinner"; 
import axiosInstance from "../../services/AxiosInstance";
import eventData from "../Events/util/EventData.json";
import "./JoinTeam.scss";

const JoinTeam = () => {
  const { eventName } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [submitStatus, setSubmitStatus] = useState("");
  const [eventId, setEventId] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        if (!eventName) throw new Error("No event name provided");
        const id = eventData[eventName.toUpperCase()];
        if (!id) throw new Error("Event not found");
        setEventId(id);
        const res = await axiosInstance.get(`/events/${id}`);
        setEvent(res.data);
      } catch {
        navigate("/events");
      }
    };
    getData();
  }, [navigate, eventName]);

  const getInitialValues = () => {
    const values = { team_code: "", event: "" };
    if (event.registration_attributes) {
      Object.keys(event.registration_attributes).forEach(
        (field) => (values[field] = "")
      );
    }
    return values;
  };

  const validate = (values) => {
    const errors = {};
    if (event.team_event && !values.team_code) errors["team_code"] = "Required";
    if (event.registration_attributes) {
      Object.keys(event.registration_attributes).forEach((field) => {
        if (!values[field]) {
          errors[field] = "Required";
        } else if (event.registration_attributes[field] === "int") {
          const regex = /^\d+$/;
          if (!regex.test(values[field])) {
            errors[field] = "Must be an integer";
          }
        }
      });
    }
    return errors;
  };

  const onSubmit = async (values, { setFieldError, setSubmitting }) => {
    try {
      if (event.team_event) {
        const data = {
          event_id: eventId,
          team_code: values.team_code,
          registration_data: { ...values },
        };
        delete data["registration_data"]["team_code"];
        delete data["registration_data"]["event"];
        if (!event.registration_attributes) delete data["registration_data"];
        const res = await axiosInstance.post("/registration/teammember/", data);
        if (res.data.error) setFieldError("event", res.data.error);
        else setSubmitStatus(res.data.success);
      } else {
        const data = {
          event: eventId,
          registration_data: { ...values },
        };
        delete data["registration_data"]["team_code"];
        delete data["registration_data"]["event"];
        if (!event.registration_attributes) delete data["registration_data"];
        const res = await axiosInstance.post(
          "/registration/individual-registration/",
          data
        );
        if (res.data.error) setFieldError("event", res.data.error);
        else setSubmitStatus(`Successfully registered for ${event.title}`);
      }
    } catch (error) {
      setFieldError("event", error.response.data.error);
    }
    setSubmitting(false);
  };

  const mapType = (type) => {
    switch (type) {
      case "int":
        return "number";
      case "string":
        return "text";
      default:
        return "text";
    }
  };

  if (!event) return <Loading />;
  if (event.is_registered)
    return (
      <EventForm title={event.title}>
        <div className="join-team__message">
          You have already registered for this event
          <br />
          {event.team_event && "Check your team code on your Dashboard"}
          <Link to="/dashboard" className="join-team__backlink">
            <span className="join-team__backlink__text">Dashboard</span>
          </Link>
        </div>
      </EventForm>
    );

  return (
    <EventForm title={event.title}>
      <Formik {...{ validate, onSubmit }} initialValues={getInitialValues()}>
        {({ isSubmitting, errors }) => (
          <Form className="join-team">
            {event.team_event && (
              <>
                <FormInput
                  label="Join the team using a Team Code"
                  name="team_code"
                  type="text"
                  page="join-team"
                  disabled={submitStatus}
                />
                <hr className="join-team__line" />
              </>
            )}
            {event.registration_attributes ? (
              Object.entries(event.registration_attributes).map(
                ([key, value], index) => (
                  <div className="join-team__input" key={index}>
                    <FormInput
                      label={key}
                      name={key}
                      type={mapType(value)}
                      page="join-team"
                      key={index}
                      disabled={submitStatus}
                    />
                  </div>
                )
              )
            ) : (
              <div className="join-team__message">
                No additional fields required for this event
              </div>
            )}
            <EventBtn
              {...{ errors, isSubmitting, submitStatus }}
              successMessage={submitStatus}
            />
          </Form>
        )}
      </Formik>
    </EventForm>
  );
};

export default JoinTeam;
