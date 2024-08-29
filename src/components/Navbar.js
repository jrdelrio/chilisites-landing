import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import logo from "../img/logo-chilisites.png";
import "../styles/navbar.css";
import { Offcanvas } from "bootstrap";

const Navbar = () => {
  const handleClick = () => {
    const offcanvasElement = document.getElementById("offcanvasNavbar");
    const offcanvasInstance = Offcanvas.getInstance(offcanvasElement);
    if (offcanvasInstance) {
      offcanvasInstance.hide();
    }
  };

  const styles = {
    border: 'none',
    background: 'none'
  }

  return (
    <nav className="navbar navbar-expand-lg mx-lg-5 d-flex align-items-center">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} className="navbar-logo" alt="Chilisites Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 align-items-center">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#servicios" aria-label="Close">
                  SERVICIOS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#proyectos">
                  PROYECTOS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-us">
                  SOBRE NOSOTROS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  CONTÁCTANOS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
