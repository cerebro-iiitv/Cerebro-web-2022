import React, { useState } from "react";
import { Formik, Form } from "formik";
import AuthForm from "../../components/AuthForm/AuthForm";
import FormInput from "../../components/FormInput/FormInput";
import AuthBtn from "../../components/AuthBtn/AuthBtn";
import axiosInstance from "../../services/AxiosInstance";
import {
  changePasswordFormData,
  initialValues,
  validate,
} from "./util/ChangePasswordFormData";
import "./ChangePassword.scss";

const ChangePassword = () => {
  const [submitStatus, setSubmitStatus] = useState("");

  const onSubmit = async (values, { setSubmitting, setFieldError }) => {
    const data = {
      old_password: values.oldPassword,
      new_password1: values.newPassword,
      new_password2: values.confirmPassword,
    };
    let res;
    try {
      res = await axiosInstance.patch("/account/change-password/", data);
      if (res.data.message) setSubmitStatus(res.data.message);
      else setFieldError("authentication", "An error occurred");
    } catch (error) {
      setFieldError("authentication", "Wrong Password");
    }
    setSubmitting(false);
  };

  return (
    <AuthForm
      title="Change Password"
      to="/"
      text="Return to dashboard?"
      link="Dashboard"
    >
      <Formik {...{ validate, initialValues, onSubmit }}>
        {({ isSubmitting, errors }) => (
          <Form className="change-password">
            {changePasswordFormData.map(({ label, name, type }, index) => (
              <FormInput
                {...{ label, name, type }}
                page="change-pass"
                key={index}
                disabled={submitStatus}
              />
            ))}
            <AuthBtn
              {...{ errors, isSubmitting, submitStatus }}
              btnText="Change"
              successMessage="Password changed successfully"
            />
          </Form>
        )}
      </Formik>
    </AuthForm>
  );
};

export default ChangePassword;
