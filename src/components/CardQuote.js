import "../styles/card-quote.css";

const CardQuote = (props) => {

   
    return (
        <div className="slide">
            <div
                key={props.id}
                className="quote-card col-xs-12 col-sm-12 col-md-12 col-lg-6 sm-px-0 text-start slide"
            >
                <img
                    className="img-card-quote"
                    src={props.image}
                    alt=""
                    height={'10px'}
                                    />
                <div className="quote-text">
                    <p>{props.quote}</p>
                    <h3>{props.empresa}</h3>
                </div>
            </div>
        </div>
    );
};

export default CardQuote;
