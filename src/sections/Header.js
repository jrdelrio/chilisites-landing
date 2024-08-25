import React from "react";
import "../styles/header.css";
import Navbar from "../components/Navbar";
import PrimaryButton from "../components/PrimaryButton";

const Header = () => {
	return (
		<header className="header">
			<Navbar />
			<div className="presentation text-center">
				<h1 className="main-title lalezar-regular">haz crecer hoy mismo<br/><span>tu empresa</span></h1>
				<h3 className="main-subtitle titillium-web-semibold">
					Diseñamos tu sitio, lo desarrollamos, optimizamos todos tus componentes y promocionamos para que todo el mundo te encuentre.
				</h3>
				<PrimaryButton title="CONTÁCTANOS" />
			</div>
		</header>
	);
};

export default Header;
