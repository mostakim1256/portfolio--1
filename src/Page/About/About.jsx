// src/Page/About/About.jsx
import React from "react";

const About = () => {
    return (
        <div >
            <section className="
            min-h-screen 
            px-6 lg:px-20 py-20 
            flex items-center justify-between 
            bg-gradient-to-r from-green-300 via-white to-green-200 
            animate-gradient   ml-64
           
        " >
                <h2 className="text-4xl font-bold text-center mb-12">
                    My <span className="text-green-500">Projects</span>
                </h2>

                {/* PROJECT CARDS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* CARD 1 */}
                    <div className="rounded-xl shadow-lg bg-white hover:scale-105 transition duration-500 overflow-hidden">
                        <img
                            src="/project1.jpg"
                            alt="Project 1"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2">Portfolio Website</h3>
                            <p className="text-gray-600 mb-4">
                                A modern and fully responsive portfolio made with React & Tailwind.
                            </p>
                            <a
                                href="https://github.com/mostakim1256/portfolio/upload/main"
                                className="text-green-500 font-semibold hover:underline"
                            >
                                🔗 Live Demo
                            </a>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="rounded-xl shadow-lg bg-white hover:scale-105 transition duration-500 overflow-hidden">
                        <img
                            src="/project2.jpg"
                            alt="Project 2"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2">E-Commerce UI</h3>
                            <p className="text-gray-600 mb-4">
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

                    {/* CARD 3 */}
                    <div className="rounded-xl shadow-lg bg-white hover:scale-105 transition duration-500 overflow-hidden">
                        <img
                            src="/project3.jpg"
                            alt="Project 3"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2">React Landing Page</h3>
                            <p className="text-gray-600 mb-4">
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
            </section>
        </div>
    );
};

export default About;
