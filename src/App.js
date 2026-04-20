import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Work from "./components/Work";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import Cursor from "./components/Cursor";

function App() {
  return (
    <div className="relative">
      <Cursor />

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
        theme="light"
      />
    </div>
  );
}

export default App;
