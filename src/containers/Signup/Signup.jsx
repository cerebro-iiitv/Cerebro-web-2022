<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8a852ba (auth UI)
import React, { useState } from "react";
import { Formik, Form } from "formik";
import AuthForm from "../../components/AuthForm/AuthForm";
import Page1 from "./FormPages/Page1";
import Page2 from "./FormPages/Page2";
import { initialValues, validatePage } from "./util/SignupFormData";
<<<<<<< HEAD
import axiosInstance from "../../services/AxiosInstance";
import "./Signup.scss";
import axiosInstance from "../../services/AxiosInstance";

const Signup = () => {
  const [page, setPage] = useState(1);
  const [submitStatus, setSubmitStatus] = useState(false);

  const validate = (values) => {
    const errors = validatePage(values, page);
    return errors;
  };

  const onSubmit = async (
    values,
    { setSubmitting, setFieldTouched, setFieldError }
  ) => {
    Object.keys(values).forEach((key) => setFieldTouched(key, false));
    if (page === 1) setPage(2);
    else {
      const form = new FormData();
      form.append("first_name", values.firstname);
      form.append("last_name", values.lastname);
      form.append("email", values.email);
      form.append("password", values.password);
      form.append("mobile_number", values.phone);
      // form.append("proof", values.proof); FILE UPLOAD
      form.append("proof", "https://github.com/cerebro-iiitv/Cerebro-web-2022");
      form.append("address", values.address);
      form.append("institute_name", values.institute);
      form.append("degree", values.degree);
      let res;
      try {
        res = await axiosInstance.post("/account/signup/", form, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (res.status === 201) {
          setSubmitStatus(true);
        } else if (res.data.email[0]) {
          setFieldError("authentication", res.data.email[0]);
          setSubmitStatus(false);
        }
      } catch {
        console.log(res);
        setFieldError("authentication", res.data || "Error");
      }
    }
=======
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
=======
import "./Signup.scss";
>>>>>>> 8a852ba (auth UI)

const Signup = () => {
  const [page, setPage] = useState(1);

  const validate = (values) => {
    const errors = validatePage(values, page);
    return errors;
  };

<<<<<<< HEAD
  const initialValues = {
    firstname: "",
    lastname: "",
    phone: "",
    address: "",
    institute: "",
    degree: "",
    proof: undefined,
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
>>>>>>> c41847c (:construction: auth form structure)
=======
  const onSubmit = (values, { setSubmitting, setFieldTouched }) => {
    Object.keys(values).forEach((key) => setFieldTouched(key, false));
    if (page === 1) setPage(2);
<<<<<<< HEAD
    else console.log(values);
>>>>>>> 8a852ba (auth UI)
=======
    else {
      axiosInstance.post("/signup", values);
      console.log(values.proof);
    }
>>>>>>> 66eaef8 (:art: auth context and axios instance)
    setSubmitting(false);
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <AuthForm to="/login" link="Login" title="Sign Up" text="Already a member?">
      <Formik {...{ validate, initialValues, onSubmit }}>
        {({ setFieldValue, isSubmitting, errors }) => (
=======
    <AuthForm to="/login" link="Login" title="Sign Up" text="Already a member?">
      <Formik {...{ validate, initialValues, onSubmit }}>
<<<<<<< HEAD
        {({ setFieldValue, setFieldTouched }) => (
>>>>>>> 8a852ba (auth UI)
=======
        {({ setFieldValue }) => (
>>>>>>> 66eaef8 (:art: auth context and axios instance)
          <Form className="signup">
            {page === 1 ? (
              <Page1 {...{ setFieldValue }} />
            ) : (
<<<<<<< HEAD
              <Page2
                {...{
                  setFieldValue,
                  setPage,
                  isSubmitting,
                  errors,
                  submitStatus,
                }}
              />
=======
              <Page2 {...{ setFieldValue, setPage }} />
>>>>>>> 8a852ba (auth UI)
            )}
          </Form>
        )}
      </Formik>
    </AuthForm>
<<<<<<< HEAD
=======
    <Formik {...{ validate, initialValues, onSubmit }}>
      {({ touched, errors, isSubmitting, setFieldValue }) => (
        <Form>
          <div>
            <label htmlFor="text">First name</label>
            <Field type="text" name="firstname" />
            <ErrorMessage component="div" name="firstname" />
          </div>
          <div>
            <label htmlFor="text">Last name</label>
            <Field type="text" name="lastname" />
            <ErrorMessage component="div" name="lastname" />
          </div>
          <div>
            <label htmlFor="tel">Contact No.</label>
            <Field type="tel" name="phone" />
            <ErrorMessage component="div" name="phone" />
          </div>
          <div>
            <label htmlFor="text">Address</label>
            <Field as="textarea" name="address" />
            <ErrorMessage component="div" name="address" />
          </div>
          <div>
            <label htmlFor="text">Institute Name</label>
            <Field type="text" name="institute" />
            <ErrorMessage component="div" name="institute" />
          </div>
          <div>
            <label htmlFor="text">Degree</label>
            <Field type="text" name="degree" />
            <ErrorMessage component="div" name="degree" />
          </div>
          <div>
            <label htmlFor="file">Proof of bachelors</label>
            <input
              type="file"
              name="proof"
              onChange={(event) => {
                setFieldValue("proof", event.currentTarget.files[0]);
              }}
            />
            <ErrorMessage component="div" name="proof" />
          </div>
          <div>
            <label htmlFor="email" name="email">
              Email ID
            </label>
            <Field type="email" name="email" />
            <ErrorMessage component="div" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage component="div" name="password" />
          </div>
          <div>
            <label htmlFor="password">Confirm Password</label>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage component="div" name="confirmPassword" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Please wait..." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
>>>>>>> c41847c (:construction: auth form structure)
=======
>>>>>>> 8a852ba (auth UI)
  );
};

export default Signup;
