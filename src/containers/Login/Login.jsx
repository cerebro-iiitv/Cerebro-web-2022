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
    setSubmitting(false);
  };

  return (
    <AuthForm title="Login" to="/signup" text="New member?" link="Sign Up">
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
          </Form>
        )}
      </Formik>
    </AuthForm>
  );
};

export default Login;
