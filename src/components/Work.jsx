import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import starbucks from "../assets/images/starbucks.png";
import tesla from "../assets/images/tesla.png";
import shopify from "../assets/images/shopify.png";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const Work = () => {
  const { theme } = useContext(ThemeContext);

  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Deutics Global",
      icon: starbucks,
      iconBg: "#accbe1",
      date: "May 2024 - Oct 2024",
      points: [
        "Led frontend development initiatives using React.js, focusing on creating responsive and intuitive web applications.",
        "Utilized Redux Toolkit for state management, ensuring efficient data flow and application scalability on the frontend.",
        "Collaborated closely with designers using Figma to translate UI/UX designs into pixel-perfect, functional components.",
        "Designed and implemented RESTful APIs with Node.js and Express.js on the backend, integrating various third-party APIs for data fetching and processing.",
        "Integrated secure authentication using JSON Web Tokens (JWT) and bcrypt.js.",
        "Worked extensively with MongoDB for data storage, implementing efficient data models and query optimizations.",
        "Implemented middleware and utilized tools like Nodemon for seamless backend development workflows.",
        "Participated actively in code reviews, providing constructive feedback to enhance code quality and maintain best practices.",
        "Developed reusable UI components and optimized applications for cross-browser compatibility and responsive design.",
        "Continuously updated skills and knowledge in frontend and backend technologies to deliver cutting-edge solutions.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Znz Technologies",
      icon: tesla,
      iconBg: "#fbc3bc",
      date: "Jan 2024 - March 2024",
      points: [
        "Served as a Junior React.js Developer, working on reusable components and efficient state management.",
        "Developed and maintained web applications using React.js and other related technologies.",
        "Integrated APIs to fetch and display data dynamically within the application.",
        "Implemented responsive design to ensure a seamless user experience across various devices.",
        "Collaborated with designers using tools like Figma to convert UI/UX designs into functional components.",
        "Participated in code reviews and provided constructive feedback to improve code quality.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Vvork Cloud Technologies",
      icon: shopify,
      iconBg: "#b7e4c7",
      date: "Nov 2021 - Sep 2022",
      points: [
        "Certified MERN Stack Developer with hands-on experience in developing and maintaining web applications using React.js, Node.js, Express.js, and MongoDB.",
        "Acquired industry-level skills in API integration, state management, and responsive design.",
        "Developed reusable components and implemented efficient data fetching techniques to enhance application performance.",
        "Gained proficiency in using design tools like Figma to convert UI/UX designs into functional components.",
        "Contributed actively in code reviews, providing valuable feedback to improve code quality and maintain best practices.",
        "Continuously learning and implementing industry best practices to deliver scalable and maintainable code.",
      ],
    },
  ];

  return (
    <div
      name="work"
      className={`w-full sm:mt-0 mt-20  ${
        theme === "dark"
          ? "bg-[#0a192f] text-gray-300"
          : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            className={`text-4xl font-bold inline border-b-4 border-pink-600 ${
              theme === "dark" ? "text-gray-300" : "text-gray-800"
            }`}
          >
            Work Experience.
          </p>
          <p className="py-6">
            {" "}
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        {/* Container */}
        <div className="">
          <div className=" flex">
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  contentStyle={{
                    background: theme === "dark" ? "#112240" : "#ffffff",
                    color: theme === "dark" ? "#e6f1ff" : "#0a192f",
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow:
                      theme === "dark"
                        ? "0 4px 12px rgba(0, 0, 0, 0.4)" // dark mode deep soft shadow
                        : "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div>
                    <h3
                      className={`text-xl font-poppins font-semibold ${
                        theme === "dark" ? "text-gray-100" : "text-black"
                      }`}
                    >
                      {experience.title}
                    </h3>

                    <p
                      className={`font-medium text-base ${
                        theme === "dark" ? "text-gray-300" : "text-black"
                      }`}
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-black-500/50 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
