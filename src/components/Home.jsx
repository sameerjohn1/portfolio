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
      { threshold: 0.1 }, // Adjust the threshold as needed
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
      {showParticles && (
        <ParticlesComponent
          id="particles"
          className="absolute top-0 left-0 w-full h-full z-[-1] pointer-events-none"
        />
      )}

      {/* Container */}
      <div className="relative z-10 max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full sm:pt-0 pt-14">
        <p className="text-pink-600 sm:mt-2 ">Hi, my name is</p>
        <h1
          className={`sm:text-7xl text-3xl font-bold  ${
            theme === "dark" ? "text-[#ccd6f6]" : "text-gray-800"
          }`}
        >
          Sameer John
        </h1>
        <h2
          className={` sm:text-4xl text-3xl font-bold  ${
            theme === "dark" ? "text-[#8892b0]" : "text-gray-600"
          }`}
        >
          React.js • Next.js • Node.js • Express.js • MERN Certified{" "}
        </h2>
        <p
          className={`${
            theme === "dark" ? "text-[#8892b0]" : "text-gray-600"
          } py-4 max-w-[700px] sm:text-lg text-base  `}
        >
          Full-Stack Developer with hands-on experience building robust web
          applications using the MERN stack. Proficient in React.js, Next.js,
          TypeScript, and modern frontend architectures. Dedicated to creating
          scalable solutions, optimizing performance, and delivering seamless
          user experiences through clean, maintainable code.
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
