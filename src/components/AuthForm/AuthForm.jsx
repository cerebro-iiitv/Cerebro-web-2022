import React from "react";
import leftarm from "../../assets/images/left-arm.svg";
import rightarm from "../../assets/images/right-arm.svg";
import noise from "../../assets/images/noise-3.svg";
import "./AuthForm.scss";

const AuthForm = ({ title, children }) => {
  return (
    <div className="authform">
      <div className="authform__pillar">
        <img
          src={leftarm}
          alt="left-border"
          className="authform__pillar__image"
        />
      </div>
      <div className="authform__center">
        <div className="authform__center__title">
          <img src={noise} alt="noise" />
          <div className="authform__center__title__text">{title}</div>
        </div>
        <div className="authform__center__form">
          <div className="authform__center__form__background">{children}</div>
        </div>
      </div>
      <div className="authform__pillar">
        <img
          src={rightarm}
          alt="left-border"
          className="authform__pillar__image"
        />
      </div>
    </div>
  );
};

export default AuthForm;
