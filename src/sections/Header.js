import React from "react";
import "../styles/header.css";
import Navbar from "../components/Navbar";
import PrimaryButton from "../components/PrimaryButton";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="presentation text-center">
        <h1 className="main-title lalezar-regular">haz crecer <br/>tu empresa</h1>
        <h3 className="main-subtitle titillium-web-semibold">
          Diseñamos, desarrollamos, optimizamos y promocionamos tu sitio web
        </h3>
        <PrimaryButton title="CONTÁCTANOS" />
      </div>
    </header>
  );
};

export default Header;
