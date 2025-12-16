import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      name="about"
      className={`w-full py-20 ${
        theme === "dark"
          ? "bg-[#0a192f] text-gray-300"
          : "bg-white text-gray-800"
      }`}
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <h1 className="head-text">
              Hello, I'm{" "}
              <span className="blue-gradient_text font-semibold drop-shadow">
                {" "}
                Sameer
              </span>{" "}
              👋
            </h1>
          </div>
          <div>
            <p>
              Highly motivated React.js Developer with 2 years of expertise,
              seeking to contribute skills in front-end development and
              problem-solving to a dynamic team. Eager to apply academic
              knowledge and practical experience in building interactive and
              responsive web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
