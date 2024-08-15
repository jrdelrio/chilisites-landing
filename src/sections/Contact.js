import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="text-center">
      <h2 className="my-5 section-title">CONTÁCTANOS</h2>
      <form className="form-size">
        <div className="nombre-apellido">
          <input
            className="field single-field"
            type="text"
            name="name"
            placeholder="NOMBRE"
          />
          <input
            className="field single-field"
            type="text"
            name="last_name"
            placeholder="APELLIDO"
          />
        </div>
        <div className="email-telefono">
          <input
            className="field single-field"
            type="text"
            name="email"
            placeholder="EMAIL"
          />
          <input
            className="field single-field"
            type="text"
            name="phone"
            placeholder="TELÉFONO"
          />
        </div>
        <textarea
          className="field double-field"
          name="message"
          placeholder="MENSAJE"
        ></textarea>
        <button className="submit-button" type="submit">enviar</button>
      </form>
    </section>
  );
};

export default Contact;
