import SecondaryButton from "./SecondaryButton";

const CardProyecto = (props) => {
  console.log(props);

  return (
    <div key={props.id} className="col-12 col-md-6 col-lg-3">
      <div className="proy-dest-card text-start mb-4">
        <img className="img-proy-dest" src={props.image} alt="alt" />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <SecondaryButton />
      </div>
    </div>
  );
};

export default CardProyecto;
