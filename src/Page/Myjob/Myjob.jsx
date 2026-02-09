import React from "react";
import ab from "../../../src/assets/Image/portfolio.png";

const Project = () => {
  return (
    <div className="min-h-screen mx-auto bg-[#212428]">
      <section
        className="
        min-h-screen
        px-6 lg:px-20 py-20
      "
      >
        <div className="ml-0 md:ml-64 w-full">
          <h2 className="text-4xl md:text-5xl font-bold text mb-12 center md:text-left">
            My Projects
          </h2>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
            
            {/* Card 1 */}
            <div className="rounded-xl shadow-lg bg-green-100 hover:scale-105 transition duration-500 overflow-hidden">
              <img src={ab} alt="Project 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-black">
                  Portfolio Website
                </h3>
                <p className="text-gray-600 mb-4">
                  A modern and fully responsive portfolio made with React & Tailwind.
                </p>
                <a
                  href="https://shifatportfolio.vercel.app/"
                  className="text-[#FF014F] font-semibold hover:underline"
                >
                  🔗 Live Demo
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
