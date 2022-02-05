import React from "react";
import FormInput from "../../../components/FormInput/FormInput";
import { signupFormData } from "../util/SignupFormData";
import leftarrow from "../../../assets/images/left-arrow.svg";
import "../Signup.scss";

<<<<<<< HEAD
const Page2 = ({
  setFieldValue,
  setPage,
  isSubmitting,
  errors,
  submitStatus,
}) => {
=======
const Page2 = ({ setFieldValue, setPage }) => {
>>>>>>> 8a852ba (auth UI)
  return (
    <>
      {signupFormData.page2.map(({ label, name, type }, index) => (
        <FormInput
          key={index}
          {...{ label, name, type }}
          page="signup"
          setFieldValue={setFieldValue}
        />
      ))}
<<<<<<< HEAD
      <div className="signup__bottom">
        <div className="signup__bottom__status">
          {errors.authentication && (
            <span className="signup__bottom__status__error">
              {console.log(errors.authentication)}
              {typeof errors.authentication === "object"
                ? ""
                : errors.authentication}
            </span>
          )}
          {submitStatus && (
            <span className="signup__bottom__status__success">
              Please confirm your email address
            </span>
          )}
        </div>
        <div className="signup__bottom__buttons">
          <button
            className="signup__bottom__buttons__page"
            onClick={() => setPage(1)}
          >
            <img
              src={leftarrow}
              alt="back"
              className="signup__bottom__buttons__page__arrow"
            />
            Prev Page
          </button>
          <div className="signup__bottom__buttons__vl" />
          <button
            type="submit"
            className="signup__bottom__buttons__submit"
            disabled={isSubmitting}
          >
            <span className="signup__bottom__buttons__submit__text">
              Submit
            </span>
          </button>
        </div>
=======
      <div className="signup__buttons">
        <button className="signup__buttons__page" onClick={() => setPage(1)}>
          <img
            src={leftarrow}
            alt="back"
            className="signup__buttons__page__arrow"
          />
          Prev Page
        </button>
        <div className="signup__buttons__vl" />
        <button type="submit" className="signup__buttons__submit">
          <span className="signup__buttons__submit__text">Submit</span>
        </button>
>>>>>>> 8a852ba (auth UI)
      </div>
    </>
  );
};

export default Page2;
