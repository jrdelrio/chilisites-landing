import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import logo from "../img/logo-chilisites.png";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg mx-lg-5 d-flex align-items-center">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} className="navbar-logo"/>
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
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Offcanvas
            </h5>
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
                <a className="nav-link" aria-current="page" href="#">
                  SERVICIOS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PROYECTOS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  SOBRE NOSOTROS
                </a>
              </li>
            </ul>
            <div className="align-devices mt-3">
            <PrimaryButton title="CONTÁCTANOS" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
