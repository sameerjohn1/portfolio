import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Work from "./components/Work";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
