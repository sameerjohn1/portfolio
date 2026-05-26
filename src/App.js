import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";

import ProjectDetails from "./pages/ProjectDetails";

import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import Cursor from "./components/Cursor";

function App() {
  return (
    <div className="relative">
      <Cursor />
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Skills />
              <Work />
              <Projects />
              <Testimonials />
              <Contact />
            </>
          }
        />

        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={5000} theme="light" />
    </div>
  );
}

export default App;
