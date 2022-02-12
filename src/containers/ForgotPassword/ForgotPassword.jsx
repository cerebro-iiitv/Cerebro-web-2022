import React from "react";
import { Formik, Form } from "formik";
import AuthForm from "../../components/AuthForm/AuthForm";
import FormInput from "../../components/FormInput/FormInput";
import {
  forgotPasswordFormData,
  initialValues,
  validate,
} from "./util/ForgotPasswordFormData";

const ForgotPassword = () => {
  const onSubmit = (values, { setSubmitting, setFieldError }) => {
    console.log(values);
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
        {({ isSubmitting }) => (
          <Form>
            {forgotPasswordFormData.map(({ label, name, type }, index) => (
              <FormInput
                {...{ label, name, type }}
                key={index}
                page="forgot-pass"
              />
            ))}
            <div className="auth">
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
