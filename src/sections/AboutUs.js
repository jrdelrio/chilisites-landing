import React, { useEffect } from "react";
import "../styles/about-us.css";
import PrimaryButton from "../components/PrimaryButton";
import python from "../img/icons/python.png";
import reactIcon from "../img/icons/react.png";
import css3 from "../img/icons/css-3.png";
import figma from "../img/icons/figma.png";
import flask from "../img/icons/flask.png";
import github from "../img/icons/github.png";
import html5 from "../img/icons/html-5.png";
import javascript from "../img/icons/javascript.png";
import mysql from "../img/icons/my-sql.png";
import wordpress from "../img/icons/wordpress.png";
import shopify from "../img/icons/shopify.png";
import elementor from "../img/icons/elementor.png";
import ads from "../img/icons/adwords.png";
import woocommerce from "../img/icons/woocommerce.png";

const AboutUs = () => {
  const url =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB";

  return (
    <section id="about-us">
      <div className="container mx-auto about-us-container">
        <div className="about-us-title">
          <h2 className="section-title">sobre nosotros</h2>
        </div>
        <div className="about-us-img">
          <img src={url} alt="Sobre Nosotros" />
        </div>
        <div className="about-us-body">
          <p>
            Somos una pequeña agencia de Marketing Digital dedicada a ayudar a
            PyMES a empezar, crecer y mejorar sus resultados.
          </p>
          <p>
            Creemos en que cada proyecto tiene mucho potencial si se asesora y
            conecta con agencias que realmente les interesen los resultados de
            sus clientes.
          </p>
          <p>
            Nos esforzamos en ayudarte a entender cómo funciona tu sitio y
            campañas en base a métricas.
          </p>
          <PrimaryButton title="CONTÁCTANOS" />
        </div>
      </div>
      <div className="technologies pt-5">
        <h2 className="section-title text-start">tecnologias</h2>
        <div className="tech-icons">
          <img
            src={python}
            alt="Python"
            title="Python - Lenguaje de programación"
          />
          <img
            src={reactIcon}
            alt="React"
            title="React - Biblioteca de JavaScript para construir interfaces de usuario"
          />
          <img
            src={css3}
            alt="CSS3"
            title="CSS3 - Lenguaje de diseño para HTML"
          />
          <img
            src={figma}
            alt="Figma"
            title="Figma - Herramienta de diseño y prototipado"
          />
          <img
            src={flask}
            alt="Flask"
            title="Flask - Framework de micro para Python"
          />
          <img
            src={github}
            alt="GitHub"
            title="GitHub - Plataforma de alojamiento de código"
          />
          <img
            src={html5}
            alt="HTML5"
            title="HTML5 - Lenguaje de marcado para la web"
          />
          <img
            src={javascript}
            alt="JavaScript"
            title="JavaScript - Lenguaje de programación para la web"
          />
          <img
            src={mysql}
            alt="MySQL"
            title="MySQL - Sistema de gestión de bases de datos"
          />
          <img
            src={wordpress}
            alt="WordPress"
            title="WordPress - Sistema de gestión de contenido"
          />
          <img
            src={shopify}
            alt="Shopify"
            title="Shopify - Plataforma de comercio electrónico"
          />
          <img
            src={elementor}
            alt="Elementor"
            title="Elementor - Constructor de páginas para WordPress"
          />
          <img
            src={ads}
            alt="Google Ads"
            title="Google Ads - Plataforma de publicidad en línea de Google"
          />
          <img
            src={woocommerce}
            alt="WooCommerce"
            title="WooCommerce - Plugin de comercio electrónico para WordPress"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
