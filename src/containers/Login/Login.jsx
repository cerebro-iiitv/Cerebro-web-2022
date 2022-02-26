import React from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AuthForm from "../../components/AuthForm/AuthForm";
import FormInput from "../../components/FormInput/FormInput";
import AuthBtn from "../../components/AuthBtn/AuthBtn";
import { loginFormData, initialValues, validate } from "./util/LoginFormData";
import axiosInstance from "../../services/AxiosInstance";

const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const onSubmit = async (values, { setSubmitting, setFieldError }) => {
    console.log(values);
    try {
      const res = await axiosInstance.post("/account/login/", values);
      auth.login(res.data.Token);
      navigate("/");
    } catch (error) {
      setFieldError("authentication", "Invalid email or password");
    }
    setSubmitting(false);
  };

  return (
    <AuthForm title="Login" to="/signup" text="New member?" link="Sign Up">
      <Formik {...{ validate, initialValues, onSubmit }}>
        {({ isSubmitting, errors }) => (
          <Form>
            {loginFormData.map(({ label, name, type }, index) => (
              <FormInput {...{ name, label, type }} key={index} page="login" />
            ))}
            <AuthBtn {...{ errors, isSubmitting }} btnText="Login" />
          </Form>
        )}
      </Formik>
    </AuthForm>
  );
};

export default Login;
