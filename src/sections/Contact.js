import React, { useState } from "react";
import "../styles/contact.css";
import "../styles/contact.css";

import emailjs from "emailjs-com";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const templateParams = {
            from_name: formData.name,
            from_lastname: formData.lastname,
            from_email: formData.email,
            from_phone: formData.phone,
            comment: formData.comment,
        };

        // Enviar el formulario usando EmailJS
        const SERVICE_ID = "service_eknlyzc";
        const TEMPLATE_ID = "template_vnn45sc";
        const USER_ID = "-yxxv8md0PULJcOgX";

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
            (result) => {
                alert("Correo enviado correctamente!");
                setFormData({
                    name: "",
                    lastname: "",
                    email: "",
                    phone: "",
                    comment: "",
                }); // Limpiar el formulario después del envío
            },
            (error) => {
                alert("Ocurrió un error al enviar el correo.");
            }
        );
    };

    return (
        <section id="contact" className="text-center">
            <h2 className="my-4 section-title">CONTÁCTANOS</h2>
            <form action="#" method="POST">
                <div className="grid-container">
                    <div className="input__wrapper grid-item">
                        <input
                            id="form-name"
                            type="text"
                            placeholder="Your Name"
                            required
                            className="input__field field single-field"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <label htmlFor="form-name" className="input__label">
                            Nombre
                        </label>
                    </div>
                    <div className="input__wrapper grid-item">
                        <input
                            id="form-lastname"
                            type="text"
                            placeholder="Your Last Name"
                            required
                            className="input__field field single-field"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                        />
                        <label htmlFor="form-lastname" className="input__label">
                            Apellido
                        </label>
                    </div>
                    <div className="input__wrapper grid-item">
                        <input
                            id="form-email"
                            type="email"
                            placeholder="Your Email"
                            required
                            className="input__field field single-field"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <label htmlFor="form-email" className="input__label">
                            Email
                        </label>
                    </div>
                    <div className="input__wrapper grid-item">
                        <input
                            id="form-phone"
                            type="tel"
                            placeholder="Your Phone"
                            required
                            className="input__field field single-field"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <label htmlFor="form-phone" className="input__label">
                            Teléfono
                        </label>
                    </div>
                    <div className="input__wrapper grid-item comment">
                        <textarea
                            id="form-comment"
                            placeholder="Your Comments"
                            required
                            className="input__field textarea"
                            name="comment"
                            value={formData.comment}
                            onChange={handleChange}
                        ></textarea>
                        <label
                            htmlFor="form-comment"
                            className="input__label comment-label"
                        >
                            Mensaje
                        </label>
                    </div>
                </div>
                <input
                    type="submit"
                    className="submit-button"
                    value="Enviar"
                    onClick={handleSubmit}
                />
            </form>
        </section>
    );
};

export default Contact;
