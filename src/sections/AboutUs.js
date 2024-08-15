import React from "react";
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
import woocomerce from "../img/icons/woocommerce.png";

const AboutUs = () => {
  const url =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB";
  return (
    <section id="about-us">
      <div className="container">
        <div className="present mt-4">
          <h2 className="section-title">sobre nosotros</h2>
          <img src={url} className="about-us-image" alt="Sobre Nosotros" />
        </div>
        <div className="body">
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
          <div className="text-center my-4">
            <PrimaryButton title="CONTÁCTANOS" />
          </div>
        </div>
      </div>
      <div className="technologies ms-5 mb-4">
        <h2 className="section-title text-center">tecnologías</h2>
        <div className="container">
          <div className="list-item">
            <img src={python} alt="Python" />
          </div>
          <div className="list-item">
            <img src={reactIcon} alt="React" />
          </div>
          <div className="list-item">
            <img src={css3} alt="CSS3" />
          </div>
          <div className="list-item">
            <img src={figma} alt="Figma" />
          </div>
          <div className="list-item">
            <img src={flask} alt="Flask" />
          </div>
          <div className="list-item">
            <img src={github} alt="GitHub" />
          </div>
          <div className="list-item">
            <img src={html5} alt="HTML5" />
          </div>
          <div className="list-item">
            <img src={javascript} alt="JavaScript" />
          </div>
          <div className="list-item">
            <img src={mysql} alt="MySQL" />
          </div>

          <div className="list-item">
            <img src={wordpress} alt="Wordpress" />
          </div>
          <div className="list-item">
            <img src={shopify} alt="Shopify" />
          </div>
          <div className="list-item">
            <img src={elementor} alt="Elementor" />
          </div>
          <div className="list-item">
            <img src={ads} alt="Google Ads" />
          </div>
          <div className="list-item">
            <img src={wordpress} alt="Wordpress" />
          </div>
          <div className="list-item">
            <img src={woocomerce} alt="WooComemrce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
