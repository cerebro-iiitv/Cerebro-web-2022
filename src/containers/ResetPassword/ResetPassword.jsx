import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useParams } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import FormInput from "../../components/FormInput/FormInput";
import AuthBtn from "../../components/AuthBtn/AuthBtn";
import axiosInstance from "../../services/AxiosInstance";
import {
  resetPasswordFormData,
  initialValues,
  validate,
} from "./util/ResetPasswordFormData";
import "./ResetPassword.scss";

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
          <Form className="reset-password">
            {resetPasswordFormData.map(({ label, name, type }, index) => (
              <FormInput
                {...{ label, name, type }}
                page="reset-pass"
                key={index}
              />
            ))}
            <AuthBtn
              {...{ errors, submitStatus, isSubmitting }}
              btnText="Reset"
              successMessage="Password changed successfully"
            />
          </Form>
        )}
      </Formik>
    </AuthForm>
  );
};

export default ResetPassword;
