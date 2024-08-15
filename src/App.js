import "./styles/app.css";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Servicios from "./sections/Servicios";
import Proyectos from "./sections/Proyectos";
import AboutUs from "./sections/AboutUs";
import Contact from "./sections/Contact";

function App() {

  return (
    <div className="App">
      <Header />
      <Servicios />
      <Proyectos />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
