import React from "react";
import { Formik, Form } from "formik";
import AuthForm from "../../components/AuthForm/AuthForm";
import FormInput from "../../components/FormInput/FormInput";
import {
  resetPasswordFormData,
  initialValues,
  validate,
} from "./util/ResetPasswordFormData";

const ResetPassword = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <AuthForm title="Reset Password" to="/" text="Return to home?" link="Home">
      <Formik {...{ validate, initialValues, onSubmit }}>
        {({ isSubmitting }) => (
          <Form>
            {resetPasswordFormData.map(({ label, name, type }, index) => (
              <FormInput
                {...{ label, name, type }}
                page="reset-pass"
                key={index}
              />
            ))}
            <div className="auth">
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
