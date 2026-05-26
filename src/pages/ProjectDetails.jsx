import { useParams, useNavigate } from "react-router-dom";
import { projectData } from "../data/projects";
import { useEffect } from "react";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectData.find((item) => item.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <h1 className="text-2xl">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a192f] to-black text-white px-6 py-10">
      {/* CONTAINER */}
      <div className="max-w-5xl mx-auto">
        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-6">
          {/* GO BACK */}
          <button
            onClick={() => navigate(-1)}
            className="mt-16 text-sm px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-800 transition-all duration-300"
          >
            ← Go Back
          </button>

          <span className="text-gray-400 text-sm">Project Details</span>
        </div>

        {/* MAIN CARD */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md">
          {/* IMAGE */}
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-500"
          />

          {/* CONTENT */}
          <div className="p-6 md:p-10">
            {/* TITLE */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {project.title}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-300 leading-relaxed mb-8">{project.desc}</p>

            {/* BUTTON */}
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-pink-600 hover:bg-pink-700 transition-all px-6 py-3 rounded-xl font-medium shadow-lg"
            >
              🚀 Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
