import React from "react";
import "../styles/contact.css";
import "../styles/contact.css";

const Contact = () => {

	const handleSubmit = (event) => {

	}

	return (
		<section id="contact" className="text-center">
			<h2 className="my-4 section-title">CONTÁCTANOS</h2>
			<form action="#" method="POST">
				<div className="grid-container">
				<div className="input__wrapper grid-item">
                    <input id="form-name"
                        type="text"
                        placeholder="Your Name"
                        required
                        className="input__field field single-field"
                        name="name" />
                    <label htmlFor="form-name" className="input__label">Nombre</label>
                </div>
				<div className="input__wrapper grid-item">
                    <input id="form-lastname"
                        type="text"
                        placeholder="Your Last Name"
                        required
                        className="input__field field single-field"
                        name="lastname" />
                    <label htmlFor="form-lastname" className="input__label">Apellido</label>
                </div>
				<div className="input__wrapper grid-item">
                    <input id="form-email"
                        type="email"
                        placeholder="Your Email"
                        required
                        className="input__field field single-field"
                        name="email" />
                    <label htmlFor="form-email" className="input__label">Email</label>
                </div>
				<div className="input__wrapper grid-item">
                    <input id="form-phone"
                        type="tel"
                        placeholder="Your Phone"
                        required
                        className="input__field field single-field"
                        name="phone" />
                    <label htmlFor="form-phone" className="input__label">Teléfono</label>
                </div>
					<div className="input__wrapper grid-item comment">
						<textarea id="form-comment"
						placeholder="Your Comments"
						required
						className="input__field textarea"
						name="comment">
						</textarea>
						<label htmlFor="form-comment" className="input__label comment-label">Mensaje</label>
					</div>
				</div>
				<input type="submit" className="submit-button" value='Enviar'/>
			</form>
		</section>
		);
};

export default Contact;



