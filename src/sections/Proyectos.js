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
    {
      id: 3,
      image: algeduc,
      quote:
        '"El equipo de esta empresa es muy atento y siempre dispuesto a ayudar. Sin duda, seguiremos colaborando con ellos."',
      empresa: "EMPRESA 3",
    },
    {
      id: 4,
      image: angeladelrio,
      quote:
        '"Gracias a su asesoría, hemos logrado mejorar significativamente nuestros procesos. Recomiendo sus servicios sin dudar."',
      empresa: "EMPRESA 4",
    },
    {
      id: 5,
      image: algeduc,
      quote:
        '"La calidad del trabajo que entregan es excepcional. Nos han ayudado a alcanzar nuestros objetivos en tiempo récord."',
      empresa: "EMPRESA 5",
    },
    {
      id: 6,
      image: angeladelrio,
      quote:
        '"Nos sorprendió gratamente la innovación que aportaron a nuestro proyecto. Son expertos en lo que hacen."',
      empresa: "EMPRESA 6",
    },
    {
      id: 7,
      image: algeduc,
      quote:
        '"La creatividad y dedicación de su equipo nos permitió lanzar una campaña muy exitosa. Los recomendamos ampliamente."',
      empresa: "EMPRESA 7",
    },
    {
      id: 8,
      image: angeladelrio,
      quote:
        '"Son unos verdaderos profesionales. Desde el primer contacto, demostraron compromiso y excelencia en su trabajo."',
      empresa: "EMPRESA 8",
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

      <div className="--bs-gutter-x-sm-0 w-100 max-width-sm-80vw mx-auto slider">
        <div className="track">
        {quotes.map((quote, index) => (
          <CardQuote
            key={index}
            quoteObj={quote}
          />
        ))}
        {quotes.map((quote, index) => (
          <CardQuote
            key={index}
            quoteObj={quote}
          />
        ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
