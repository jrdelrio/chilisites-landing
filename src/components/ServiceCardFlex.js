import React, { useState } from "react";
import "../styles/service-card-flex.css";

const ServiceCardFlex = (props) => {
  const [textPosition] = useState(props.textPosition);
  const [textAlign] = useState(props.textAlign);
  const [screenWidth] = useState(window.innerWidth);

  const mobile = screenWidth <= 575.98;
  const tablet = 575.98 < screenWidth && screenWidth < 991.98;
  const desktop = 991.98 <= screenWidth;

  const locateText = (textPosition) => {
    switch (textPosition) {
      case "left-top":
        // if () {}
        return { top: "0", right: "110%" };

      case "left-bottom":
        if (textAlign === "end") {
          if (desktop) {
            return { top: "50%", right: "110%" };
          } else if (tablet) {
            return { top: "30%", right: "115%" };
          }
        }
        break; // Asegúrate de agregar un break para evitar que continúe ejecutando otros casos

      case "bottom":
        if (textAlign === "end") {
          if (desktop) {
            return { right: "6%" };
          } else {
            return { right: "6%", top: "115%" };
          }
        } else if (textAlign === "start") {
          if (desktop) {
            return { left: "5%" };
          } else if (tablet) {
            return { left: "0%", top: "110%" };
          } else if (mobile) {
            return { left: "6%", top: "108%" };
          }
        }
        break;

      default:
        return {};
    }
  };

  const styles = {
    img: {
      display: props.img ? "block" : "none",
    },
    title: {
      textAlign: textAlign,
      paddingLeft: textAlign === "start" ? "0" : "0",
      paddingRight: textAlign === "end" ? "0" : "0",
      height: "1.8rem",
    },
    description: {
      textAlign: textAlign,
      paddingLeft: textAlign === "start" ? "0" : "",
      paddingRight: textAlign === "end" ? "0" : "0",
      lineHeight: screenWidth < 992 ? "1.2rem" : "",
    },
    text: locateText(textPosition),
  };

  return (
    <div className="service-card">
      <div className="service-card-image">
        <img src={props.img} style={styles.img} alt={props.imgAlt} />
      </div>
      <div className="service-card-text" style={styles.text}>
        <h3 className="service-card-title" style={styles.title}>
          {props.title}
        </h3>
        <p className="service-card-info" style={styles.description}>
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCardFlex;
