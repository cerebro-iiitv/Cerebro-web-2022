import React from "react";
import { Formik, Form } from "formik";
import AuthForm from "../../components/AuthForm/AuthForm";
import FormInput from "../../components/FormInput/FormInput";
import { loginFormData, initialValues, validate } from "./util/LoginFormData";
import "./Login.scss";

const Login = () => {
  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <AuthForm title="Login" to="/signup" text="New member?" link="Sign Up">
      <Formik {...{ validate, initialValues, onSubmit }}>
        {({ isSubmitting }) => (
          <Form>
            {loginFormData.map(({ label, name, type }, index) => (
              <FormInput {...{ name, label, type }} key={index} page="login" />
            ))}
            <div className="login">
              <button
                type="submit"
                disabled={isSubmitting}
                className="login__button"
              >
                <span className="login__button__text">
                  {isSubmitting ? "Please wait..." : "Submit"}
                </span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </AuthForm>
  );
};

export default Login;
