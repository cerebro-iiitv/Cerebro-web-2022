import React from "react";
import FormInput from "../../../components/FormInput/FormInput";
import { signupFormData } from "../util/SignupFormData";
import rightarrow from "../../../assets/images/right-arrow.svg";
import "../Signup.scss";

const Page1 = ({ setFieldValue }) => {
  return (
    <>
      {signupFormData.page1.map(({ label, name, type }, index) => (
        <FormInput
          key={index}
          {...{ label, name, type }}
          page="signup"
          setFieldValue={setFieldValue}
        />
      ))}
      <div className="signup__bottom__buttons">
        <button className="signup__bottom__buttons__page" type="submit">
          Next Page
          <img
            src={rightarrow}
            alt="next"
            className="signup__bottom__buttons__page__arrow"
          />
        </button>
      </div>
    </>
  );
};

export default Page1;
