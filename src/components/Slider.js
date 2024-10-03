import React from "react";

// fotos
import algeduc from "../img/algeduc.png";
import angeladelrio from "../img/angeladelriopasteleria.png";
import kado from "../img/kado.png";
import sieteTintas from "../img/sieteTintas.png";
import meydey from "../img/meydey.png";
import alterOffice from "../img/alterOffice.png";
import dodo from "../img/dodo.png";
import decima from "../img/decimaPropiedades.png";
import srodillo from "../img/srodillo.png";

import CardQuote from "./CardQuote";

const Slider = () => {
    const quotes = [
        {
            id: 1,
            image: algeduc,
            quote: '"Ha sido un agrado trabajar en conjunto, destaca por su compromiso y buena disposición."',
            empresa: "ALGEDUC",
        },
        {
            id: 2,
            image: angeladelrio,
            quote: '"Desde nuestra primera reunión demostraron mucho profesionalismo y creatividad, al poco tiempo ya sus estrategias empezaron a dar frutos visibles."',
            empresa: "ANGELA DEL RIO PASTELERÍA",
        },
        // {
        //     id: 3,
        //     image: kado,
        //     quote: '"---El equipo de esta empresa es muy atento y siempre dispuesto a ayudar. Sin duda, seguiremos colaborando con ellos."',
        //     empresa: "KADÓ REGALOS",
        // },
        // {
        //     id: 4,
        //     image: sieteTintas,
        //     quote: '"---Gracias a su asesoría, hemos logrado mejorar significativamente nuestros procesos. Recomiendo sus servicios sin dudar."',
        //     empresa: "SIETE TINTAS",
        // },
        // {
        //     id: 5,
        //     image: alterOffice,
        //     quote: '"---La calidad del trabajo que entregan es excepcional. Nos han ayudado a alcanzar nuestros objetivos en tiempo récord."',
        //     empresa: "ALTER OFFICE",
        // },
        // {
        //     id: 6,
        //     image: meydey,
        //     quote: '"--Nos sorprendió gratamente la innovación que aportaron a nuestro proyecto. Son expertos en lo que hacen."',
        //     empresa: "MEY DEY",
        // },
        // {
        //     id: 7,
        //     image: dodo,
        //     quote: '"--La creatividad y dedicación de su equipo nos permitió lanzar una campaña muy exitosa. Los recomendamos ampliamente."',
        //     empresa: "DODO",
        // },
        {
            id: 8,
            image: decima,
            quote: '"Hemos tenido una excelente experiencia, demostraron compromiso, creatividad y profesionalismo, lanzando campañas que aumentaron nuestros clientes."',
            empresa: "DÉCIMA PROPIEDADES",
        },
        {
            id: 9,
            image: srodillo,
            quote: '"Me ayudaron diseñando y montando mi sitio web de manera muy efectiva. Llegué con ideas y me llevé soluciones al poco tiempo. Muy recomendado."',
            empresa: "SEBASTIÁN RODILLO DESIGNER",
        },
    ];

    const slideTrackWidth = 500 * quotes.length * 2;
    console.log(typeof slideTrackWidth);
    console.log(slideTrackWidth);

    const style = {
        slideTrack: {
            width: slideTrackWidth,
        },
    };

    return (
        <div className="slider">
            <div className="slide-track" style={style.slideTrack}>
                {quotes.map((quote) => (
                    <CardQuote
                        key={quote.id}
                        id={quote.id}
                        image={quote.image}
                        quote={quote.quote}
                        empresa={quote.empresa}
                    />
                ))}
                {quotes.map((quote) => (
                    <CardQuote
                        key={quote.id}
                        id={quote.id}
                        image={quote.image}
                        quote={quote.quote}
                        empresa={quote.empresa}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
