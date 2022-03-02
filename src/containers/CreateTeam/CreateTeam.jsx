import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import EventForm from "../../components/EventForm/EventForm";
import FormInput from "../../components/FormInput/FormInput";
import EventBtn from "../../components/EventBtn/EventBtn";
import Loading from "../../components/LoadingSpinner/LoadingSpinner";
import axiosInstance from "../../services/AxiosInstance";
import eventData from "../Events/util/EventData.json";
import "./CreateTeam.scss";

const CreateTeam = () => {
  const navigate = useNavigate();
  const { eventName } = useParams();
  const [event, setEvent] = useState(null);
  const [teamCode, setTeamCode] = useState("");
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
        if (!res.data.team_event || res.data.is_registered) {
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
    const values = { team_name: "", event: "" };
    if (event.registration_attributes) {
      Object.keys(event.registration_attributes).forEach(
        (field) => (values[field] = "")
      );
    }
    return values;
  };

  const validate = (values) => {
    const errors = {};
    if (!values.team_name) errors["team_name"] = "Required";
    else if (values.team_name.length < 3)
      errors["team_name"] = "Must be at least 3 characters";
    if (event.registration_attributes) {
      Object.keys(event.registration_attributes).forEach((field) => {
        const regex = new RegExp(event.registration_attributes[field]);
        if (!values[field]) {
          console.log(field)
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
        event: eventId,
        team_name: values.team_name,
        team_captain: { team_code: "111111" },
      };
      if (event.registration_attributes) {
        data["team_captain"]["registration_data"] = { ...values };
        delete data["team_captain"]["registration_data"]["team_name"];
        delete data["team_captain"]["registration_data"]["event"];
      }
      const res = await axiosInstance.post("/registration/team/", data);
      setSubmitStatus(res.data.success);
      setTeamCode(res.data.team_code);
    } catch (error) {
      if (error.response?.data?.Error)
        setFieldError("event", error.response.data.Error);
      else if (error.response?.data?.error)
        setFieldError("event", error.response.data.error);
      else setFieldError("event", "Something went wrong");
    }
  };

  if (!event) return <Loading />;

  return (
    <EventForm title={event.title}>
      <Formik {...{ validate, onSubmit }} initialValues={getInitialValues()}>
        {({ isSubmitting, errors }) => (
          <Form className="create-team">
            <FormInput
              label="Team Name"
              name="team_name"
              type="text"
              page="create-team"
              disabled={submitStatus}
            />
            <hr className="create-team__line" />
            {event.registration_attributes &&
              Object.entries(event.registration_attributes).map(
                ([key], index) => (
                  <div className="create-team__input" key={index}>
                    <FormInput
                      disabled={submitStatus}
                      label={key}
                      name={key}
                      type="text"
                      page="create-team"
                      key={index}
                    />
                  </div>
                )
              )}
            <EventBtn
              {...{ errors, isSubmitting, submitStatus }}
              successMessage={
                <>
                  <div className="create-team__message">
                    Team created successfully! Let other members join your team
                    using the team code given below
                  </div>
                  <div className="create-team__success">
                    <span className="create-team__success__code">
                      {teamCode}
                    </span>
                  </div>
                </>
              }
            />
          </Form>
        )}
      </Formik>
    </EventForm>
  );
};

export default CreateTeam;
