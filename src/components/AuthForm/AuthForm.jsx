import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from "react-router-dom";
import leftarm from "../../assets/images/left-arm.svg";
import rightarm from "../../assets/images/right-arm.svg";
<<<<<<< HEAD
import "./AuthForm.scss";

const AuthForm = ({ title, children, to, text, link }) => {
=======
=======
import { Link } from "react-router-dom";
>>>>>>> 8a852ba (auth UI)
import leftarm from "../../assets/images/left-arm.svg";
import rightarm from "../../assets/images/right-arm.svg";
import noise from "../../assets/images/noise-3.svg";
=======
>>>>>>> 35a46db (connect authorization to server)
import "./AuthForm.scss";

<<<<<<< HEAD
const AuthForm = ({ title, children }) => {
>>>>>>> c41847c (:construction: auth form structure)
=======
const AuthForm = ({ title, children, to, text, link }) => {
>>>>>>> 8a852ba (auth UI)
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
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="authform__center__title__text">{title}</div>
        </div>
        <div className="authform__center__form">
          <div className="authform__center__form__container">
            {children}
            <span className="authform__center__form__container__text">
              {`${text} `}
              <Link
                to={to}
                className="authform__center__form__container__text__link"
              >
                {link}
              </Link>
            </span>
          </div>
=======
          <img src={noise} alt="noise" />
=======
>>>>>>> 35a46db (connect authorization to server)
          <div className="authform__center__title__text">{title}</div>
        </div>
        <div className="authform__center__form">
<<<<<<< HEAD
          <div className="authform__center__form__background">{children}</div>
>>>>>>> c41847c (:construction: auth form structure)
=======
          <div className="authform__center__form__container">
            {children}
            <span className="authform__center__form__container__text">
              {`${text} `}
              <Link
                to={to}
                className="authform__center__form__container__text__link"
              >
                {link}
              </Link>
            </span>
          </div>
>>>>>>> 8a852ba (auth UI)
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
