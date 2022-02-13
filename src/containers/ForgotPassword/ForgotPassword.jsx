import React, { useState } from "react";
import { Formik, Form } from "formik";
import AuthForm from "../../components/AuthForm/AuthForm";
import FormInput from "../../components/FormInput/FormInput";
import axiosInstance from "../../services/AxiosInstance";
import {
  forgotPasswordFormData,
  initialValues,
  validate,
} from "./util/ForgotPasswordFormData";

const ForgotPassword = () => {
  const [submitStatus, setSubmitStatus] = useState("");

  const onSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const res = await axiosInstance.post(
        "account/request-reset-password/",
        values
      );
      if (res.data.success) setSubmitStatus(res.data.success);
      else setFieldError("authentication", res.data.status);
    } catch (error) {
      setFieldError("authentication", "Invalid email address");
    }
    setSubmitting(false);
  };

  return (
    <AuthForm
      title="Forgot Password"
      to="/signup"
      text="Don't have an account?"
      link="Sign Up"
    >
      <Formik {...{ validate, initialValues, onSubmit }}>
        {({ isSubmitting, errors }) => (
          <Form>
            {forgotPasswordFormData.map(({ label, name, type }, index) => (
              <FormInput
                {...{ label, name, type }}
                key={index}
                page="forgot-pass"
              />
            ))}
            <div className="auth">
              {errors.authentication && (
                <span className="auth__status__error">
                  {errors.authentication}
                </span>
              )}
              {submitStatus && (
                <span className="auth__status__success">
                  Check your email for a link to reset your password
                </span>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="auth__button"
              >
                <span className="auth__button__text">Mail Me</span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </AuthForm>
  );
};

export default ForgotPassword;
