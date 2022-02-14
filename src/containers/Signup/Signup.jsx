import React, { useState } from "react";
import { Formik, Form } from "formik";
import AuthForm from "../../components/AuthForm/AuthForm";
import Page1 from "./FormPages/Page1";
import Page2 from "./FormPages/Page2";
import { initialValues, validatePage } from "./util/SignupFormData";
import axiosInstance from "../../services/AxiosInstance";
import "./Signup.scss";

const Signup = () => {
  const [page, setPage] = useState(1);
  const [submitStatus, setSubmitStatus] = useState(false);

  const validate = (values) => {
    const errors = validatePage(values, page);
    return errors;
  };

  const onSubmit = async (
    values,
    { setSubmitting, setFieldTouched, setFieldError }
  ) => {
    Object.keys(values).forEach((key) => setFieldTouched(key, false));
    if (page === 1) setPage(2);
    else {
      const form = new FormData();
      form.append("first_name", values.firstname);
      form.append("last_name", values.lastname);
      form.append("email", values.email);
      form.append("password", values.password);
      form.append("mobile_number", values.phone);
      // form.append("proof", values.proof); FILE UPLOAD
      form.append("proof", "https://github.com/cerebro-iiitv/Cerebro-web-2022");
      form.append("address", values.address);
      form.append("institute_name", values.institute);
      form.append("degree", values.degree);
      let res;
      try {
        res = await axiosInstance.post("/account/signup/", form, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (res.status === 201) {
          setSubmitStatus(true);
        } else if (res.data.email[0]) {
          setFieldError("authentication", res.data.email[0]);
          setSubmitStatus(false);
        }
      } catch {
        console.log(res);
        setFieldError("authentication", res.data || "Error");
      }
    }
    setSubmitting(false);
  };

  return (
    <AuthForm to="/login" link="Login" title="Sign Up" text="Already a member?">
      <Formik {...{ validate, initialValues, onSubmit }}>
        {({ setFieldValue, isSubmitting, errors }) => (
          <Form className="signup">
            {page === 1 ? (
              <Page1 {...{ setFieldValue }} />
            ) : (
              <Page2
                {...{
                  setFieldValue,
                  setPage,
                  isSubmitting,
                  errors,
                  submitStatus,
                }}
              />
            )}
          </Form>
        )}
      </Formik>
    </AuthForm>
  );
};

export default Signup;
