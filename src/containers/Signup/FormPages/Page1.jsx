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
<<<<<<< HEAD
      <div className="signup__bottom__buttons">
        <button className="signup__bottom__buttons__page" type="submit">
=======
      <div className="signup__buttons">
        <button className="signup__buttons__page" type="submit">
>>>>>>> 8a852ba (auth UI)
          Next Page
          <img
            src={rightarrow}
            alt="next"
<<<<<<< HEAD
            className="signup__bottom__buttons__page__arrow"
=======
            className="signup__buttons__page__arrow"
>>>>>>> 8a852ba (auth UI)
          />
        </button>
      </div>
    </>
  );
};

export default Page1;
