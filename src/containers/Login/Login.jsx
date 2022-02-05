<<<<<<< HEAD
import React, { useContext } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import FormInput from "../../components/FormInput/FormInput";
import { loginFormData, initialValues, validate } from "./util/LoginFormData";
import axiosInstance from "../../services/AxiosInstance";
import AuthContext from "../../store/AuthContext";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const onSubmit = async (values, { setSubmitting, setFieldError }) => {
    console.log(values);
    try {
      const res = await axiosInstance.post("/account/login/", values);
      authCtx.login(res.data.Token);
      navigate("/");
    } catch (error) {
      setFieldError("authentication", "Invalid email or password");
    }
=======
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthForm from "../../components/AuthForm/AuthForm";

const Login = () => {
  const validate = (values) => {
    let errors = {};
    // if (values.username.trim() === "") errors.username = "Username is required";
    // else if (values.username.trim().length < 4)
    //   errors.username = "Username must be at least 4 characters";
    if (values.password.trim() === "") errors.password = "Password is required";
    else if (values.password.trim().length < 4)
      errors.password = "Password must be at least 4 characters";
    return errors;
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
>>>>>>> c41847c (:construction: auth form structure)
    setSubmitting(false);
  };

  return (
    <AuthForm title="Login" to="/signup" text="New member?" link="Sign Up">
<<<<<<< HEAD
      <Formik {...{ validate, initialValues, onSubmit }}>
        {({ isSubmitting, errors }) => (
          <Form>
            {loginFormData.map(({ label, name, type }, index) => (
              <FormInput {...{ name, label, type }} key={index} page="login" />
            ))}
            <div className="login">
              {errors.authentication && (
                <span className="login__error">{errors.authentication}</span>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="login__button"
              >
                <span className="login__button__text" disabled={isSubmitting}>
                  Submit
                </span>
              </button>
            </div>
=======
      <Formik
        validate={validate}
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmit}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="text">Registered Email</label>
              <Field type="email" name="email" placeholder="email" />
              <ErrorMessage component="div" name="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage component="div" name="password" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Please wait..." : "Submit"}
            </button>
>>>>>>> c41847c (:construction: auth form structure)
          </Form>
        )}
      </Formik>
    </AuthForm>
  );
};

export default Login;
