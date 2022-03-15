import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Formik, Form } from "formik";
import EventForm from "../../components/EventForm/EventForm";
import FormInput from "../../components/FormInput/FormInput";
import EventBtn from "../../components/EventBtn/EventBtn";
import Loading from "../../components/LoadingSpinner/LoadingSpinner";
import FormMessage from "../../components/FormMessage/FormMessage";
import axiosInstance from "../../services/AxiosInstance";
import eventData from "../Events/util/EventData.json";
import "./Submission.scss";

const Submission = () => {
  const navigate = useNavigate();
  const { eventName } = useParams();
  const [event, setEvent] = useState(null);
  const [submitStatus, setSubmitStatus] = useState("");
  const [eventId, setEventId] = useState("");
  const mountedRef = useRef(true);

  useEffect(() => {
    const getData = async () => {
      try {
        if (!eventName) throw new Error("No event name provided");
        const id = eventData[eventName.toUpperCase()];
        if (!id) throw new Error("Event not found");
        setEventId(id);
        const res = await axiosInstance.get(`/events/${id}`);
        if (!res.data.submission_required) {
          navigate(`/event/join/${eventName}`);
        }
        setEvent(res.data);
      } catch {
        navigate("/events");
      }
    };
    getData();
    return () => (mountedRef.current = false);
  }, [eventName, navigate]);

  const getInitialValues = () => {
    const values = { event: "" };
    if (event.submission_attributes) {
      Object.keys(event.submission_attributes).forEach(
        (field) => (values[field] = "")
      );
    }
    return values;
  };

  const validate = (values) => {
    const errors = {};
    if (event.submission_attributes) {
      Object.keys(event.submission_attributes).forEach((field) => {
        const regex = new RegExp(event.submission_attributes[field]);
        if (!values[field]) {
          errors[field] = "Required";
        } else if (!regex.test(values[field])) {
          errors[field] = `Invalid ${field}`;
        }
      });
    }
    return errors;
  };

  const onSubmit = async (values, { setFieldError }) => {
    try {
      const data = {
        event_id: eventId,
        submission_data: { ...values },
      };
      delete data.submission_data.event;
      const res = await axiosInstance.post("/registration/submission/", data);
      setSubmitStatus(res.data.success || "Submission successful");
    } catch (error) {
      if (error.response?.data?.Error)
        setFieldError("event", error.response.data.Error);
      else if (error.response?.data?.error)
        setFieldError("event", error.response.data.error);
      else setFieldError("event", "Something went wrong");
    }
  };

  if (!event) return <Loading />;

  if (!event.is_registered) {
    return (
      <FormMessage title={event.title}>
        You have not registered for this event <br />
        {event.registration_closed ? (
          "Registrations have closed, please try again next year"
        ) : (
          <span>
            Please
            <Link to={`/event/join/${eventName}`} className="submission__link">
              {` register `}
            </Link>
            to submit
          </span>
        )}
      </FormMessage>
    );
  }

  if (event.submitted) {
    return (
      <FormMessage title={event.title}>
        You have already made your submission for this event
      </FormMessage>
    );
  }

  if (event.team_event && !event.team_full) {
    return (
      <FormMessage title={event.title}>
        Your team is not full yet, please complete your team before submitting
      </FormMessage>
    );
  }

  return (
    <EventForm title={event.title}>
      <Formik {...{ validate, onSubmit }} initialValues={getInitialValues()}>
        {({ isSubmitting, errors }) => (
          <Form className="submission">
            {Object.entries(event.submission_attributes).map(
              ([key, _], index) => (
                <div className="submission__input" key={index}>
                  <FormInput
                    label={key}
                    name={key}
                    type="text"
                    page="submission"
                    key={index}
                    disabled={submitStatus}
                  />
                </div>
              )
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

export default Submission;
