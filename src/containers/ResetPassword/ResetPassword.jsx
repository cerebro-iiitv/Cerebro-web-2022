import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useParams } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import FormInput from "../../components/FormInput/FormInput";
import axiosInstance from "../../services/AxiosInstance";
import {
  resetPasswordFormData,
  initialValues,
  validate,
} from "./util/ResetPasswordFormData";

const ResetPassword = () => {
  const [submitStatus, setSubmitStatus] = useState("");
  const { uidb64, token } = useParams();

  const onSubmit = async (values, { setSubmitting, setFieldError }) => {
    const data = {
      password1: values.password,
      password2: values.confirmPassword,
      uidb64,
      token,
    };
    let res;
    try {
      res = await axiosInstance.patch("/account/password-reset/", data);
      if (res.data.message) setSubmitStatus(res.data.message);
      else setFieldError("authentication", "An error occurred");
    } catch (error) {
      setFieldError(
        "authentication",
        "Password reset link is not valid, please request a new link"
      );
    }
    setSubmitting(false);
  };

  return (
    <AuthForm title="Reset Password" to="/" text="Return to home?" link="Home">
      <Formik {...{ validate, initialValues, onSubmit }}>
        {({ isSubmitting, errors }) => (
          <Form>
            {resetPasswordFormData.map(({ label, name, type }, index) => (
              <FormInput
                {...{ label, name, type }}
                page="reset-pass"
                key={index}
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
                  Password changed successfully
                </span>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="auth__button"
              >
                <span className="auth__button__text">Reset</span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </AuthForm>
  );
};

export default ResetPassword;
