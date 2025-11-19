import React from "react";
import image from "../../../src/assets/Image/123.png";
import logo from "../../../src/assets/Image/1234.png";

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
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Hi, I'm <span className="text-green-400">Sifat</span>
                        <br />
                        Frontend Developer
                    </h1>

                    <p className="text-gray-500 text-lg">
                        I build modern, fast and responsive web applications using
                        <span className="text-green-400"> React</span>,
                        <span className="text-green-400"> Tailwind CSS</span> &
                        <span className="text-green-400"> JavaScript</span>.
                    </p>

                    {/* BUTTONS */}
                    <div className="flex gap-4">
                        <a
                            href="/contact"
                            className="px-6 py-3 animate-bounce bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition duration-300"
                        >
                            Hire Me
                        </a>

                        <a
                            href="/cv.pdf"
                            className="px-6 py-3 border border-green-500 hover:bg-green-500 hover:text-white rounded-lg font-semibold transition"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="mt-12 md:mt-0 md:mr-0 flex justify-center hover:scale-110 duration-1000 ml-24 h-94 w-54 md:w-auto">
                    <div className="w-80 h-99 overflow-hidden rounded-2xl bg-green-100 flex items-center justify-center shadow-xl">
                        <img src={logo} alt="Profile Logo" className="w-full h-full object-cover" />
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
                    <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-12 text-center md:text-left">
                        My <span className="text-green-500">Projects & Skills</span>
                    </h2>

                    {/* Project / Skill Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
                        {/* Card 1 */}
                        <div className="rounded-xl shadow-lg bg-green-100 hover:scale-105 transition duration-500 overflow-hidden">
                            <img src="/project1.jpg" alt="Project 1" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">Portfolio Website</h3>
                                <p className="text-gray-600 mb-4">
                                    A modern and fully responsive portfolio made with React & Tailwind.
                                </p>
                                <a href="#" className="text-green-500 font-semibold hover:underline">
                                    🔗 Live Demo
                                </a>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-xl shadow-lg bg-green-100 hover:scale-105 transition duration-500 overflow-hidden">
                            <img src="/project2.jpg" alt="Project 2" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">E-Commerce UI</h3>
                                <p className="text-gray-600 mb-4">
                                    Clean e-commerce frontend with product cards & animations.
                                </p>
                                <a href="#" className="text-green-500 font-semibold hover:underline">
                                    🔗 Live Demo
                                </a>
                            </div>
                        </div>
                        <br />
                        {/* Card 3 */}
                        <div className="rounded-xl shadow-lg bg-green-100 hover:scale-105 transition duration-500 overflow-hidden">
                            <img src="/project3.jpg" alt="Project 3" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">React Landing Page</h3>
                                <p className="text-gray-600 mb-4">
                                    Smooth animations and clean UI for landing page websites.
                                </p>
                                <a href="#" className="text-green-500 font-semibold hover:underline">
                                    🔗 Live Demo
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Programming / Tech Icons */}
                    <div className="flex gap-6 mt-16 flex-wrap justify-start">
                        <img src="/icon/html.png" className="w-16 h-16" alt="HTML" />
                        <img src="/icon/css.png" className="w-16 h-16" alt="CSS" />
                        <img src="/icon/js.png" className="w-16 h-16" alt="JavaScript" />
                        <img src="/icon/react.png" className="w-16 h-16" alt="React" />
                        <img src="/icon/next.png" className="w-16 h-16" alt="Next.js" />
                        <img src="/icon/angular.png" className="w-16 h-16" alt="Angular" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
