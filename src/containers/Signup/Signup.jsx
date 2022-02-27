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
      let res;
      try {
        const fileUpload = new FormData();
        fileUpload.append("pdf", values.proof);
        fileUpload.append("email", values.email);
        res = await axiosInstance.post("/docs/proof-upload/", fileUpload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        const id = res.data.id;
        const data = {
          first_name: values.firstname,
          last_name: values.lastname,
          email: values.email,
          password: values.password,
          mobile_number: values.phone,
          proof_id: id,
          address: values.address,
          institute_name: values.institute,
          degree: values.degree,
        };
        res = await axiosInstance.post("/account/signup/", data);
        if (res.status === 201) {
          setSubmitStatus(true);
        } else if (res.data.email[0]) {
          setFieldError("authentication", res.data.email[0]);
          setSubmitStatus(false);
        }
      } catch (error) {
        console.log(res);
        setFieldError("authentication", res.data || res.error || "Error");
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
