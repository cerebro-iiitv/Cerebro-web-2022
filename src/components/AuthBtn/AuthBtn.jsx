import React from "react";
import BtnLoader from "../BtnLoader/BtnLoader";
import "./AuthBtn.scss";

const AuthBtn = ({
  errors,
  submitStatus,
  isSubmitting,
  btnText,
  successMessage,
}) => {
  const custom = submitStatus ? "disable" : "enable";

  return (
    <div className="authbtn">
      {errors.authentication && (
        <span className="authbtn__status__error">{errors.authentication}</span>
      )}
      {submitStatus && (
        <span className="authbtn__status__success">{successMessage}</span>
      )}
      <button
        type="submit"
        disabled={submitStatus}
        className={`authbtn__button__${custom}`}
      >
        <div className={`authbtn__button__${custom}__text`}>
          {isSubmitting ? <BtnLoader /> : btnText}
        </div>
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
