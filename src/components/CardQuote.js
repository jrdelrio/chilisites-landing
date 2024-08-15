import PrimaryButton from "./PrimaryButton";
import "../styles/card-quote.css";

const CardQuote = (props) => {
  return (
    <div key={props.id} className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mb-4 sm-px-0">
      <div class="quote-card text-start">
        <img class="img-card-quote" src={props.image} alt="" srcset="" />
        <div className="quote-text">
          <p>{props.quote}</p>
          <h3>{props.empresa}</h3>
        </div>
      </div>
    </div>
  );
};

export default CardQuote;
