import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import starbucks from "../assets/images/starbucks.png";
import tesla from "../assets/images/tesla.png";
import shopify from "../assets/images/shopify.png";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { react } from "../assets/icons";

import "react-vertical-timeline-component/style.min.css";

const Work = () => {
  const { theme } = useContext(ThemeContext);

  const experiences = [
    {
      title: "Associate Frontend Developer",
      company_name: "Deutics Global",
      icon: react,
      iconBg: "#accbe1",
      date: "May 2024 - Oct 2024",
      points: [
        "Led frontend development initiatives using React.js, focusing on creating responsive and intuitive web applications.",
        <span>
          Developed and maintained the Camzify AI-powered surveillance platform
          (
          <a
            href="https://camzify.com"
            target="_blank"
            className="font-bold text-pink-600 underline"
          >
            https://camzify.com
          </a>
          ), providing intelligent video monitoring, AI heat maps, and
          role-based access control.
        </span>,
        "Built a scalable dashboard UI with a focus on performance, usability, and clean architecture, including Admin, Sub-Admin, and User interfaces with complete workflow handling.",
        "Implemented core features such as video backup management, license plans, AI heat map visualizations, and notifications.",
        "Designed advanced filters, pagination, and optimized data handling for large datasets, improving application performance with lazy loading, memoization, and efficient component structuring.",
        "Added smooth animations and micro-interactions to enhance user experience.",
        "Collaborated with product and backend teams using modern React best practices.",
        "Utilized Redux Toolkit for state management, ensuring efficient data flow and application scalability.",
        "Worked closely with designers using Figma to translate UI/UX designs into pixel-perfect, functional components.",
        "Integrated secure authentication using JSON Web Tokens (JWT) and bcrypt.js, and worked extensively with MongoDB for data storage, implementing efficient data models and query optimizations.",
        "Participated actively in code reviews, providing constructive feedback to enhance code quality and maintain best practices.",
        "Developed reusable UI components and optimized applications for cross-browser compatibility and responsive design.",
        "Continuously updated skills and knowledge in frontend and backend technologies to deliver cutting-edge solutions.",
      ],
    },
    {
      title: "Junior React.js Developer",
      company_name: "Znz Technologies",
      icon: react,
      iconBg: "#fbc3bc",
      date: "Jan 2024 - March 2024",
      points: [
        <span>
          Contributed to the development of an <strong>E-learning</strong>{" "}
          platform with interactive and community-driven features using
          React.js.
        </span>,
        "Built reusable and modular components and efficiently managed application state to ensure scalability and maintainability.",
        "Developed core user features allowing users to create and manage gigs, as well as like and comment on content to encourage engagement.",
        "Implemented real-time chat functionality to enable seamless communication between users within the platform.",
        "Integrated REST APIs to dynamically fetch, display, and update data, improving overall interactivity and responsiveness.",
        "Ensured fully responsive UI across mobile, tablet, and desktop devices.",
        "Collaborated closely with designers to convert Figma UI/UX designs into clean, production-ready interfaces.",
        "Participated in code reviews, debugging, and refactoring, helping maintain code quality and follow best practices.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Vvork Cloud Technologies",
      icon: react,
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
      className={`w-full py-20 ${
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
