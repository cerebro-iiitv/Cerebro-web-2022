import React from "react";
import FormInput from "../../../components/FormInput/FormInput";
import { signupFormData } from "../util/SignupFormData";
import leftarrow from "../../../assets/images/left-arrow.svg";
import "../Signup.scss";

const Page2 = ({ setFieldValue, setPage }) => {
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
      </div>
    </>
  );
};

export default Page2;
