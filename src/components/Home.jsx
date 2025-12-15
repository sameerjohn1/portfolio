import React, { useState, useEffect, useRef, useContext } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { ThemeContext } from "../context/ThemeContext";
import ParticlesComponent from "./Particle";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [nav, setNav] = useState(false);
  const [showParticles, setShowParticles] = useState(true);
  const headerRef = useRef(null);

  // Observe when the header scrolls out of view
  useEffect(() => {
    const headerElement = headerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Check if header is in view
        if (entry.isIntersecting) {
          setShowParticles(true); // Show particles when header is in view
        } else {
          setShowParticles(false); // Hide particles when header is out of view
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (headerElement) {
      observer.observe(headerElement);
    }

    return () => {
      if (headerElement) {
        observer.unobserve(headerElement);
      }
    };
  }, []);

  return (
    <div
      name="home"
      className={`w-full h-screen  ${
        theme === "dark" ? "bg-[#0a192f]" : "bg-white"
      }`}
    >
      <ParticlesComponent
        id="particles"
        className="absolute top-0 left-0 w-full h-full z-[-1]"
      />

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1
          className={`text-4xl sm:text-7xl font-bold ${
            theme === "dark" ? "text-[#ccd6f6]" : "text-gray-800"
          }`}
        >
          Sameer John
        </h1>
        <h2
          className={`text-4xl sm:text-7xl font-bold ${
            theme === "dark" ? "text-[#8892b0]" : "text-gray-600"
          }`}
        >
          I'm a React.js Frontend Developer.
        </h2>
        <p
          className={`${
            theme === "dark" ? "text-[#8892b0]" : "text-gray-600"
          } py-4 max-w-[700px]`}
        >
          I’m a frontend developer specializing in building responsive,
          high-performance web applications using React.js. I focus on creating
          clean, modern user interfaces and seamless user experiences.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button
              className={`group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 ${
                theme === "dark"
                  ? "text-white"
                  : "text-gray-800 border-gray-800"
              }`}
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
