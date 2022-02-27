import React from "react";
import logo from "../../assets/images/Events/Logo.png";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading-logo__container">
      <img
        src={logo}
        alt="cerebro-loading-logo"
        className="loading-logo__container__logo"
      />
    </div>
  );
};

export default Loading;
