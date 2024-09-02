import React, { useState } from "react";
import ServiceCardFlex from "../components/ServiceCardFlex";
import "../styles/services.css";
import sem from "../img/services/SEM.png";
import seo from "../img/services/SEO.png";
import webDesign from "../img/services/diseño-web.png";
import webDev from "../img/services/desarrollo-web.png";

const Servicios = () => {

	const [screenWidth] = useState(window.innerWidth);

	const servicios = [
		{
			img: webDev,
			imgAlt: "Servicio de desarrollo web",
			textAlign: "start",
			textPosition: "bottom",
			title: "Desarrollo Web",
			description:
				"Desarrollamos tu sitio web, seas del rubro que seas y con las tecnologías que más se adapten a tu empresa.",
			gridClass: "r1-c1",
		},
		{gridClass: "r1-c2",},
		{
			img: webDesign,
			imgAlt: "Servicio de diseño web",
			textAlign: "end",
			textPosition: "left-top",
			title: "Diseño Web",
			description:
				"¿Tienes una idea? Creamos maquetas y prototipos de tu sitio web para luego desarrollarlo.",
			gridClass: "r1-c3",
		},
		{gridClass: "r2-c1",},
		{
			img: seo,
			imgAlt: "Servicio de consultoría SEO",
			textAlign: "end",
			textPosition: "left-bottom",
			title: "SEO",
			description:
				"Optimizamos tu sitio web para que te encuentren en Google y otros motores de búsqueda.",
			gridClass: "r2-c2",
		},
		{
			img: sem,
			imgAlt: "Servicio de campañas SEM",
			textAlign: "end",
			textPosition: "bottom",
			title: "SEM",
			description:
				"Creamos y mantenemos campañas de Google Ads, ya sean de búsqueda, video, shopping o display.",
			gridClass: "r2-c3",
		},
		];

	if (screenWidth >= 576) {

		return (
			<section id="servicios" className="text-center">
				<h2 className="my-5 section-title nuestros-servicios-title">
					NUESTROS SERVICIOS
				</h2>
				<div className="grid-servicios">
					{servicios.map((servicio, index) => (
						<div key={index} className={servicio.gridClass}>
							<ServiceCardFlex
								img={servicio.img}
								textAlign={servicio.textAlign}
								textPosition={servicio.textPosition}
								title={servicio.title}
								description={servicio.description}
							/>
						</div>
					))}
				</div>
			</section>
			);
		}

		else if (screenWidth < 576) {
			return (
				<section id="servicios" className="text-center">
					<h2 className="my-5 section-title nuestros-servicios-title">
						NUESTROS SERVICIOS
					</h2>
					<div>
						{servicios.map((servicio, index) => (
							<div key={index}>
								<ServiceCardFlex
									img={servicio.img}
									textAlign='start'
									textPosition='bottom'
									title={servicio.title}
									description={servicio.description}

								/>
							</div>
						))}
					</div>
				</section>
			)
		}


};

export default Servicios;
