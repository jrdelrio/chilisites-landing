import React, { useEffect } from "react";
import "../styles/about-us.css";
import PrimaryButton from "../components/PrimaryButton";
import python from "../img/icons/python.png";
import reactIcon from "../img/icons/react.png";
import css3 from "../img/icons/css-3.png";
import figma from "../img/icons/figma.png";
// import flask from "../img/icons/flask.png";
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

    const technologies = [
        {
            src: python,
            alt: "Python",
            title: "Python - Lenguaje de programación",
        },
        {
            src: reactIcon,
            alt: "React",
            title: "React - Biblioteca de JavaScript para construir interfaces de usuario",
        },
        {
            src: css3,
            alt: "CSS3",
            title: "CSS3 - Lenguaje de diseño para HTML",
        },
        {
            src: figma,
            alt: "Figma",
            title: "Figma - Herramienta de diseño y prototipado",
        },
        {
            src: github,
            alt: "GitHub",
            title: "GitHub - Plataforma de alojamiento de código",
        },
        {
            src: html5,
            alt: "HTML5",
            title: "HTML5 - Lenguaje de marcado para la web",
        },
        {
            src: javascript,
            alt: "JavaScript",
            title: "JavaScript - Lenguaje de programación para la web",
        },
        {
            src: mysql,
            alt: "MySQL",
            title: "MySQL - Sistema de gestión de bases de datos",
        },
        {
            src: wordpress,
            alt: "WordPress",
            title: "WordPress - Sistema de gestión de contenido",
        },
        {
            src: shopify,
            alt: "Shopify",
            title: "Shopify - Plataforma de comercio electrónico",
        },
        {
            src: elementor,
            alt: "Elementor",
            title: "Elementor - Constructor de páginas para WordPress",
        },
        {
            src: ads,
            alt: "Google Ads",
            title: "Google Ads - Plataforma de publicidad en línea de Google",
        },
        {
            src: woocommerce,
            alt: "WooCommerce",
            title: "WooCommerce - Plugin de comercio electrónico para WordPress",
        },
    ];

    return (
        <section id="about-us">
            <div className="about-us-container">
                <div className="about-us-title">
                    <h2 className="section-title">sobre nosotros</h2>
                </div>
                <div className="about-us-body">
                    <p>
                        Somos <strong>chiliSites</strong>, una agencia digital dedicada a
                        impulsar PyMES a través de una presencia online
                        poderosa. <strong>Desarrollamos sitios web</strong> en Shopify, WordPress
                        y creamos soluciones personalizadas, sin plantillas
                        predefinidas, adaptadas a tus necesidades. Ofrecemos <strong>estrategias de SEO</strong> que mejoran tu visibilidad y
                        crecimiento de manera medible.
                    </p>
                    <p>
                        Nos apasiona trabajar contigo en cada paso, enfocándonos
                        en resultados claros que hagan <strong>crecer tu negocio</strong> de
                        forma estratégica y sostenible. Nuestro objetivo es que
                        tu marca destaque, convierta más y crezca
                        inteligentemente. <strong>¡Vamos a hacerlo juntos!</strong>
                    </p>
                    <div className="mt-5">
                        <PrimaryButton title="CONTÁCTANOS" />
                    </div>
                </div>
            </div>
            <div className="technologies py-5">
                <h2 className="section-title text-center">tecnologías</h2>
                <div className="tech-icons">
                    {technologies.map((tech, index) => (
                        <img
                            key={index}
                            src={tech.src}
                            alt={tech.alt}
                            title={tech.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
