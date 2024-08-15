import React from "react";
import "../styles/primary-button.css";

const PrimaryButton = (props) => {
  return (
    <a href="">
      <button className="button-primary" type="button">
        {props.title}
      </button>
    </a>
  );
};

export default PrimaryButton;
