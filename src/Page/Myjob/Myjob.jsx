import React from "react";
import ab from "../../../src/assets/Image/portfolio.png";
const Project = () => {
    return (
        <section
            className="
        min-h-screen
        px-6 lg:px-20 py-20
        bg-gradient-to-r from-green-300 via-white to-green-200
        animate-gradient
      "
        >
            {/* Sidebar জায়গা ফাঁকা রাখার জন্য */}
            <div className="ml-0 md:ml-64 w-full">
                <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-12 text-center md:text-left dark:text-green-700">
                    My <span className="text-green-500">Projects</span>
                </h2>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">

                    {/* Card 1 */}
                    <div className="rounded-xl shadow-lg bg-green-100 hover:scale-105 transition duration-500 overflow-hidden">
                        <img
                            src={ab}
                            alt="Project 1"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2 text-black dark:text-black">
                                Portfolio Website
                            </h3>
                            <p className="text-gray-600 mb-4 dark:text-gray-800">
                                A modern and fully responsive portfolio made with React & Tailwind.
                            </p>
                            <a
                                href="https://shifatportfolio.vercel.app/"
                                className="text-green-500 font-semibold hover:underline"
                            >
                                🔗 Live Demo
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-xl shadow-lg bg-green-100 hover:scale-105 transition duration-500 overflow-hidden">
                        <img
                            src="/project2.jpg"
                            alt="Project 2"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2 text-black dark:text-black">
                                E-Commerce UI
                            </h3>
                            <p className="text-gray-600 mb-4 dark:text-gray-800">
                                Clean e-commerce frontend with product cards & animations.
                            </p>
                            <a
                                href="#"
                                className="text-green-500 font-semibold hover:underline"
                            >
                                🔗 Live Demo
                            </a>
                        </div>
                    </div>
                    <br />
                    {/* Card 3 */}
                    <div className="rounded-xl shadow-lg bg-green-100 hover:scale-105 transition duration-500 overflow-hidden">
                        <img
                            src="/project3.jpg"
                            alt="Project 3"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2 text-black dark:text-black">
                                React Landing Page
                            </h3>
                            <p className="text-gray-600 mb-4 dark:text-gray-800">
                                Smooth animations and clean UI for landing page websites.
                            </p>
                            <a
                                href="#"
                                className="text-green-500 font-semibold hover:underline"
                            >
                                🔗 Live Demo
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Project;
