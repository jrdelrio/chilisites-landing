import React from "react";
import logo from "../img/logo-chilisites.png";
import "../styles/navbar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarComp = () => {

  const styles = {
    border: "none",
    background: "none",
  };

  return (
    <Navbar
      expand="lg"
      className="-top align-items-center navbar"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img className="navbar-logo" src={logo} alt="Chilisites Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#servicios" className="nav-item">SERVICIOS</Nav.Link>
            <Nav.Link href="#proyectos" className="nav-item">PROYECTOS</Nav.Link>
            <Nav.Link href="#about-us" className="nav-item">SOBRE NOSOTROS</Nav.Link>
            <Nav.Link href="#contact" className="nav-item">CONTÁCTANOS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
