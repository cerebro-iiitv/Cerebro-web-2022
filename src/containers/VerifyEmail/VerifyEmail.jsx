import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loading from "../../components/LoadingSpinner/LoadingSpinner"; 
import axiosInstance from "../../services/AxiosInstance";
import "./VerifyEmail.scss";

const VerifyEmail = () => {
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    if (!!token) {
      const checkToken = async () => {
        try {
          const res = await axiosInstance.get(`/account/email-verify/?token=${token}`);
          if (res.data.email) {
            setVerified(true);
            setTimeout(() => navigate("/login"), 4000);
          } else setError(true);
        } catch (error) {
          setVerified(false);
          setError(error.response.data.error || "Invalid token");
          setTimeout(() => navigate("/signup"), 4000);
        }
      };
      checkToken();
    } else {
      navigate("/");
    }
  }, [navigate, searchParams]);

  return (
    <div className="verify-email">
      {!error && (
        <div className="verify-email__loading">
          <Loading />
        </div>
      )}
      <div className="verify-email__text">
        {error && (
          <p className="verify-email__text__error">
            {error} <br />
            Please try again
          </p>
        )}
        {verified && !error && (
          <p>
            Email verified! <br />
            Taking you back to the login page
          </p>
        )}
        {!verified && !error && <p>Verifying email....</p>}
      </div>
    </div>
  );
};

export default VerifyEmail;
