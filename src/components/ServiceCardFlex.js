import React, { useState, useEffect } from "react";
import "../styles/service-card-flex.css";

const ServiceCardFlex = (props) => {
  const { textPosition, textAlign, img, imgAlt, title, description } = props;

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Actualiza el ancho de pantalla al cambiar el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobile = screenWidth <= 575.98;
  const tablet = screenWidth > 575.98 && screenWidth < 991.98;
  const desktop = screenWidth >= 991.98;

  const locateText = () => {
    switch (textPosition) {
      case "left-top":
        return desktop
          ? { top: "5%", right: "95%" }
          : tablet
          ? { top: "5%", right: "110%" }
          : {};

      case "left-bottom":
        return textAlign === "end"
          ? desktop
            ? { top: "40%", right: "95%" }
            : tablet
            ? { top: "55%", right: "115%" }
            : {}
          : {};

      case "bottom":
        return textAlign === "end"
          ? desktop
            ? { right: "15%", top: "80%" }
            : { right: "6%", top: "115%" }
          : textAlign === "start"
          ? desktop
            ? { left: "12%", top: "82%" }
            : tablet
            ? { left: "0%", top: "110%" }
            : { left: "6%", top: "108%" }
          : {};

      default:
        return {};
    }
  };

  const styles = {
    img: {
      display: img ? "block" : "none",
      zIndex: 10,
    },
    title: {
      textAlign: textAlign,
      height: "1.8rem",
      zIndex: 1,
    },
    description: {
      textAlign: textAlign,
      lineHeight: screenWidth < 992 ? "1.2rem" : "",
      zIndex: 1,
    },
    text: {
      ...locateText(),
      display: img ? "block" : "none",
    },
  };

  return (
    <div className="service-card">
      <div className="service-card-image">
        <img src={img} style={styles.img} alt={imgAlt} />
      </div>
      <div className="service-card-text" style={styles.text}>
        <h3 className="service-card-title" style={styles.title}>
          {title}
        </h3>
        <p className="service-card-info" style={styles.description}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCardFlex;
