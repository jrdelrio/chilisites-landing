// import SecondaryButton from "./SecondaryButton";

const CardProyecto = (props) => {

	return (
		<div key={props.id} className="col-12 col-md-6 col-lg-3">
			<div className="proy-dest-card text-start mb-4">
				<div className="zoom-wrapper">
				<img className="img-proy-dest" src={props.image} alt="alt" />
				</div>
				<h3 className="card-proyecto-title">{props.title}</h3>
				<p className="card-proyecto-descr">{props.description}</p>
				{/* <SecondaryButton /> */}
			</div>
		</div>
	);
};

export default CardProyecto;
