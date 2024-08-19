import React, { useState } from "react";
import "../styles/primary-button.css";

const PrimaryButton = (props) => {
  return (
    <div className="primary-button-wrapper">
      <a className="primary-button-anchor" href="#contact">{props.title}</a>
    </div>
  );
};

export default PrimaryButton;
