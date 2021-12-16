import React from "react";
import "./somethingWentWrong.css";
import DangerousIcon from "@mui/icons-material/Dangerous";
import worriedManImage from "../../assests/imgs/33204800.jpg";

export const SomethingWentWrong = (props) => {
  const { errorCode, errorMessage } = props;
  return (
    <div className="somethingWentWrong">
      <div className="hero-Img">
        <img src={worriedManImage} alt="worried man"></img>
      </div>
      <div className="error-container">
        <span>
          <DangerousIcon fontSize="large" />
          <h6>SOMETHING WENT WRONG !</h6>
        </span>
        <h1>{errorCode?.toUpperCase()}</h1>
        <h3>{errorMessage?.toUpperCase()}</h3>
      </div>
    </div>
  );
};
