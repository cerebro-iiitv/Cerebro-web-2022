import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import EventForm from "../../components/EventForm/EventForm";
import FormInput from "../../components/FormInput/FormInput";
import EventBtn from "../../components/EventBtn/EventBtn";
import Loading from "../../components/Loading/Loading";
import axiosInstance from "../../services/AxiosInstance";
import "./CreateTeam.scss";

const CreateTeam = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [teamCode, setTeamCode] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axiosInstance.get(`/events/${eventId}`);
        console.log(res.data);
        if (!res.data.team_event) {
          navigate(`/event/join/${eventId}`);
        }
        setEvent(res.data);
        console.log(res.data);
      } catch {
        navigate("/event");
      }
    };
    getData();
  }, [eventId, navigate]);

  const toLabel = (field) =>
    field
      .toLowerCase()
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

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
        if (!values[field]) {
          errors[field] = "Required";
        }
      });
    }
    return errors;
  };

  const onSubmit = async (values, { setFieldError, setSubmitting }) => {
    console.log("hello");
    try {
      const data = {
        event: eventId,
        team_name: values.team_name,
        team_captain: { team_code: "111111" },
      };
      if (event.registration_attributes)
        data["team_captain"]["registration_data"] = { ...values };
      const res = await axiosInstance.post("/registration/team/", data);
      setSubmitStatus(res.data.success);
      setTeamCode(res.data.team_code);
    } catch (error) {
      if (error.response.data.Error)
        setFieldError("event", error.response.data.Error);
      else if (error.response.data.error)
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
            />
            <hr className="create-team__line" />
            {event.registration_attributes &&
              Object.entries(event.registration_attributes).map(
                ([key, value], index) => (
                  <div className="create-team__input" key={index}>
                    <FormInput
                      label={toLabel(key)}
                      name={key}
                      type={mapType(value)}
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
