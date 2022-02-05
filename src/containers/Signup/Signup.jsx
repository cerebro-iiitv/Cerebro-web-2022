import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Signup = () => {
  const validate = (values) => {
    let errors = {};
    if (values.proof === undefined)
      errors.proof = "Please upload a valid proof of identity";
    return errors;
  };

  const initialValues = {
    firstname: "",
    lastname: "",
    phone: "",
    address: "",
    institute: "",
    degree: "",
    proof: undefined,
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik {...{ validate, initialValues, onSubmit }}>
      {({ touched, errors, isSubmitting, setFieldValue }) => (
        <Form>
          <div>
            <label htmlFor="text">First name</label>
            <Field type="text" name="firstname" />
            <ErrorMessage component="div" name="firstname" />
          </div>
          <div>
            <label htmlFor="text">Last name</label>
            <Field type="text" name="lastname" />
            <ErrorMessage component="div" name="lastname" />
          </div>
          <div>
            <label htmlFor="tel">Contact No.</label>
            <Field type="tel" name="phone" />
            <ErrorMessage component="div" name="phone" />
          </div>
          <div>
            <label htmlFor="text">Address</label>
            <Field as="textarea" name="address" />
            <ErrorMessage component="div" name="address" />
          </div>
          <div>
            <label htmlFor="text">Institute Name</label>
            <Field type="text" name="institute" />
            <ErrorMessage component="div" name="institute" />
          </div>
          <div>
            <label htmlFor="text">Degree</label>
            <Field type="text" name="degree" />
            <ErrorMessage component="div" name="degree" />
          </div>
          <div>
            <label htmlFor="file">Proof of bachelors</label>
            <input
              type="file"
              name="proof"
              onChange={(event) => {
                setFieldValue("proof", event.currentTarget.files[0]);
              }}
            />
            <ErrorMessage component="div" name="proof" />
          </div>
          <div>
            <label htmlFor="email" name="email">
              Email ID
            </label>
            <Field type="email" name="email" />
            <ErrorMessage component="div" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage component="div" name="password" />
          </div>
          <div>
            <label htmlFor="password">Confirm Password</label>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage component="div" name="confirmPassword" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Please wait..." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Signup;
