import "./styles/app.css";
import Header from "./sections/Header";
import Footer from "./sections/Footer"
import Servicios from "./sections/Servicios";
import Proyectos from "./sections/Proyectos";
import AboutUs from "./sections/AboutUs";


function App() {
  return (
    <div className="App">
      <Header />
      <Servicios />
      <Proyectos />
      {/* <AboutUs /> */}

      <Footer />
    </div>
  );
}

export default App;
