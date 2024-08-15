import React from "react";
import logo from "../img/logo-chilisites-2.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="d-flex py-4 w-100">
      <div className="container d-flex flex-wrap">
        <div className="col-sm-5 col-md-4 col-lg-2 sm-center">
          <img src={logo} alt="Logo" />
        </div>
        <div className="col-sm-7 col-md-8 col-lg-10 d-flex align-items-center">
          <ul className="nav d-flex w-100 footer-list">
            <li className="nav-item flex-fill">
              <a href="#" className="nav-link footer-link">
                servicios
              </a>
            </li>
            <li className="nav-item flex-fill">
              <a href="#" className="nav-link footer-link">
                proyectos
              </a>
            </li>
            <li className="nav-item flex-fill">
              <a href="#" className="nav-link footer-link">
                nosotros
              </a>
            </li>
            <li className="nav-item flex-fill">
              <a href="#" className="nav-link footer-link">
                contáctanos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
