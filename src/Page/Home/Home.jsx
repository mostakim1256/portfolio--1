import React from "react";
import logo from "../../../src/assets/Image/1234.png";
import cv from "../../../src/assets/Image/shifat cv.pdf"
import ab from "../../../src/assets/Image/portfolio.png"
import html from "../../../src/assets/Image//html.jpeg"
import css from "../../../src/assets/Image/css.webp"
import as from "../../../src/assets/Image/js.webp"
import aw from "../../../src/assets/Image/react.webp"
import ad from "../../../src/assets/Image/next.webp"
import af from "../../../src/assets/Image/angular.webp"
const Home = () => {
    return (
        <div>
            {/* HERO SECTION */}
            <section
                className="
          min-h-screen
          px-6 lg:px-20 py-20
          flex items-center justify-between
          bg-gradient-to-r from-green-300 via-white to-green-200
          animate-gradient
        "
            >
                {/* LEFT SIDE TEXT */}
                <div className="max-w-xl space-y-6 ml-0 md:ml-64">
                    <h1 className="text-black text-4xl md:text-6xl font-bold leading-tight dark:text-black">
                        Hi, I'm <span className="text-green-400">Sifat</span>
                        <br />
                        Frontend Developer
                    </h1>

                    <p className="text-gray-800 text-lg dark:text-gray-800">
                        I build modern, fast and responsive web applications using
                        <span className="text-green-400"> React</span>,
                        <span className="text-green-400"> Tailwind CSS</span> &{" "}
                        <span className="text-green-400"> JavaScript</span>.
                    </p>

                    {/* BUTTONS */}
                    <div className="flex gap-4">
                        <a
                            href="/contact"
                            className="px-6 py-3 animate-bounce bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition duration-300 text-black dark:text-black"
                        >
                            Hire Me
                        </a>

                        <button className=" px-6 py-3 animate-bounce bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition duration-300 text-black dark:text-black">
                            <a href={cv} download>
                                Download CV
                            </a>
                        </button>

                    </div>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="mt-12 md:mt-0 md:mr-0 flex justify-center hover:scale-110 duration-1000 ml-24 h-94 w-54 md:w-auto">
                    <div className="w-80 h-99 overflow-hidden rounded-2xl bg-green-100 flex items-center justify-center shadow-xl">
                        <img
                            src={logo}
                            alt="Profile Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* PROJECTS & SKILLS SECTION */}
            <section
                className="
          min-h-screen
          px-6 lg:px-20 py-20
          bg-gradient-to-r from-green-300 via-white to-green-200
          animate-gradient
        "
            >
                <div className="ml-0 md:ml-64 w-full">
                    <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-12 text-center md:text-left dark:text-green-700">
                        My <span className="text-green-500">Projects </span>
                    </h2>

                    {/* Project / Skill Cards Grid */}
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
                    <br />
                    <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-12 text-center md:text-left dark:text-green-700">
                        My <span className="text-green-500"> Skills</span>
                    </h2>
                    {/* Programming / Tech Icons */}
                    <div className="flex gap-6 mt-16 flex-wrap justify-start">
                        <img src={html} className="w-36 h-36 border border-gray-500 border-2 hover:scale-110 duration-1000" alt="HTML" />
                        <img src={css} className="w-36 h-36 border border-gray-500 border-2 hover:scale-110 duration-1000" alt="HTML" />
                        <img src={as} className="w-36 h-36 border border-gray-500 border-2 hover:scale-110 duration-1000" alt="HTML" />
                        <img src={aw} className="w-36 h-36 border border-gray-500 border-2 hover:scale-110 duration-1000" alt="HTML" />
                        <img src={af} className="w-36 h-36 border border-gray-500 border-2 hover:scale-110 duration-1000" alt="HTML" />

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
