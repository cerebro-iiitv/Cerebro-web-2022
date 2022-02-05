import React, { useState } from "react";
import { Formik, Form } from "formik";
import AuthForm from "../../components/AuthForm/AuthForm";
import Page1 from "./FormPages/Page1";
import Page2 from "./FormPages/Page2";
import { initialValues, validatePage } from "./util/SignupFormData";
import "./Signup.scss";

const Signup = () => {
  const [page, setPage] = useState(1);

  const validate = (values) => {
    const errors = validatePage(values, page);
    return errors;
  };

  const onSubmit = (values, { setSubmitting, setFieldTouched }) => {
    Object.keys(values).forEach((key) => setFieldTouched(key, false));
    if (page === 1) setPage(2);
    else console.log(values);
    setSubmitting(false);
  };

  return (
    <AuthForm to="/login" link="Login" title="Sign Up" text="Already a member?">
      <Formik {...{ validate, initialValues, onSubmit }}>
        {({ setFieldValue, setFieldTouched }) => (
          <Form className="signup">
            {page === 1 ? (
              <Page1 {...{ setFieldValue }} />
            ) : (
              <Page2 {...{ setFieldValue, setPage }} />
            )}
          </Form>
        )}
      </Formik>
    </AuthForm>
  );
};

export default Signup;
