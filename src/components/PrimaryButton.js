import React, { useState } from "react";
import "../styles/primary-button.css";

const PrimaryButton = (props) => {
  return (
    <div class="primary-button-wrapper">
      <a class="primary-button-anchor" href="#">{props.title}</a>
    </div>
  );
};

export default PrimaryButton;
