import CardProyecto from "../components/CardProyecto";
import CardQuote from "../components/CardQuote";
import "../styles/proyectos.css";
import "../styles/card-proyecto.css";

// fotos
import algeduc from "../img/algeduc.png";
import angeladelrio from "../img/angeladelriopasteleria.png";
import kado from "../img/kado.png";
import sieteTintas from "../img/sieteTintas.png";
import meydey from "../img/meydey.png";
import alterOffice from "../img/alterOffice.png";
import dodo from "../img/dodo.png";
import decima from "../img/decimaPropiedades.png";

// fotos proyectos destacados
import destacadoAlter from "../img/destacados/alter office.png";
import destacadoDecima from "../img/destacados/decima propiedades.png";
import destacadoKado from "../img/destacados/kado.png";
import destacadoSieteTintas from "../img/destacados/siete tintas.png";

import Slider from "../components/Slider";

const Proyectos = () => {
    const imageDefault =
        "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=pexels-luis-gomes-166706-546819.jpg&fm=jpg";

    // Array de objetos para los proyectos destacados
    const proyectosDestacados = [
        {
            id: 1,
            title: "KADÓ REGALOS",
            description:
                "Rediseño de sitio web en Shopify, consultoría SEO y SEM.",
            image: destacadoKado,
            link: "https://www.kado.cl/",
        },
        {
            id: 2,
            title: "ALTER OFFICE",
            description:
                "Rediseño de sitio web en Wordpress, consultoría SEO y SEM.",
            image: destacadoAlter,
            link: "https://www.alteroffice.cl/en/home/",
        },
        {
            id: 3,
            title: "SIETE TINTAS",
            description: "Consultoría SEO, SEM y email marketing.",
            image: destacadoSieteTintas,
            link: "https://sietetintas.cl/",
        },
        {
            id: 4,
            title: "DÉCIMA PROPIEDADES",
            description:
                "Desarrollo de sitio web en wordpress. Consultoría SEO y SEM",
            image: destacadoDecima,
            link: "https://www.decimapropiedades.cl",
        },
    ];

    return (
        <section id="proyectos" className="text-center proyectos-destacados">
            <h2 className="my-5 section-title font-size">
                PROYECTOS DESTACADOS
            </h2>
            <div className="row mb-3 max-width-md-90vw max-width-sm-90vw max-width-lg-85vw">
                {proyectosDestacados.map((proyecto) => (
                    <CardProyecto
                        key={proyecto.id}
                        title={proyecto.title}
                        description={proyecto.description}
                        image={proyecto.image}
                        link={proyecto.link}
                    />
                ))}
            </div>

            <Slider />
        </section>
    );
};

export default Proyectos;
