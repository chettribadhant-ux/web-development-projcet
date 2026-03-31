import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Certificates from "./components/Certificates";
import Courses from "./components/Courses";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Hero />
      <Certificates />
      <Courses />
      <Navbar />
      <Skills />
      <Contact />
    </>
  );
}

export default App;