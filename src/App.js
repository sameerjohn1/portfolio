import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Work from "./components/Work";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";

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

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" // ya "dark", app theme ke hisaab se
      />
    </div>
  );
}

export default App;
