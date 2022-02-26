import React from "react";
import "./AuthBtn.scss";

const AuthBtn = ({
  errors,
  submitStatus,
  isSubmitting,
  btnText,
  successMessage,
}) => {
  return (
    <div className="authbtn">
      {errors.authentication && (
        <span className="authbtn__status__error">{errors.authentication}</span>
      )}
      {submitStatus && (
        <span className="authbtn__status__success">{successMessage}</span>
      )}
      <button type="submit" disabled={isSubmitting} className="authbtn__button">
        <span className="authbtn__button__text">{btnText}</span>
      </button>
    </div>
  );
};

AuthBtn.defaultProps = {
  submitStatus: false,
  successMessage: "Succeeded",
  btnText: "Submit",
};

export default AuthBtn;
