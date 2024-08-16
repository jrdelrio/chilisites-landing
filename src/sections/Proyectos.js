import CardProyecto from "../components/CardProyecto";
import CardQuote from "../components/CardQuote";
import "../styles/proyectos.css";
import "../styles/card-proyecto.css";
import algeduc from "../img/algeduc.png";
import angeladelrio from "../img/angeladelriopasteleria.png"


const Proyectos = () => {
  const imageDefault =
    "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=pexels-luis-gomes-166706-546819.jpg&fm=jpg";

  // Array de objetos para los proyectos destacados
  const proyectosDestacados = [
    {
      id: 1,
      title: "KADÓ REGALOS",
      description: "Rediseño de sitio web en Shopify, consultoría SEO y SEM.",
      image: imageDefault,
    },
    {
      id: 2,
      title: "ALTER OFFICE",
      description: "Rediseño de sitio web en Wordpress, consultoría SEO y SEM.",
      image: imageDefault,
    },
    {
      id: 3,
      title: "SIETE TINTAS",
      description: "Consultoría SEO, SEM y email marketing.",
      image: imageDefault,
    },
    {
      id: 4,
      title: "DÉCIMA PROPIEDADES",
      description:
        "Desarrollo de sitio web en wordpress. Consultoría SEO y SEM",
      image: imageDefault,
    },
  ];

  const quotes = [
    {
      id: 1,
      image: algeduc,
      quote:
        '"Hemos tenido muy buena experiencia con esta empresa. El servicio fue excelente y superó nuestras expectativas."',
      empresa: "ALGEDUC",
    },
    {
      id: 2,
      image: angeladelrio,
      quote:
        '"Trabajar con esta empresa ha sido un placer. Son muy profesionales y cumplen con lo que prometen."',
      empresa: "ANGELA DEL RIO PASTELERÍA",
    },
  ];


  return (
    <section id="proyectos" className="text-center proyectos-destacados">
      <h2 className="my-5 section-title font-size">PROYECTOS DESTACADOS</h2>
      <div className="row margin-x-10 margin-x-5 mb-3 max-width-md-90vw max-width-sm-80vw max-width-lg-80vw mx-auto">
        {proyectosDestacados.map((proyecto) => (
          <CardProyecto
            key={proyecto.id}
            title={proyecto.title}
            description={proyecto.description}
            image={proyecto.image}
          />
        ))}
      </div>

      <div className="row justify-content-center --bs-gutter-x-sm-0 w-100 max-width-sm-80vw mx-auto pb-4">
        {quotes.map((quote, index) => (
          <CardQuote
            key={index}
            quoteObj={quote}
          />
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
