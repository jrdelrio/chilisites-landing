import React from "react";
import logo from "../img/logo-chilisites-2.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="py-4 w-100">
      <div className="container d-flex">
        <div className="col-sm-5 col-md-4 col-lg-2 sm-center">
          <img src={logo} alt="Logo" />
        </div>
        <div className="col-sm-7 col-md-8 col-lg-10 d-flex align-items-center">
          <ul className="nav d-flex w-100 footer-list">
            <li className="nav-item flex-fill">
              <a href="#servicios" className="nav-link footer-link">
                servicios
              </a>
            </li>
            <li className="nav-item flex-fill">
              <a href="#proyectos" className="nav-link footer-link">
                proyectos
              </a>
            </li>
            <li className="nav-item flex-fill">
              <a href="#about-us" className="nav-link footer-link">
                nosotros
              </a>
            </li>
            <li className="nav-item flex-fill">
              <a href="#contact" className="nav-link footer-link">
                contáctanos
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom d-flex">
        <p>Desarrollo web con ❤️ desde España para Chile</p>
        <div className="footer-contacto">
          <a href="mailto:contacto@chilisites.com">contacto@chilisites.com</a>
          <a href="https://wa.me/+34639001594">+34 639 001 594</a>
          <a href="https://wa.me/+34683340572">+34 683 340 572</a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
