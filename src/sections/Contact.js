import React from "react";
import "../styles/contact.css";

const Contact = () => {

    const handleSubmit = (event) => {

    }

  return (
    <section id="contact" className="text-center">
      <h2 className="my-4 section-title">CONTÁCTANOS</h2>
      <form className="form-size" action="">
        <div className="nombre-apellido">
          <input
            className="field single-field"
            type="text"
            name="name"
            placeholder="NOMBRE"
            required
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
            required
          />
          <input
            className="field single-field"
            type="text"
            name="phone"
            placeholder="TELÉFONO"
            required
          />
        </div>
        <textarea
          className="field double-field"
          name="message"
          placeholder="MENSAJE"
          required
        ></textarea>
        <button className="submit-button" onClick={handleSubmit}>enviar</button>
        {/* <span className="text-success ms-3">MENSAJE ENVIADO!</span> */}
      </form>
    </section>
  );
};

export default Contact;
