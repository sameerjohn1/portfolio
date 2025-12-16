import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import {
  css,
  express,
  git,
  github,
  html,
  javascript,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  tailwindcss,
} from "../assets/icons";

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  const skills = [
    {
      imageUrl: javascript,
      name: "JavaScript",
      type: "Frontend",
    },
    {
      imageUrl: react,
      name: "React",
      type: "Frontend",
    },
    {
      imageUrl: nextjs,
      name: "Next.js",
      type: "Frontend",
    },
    {
      imageUrl: redux,
      name: "Redux",
      type: "State Management",
    },
    {
      imageUrl: tailwindcss,
      name: "Tailwind CSS",
      type: "Frontend",
    },
    {
      imageUrl: css,
      name: "CSS",
      type: "Frontend",
    },
    {
      imageUrl: github,
      name: "GitHub",
      type: "Version Control",
    },
    {
      imageUrl: express,
      name: "Express",
      type: "Backend",
    },
    {
      imageUrl: git,
      name: "Git",
      type: "Version Control",
    },

    {
      imageUrl: html,
      name: "HTML",
      type: "Frontend",
    },

    {
      imageUrl: mongodb,
      name: "MongoDB",
      type: "Database",
    },
    {
      imageUrl: motion,
      name: "Motion",
      type: "Animation",
    },
    {
      imageUrl: mui,
      name: "Material-UI",
      type: "Frontend",
    },

    {
      imageUrl: nodejs,
      name: "Node.js",
      type: "Backend",
    },
  ];

  return (
    <div
      name="skills"
      className={`w-full py-20 ${
        theme === "dark"
          ? "bg-[#0a192f] text-gray-300"
          : "bg-white text-gray-800"
      }`}
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
