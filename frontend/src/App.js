import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Skills from "./components/Skills";
import Courses from "./components/Courses";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import "./App.css";
function app(){
  return(
    <div className="hero-container">
      <h1 className="animated-text">WEB DEVELOPMENT PROJECT</h1>
      </div>
  );
}

function App() {
  return (
  <div>
      
      <Navbar />
      <Hero />
      <Skills />
      <Courses />
      <Certificates />
      <Contact />
    </div>

  );
}

export default App;




