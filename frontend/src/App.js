import Hero from "./components/hero";
import Certificates from "./components/Certificates";
import Courses from "./components/Courses";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div style={{ fontFamily: "Arial", backgroundColor: "#f5f5f5" }}>
      <Navbar />
      <Hero />
      <Certificates />
      <Courses />
      <Skills />
      <Contact />
    </div>
  );
}


export default App;
