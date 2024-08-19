import PrimaryButton from "./PrimaryButton";
import "../styles/card-quote.css";

const CardQuote = (props) => {
  return (
    <div key={props.quoteObj.id} className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mb-4 sm-px-0">
      <div className="quote-card text-start">
        <img className="img-card-quote" src={props.quoteObj.image} alt="" />
        <div className="quote-text">
          <p>{props.quoteObj.quote}</p>
          <h3>{props.quoteObj.empresa}</h3>
        </div>
      </div>
    </div>
  );
};

export default CardQuote;
