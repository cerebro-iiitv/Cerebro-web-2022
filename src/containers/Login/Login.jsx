import React, { useContext } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import FormInput from "../../components/FormInput/FormInput";
import { loginFormData, initialValues, validate } from "./util/LoginFormData";
import axiosInstance from "../../services/AxiosInstance";
import AuthContext from "../../store/AuthContext";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const onSubmit = async (values, { setSubmitting, setFieldError }) => {
    console.log(values);
    try {
      const res = await axiosInstance.post("/account/login/", values);
      authCtx.login(res.data.Token);
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
            <div className="login">
              {errors.authentication && (
                <span className="login__error">{errors.authentication}</span>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="login__button"
              >
                <span className="login__button__text" disabled={isSubmitting}>
                  Submit
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
