import React, { useEffect, useRef, useCallback } from "react";
import Typed from "typed.js";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Heronice from "./Homecomponents/Heronice";
import AboutMe from "./Homecomponents/Aboutme";
import { Linkedin, Github, Twitter, Instagram } from "lucide-react";

import cv from "../../assets/Image/shifat cv.pdf";
import bg from "../../assets/Image/ChatGPT_Image_Feb_9__2026__12_21_30_PM-removebg-preview.png";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Frontend Developer", "I build Modern Web Applications"],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const techItems = [
    { icon: "fab fa-html5", name: "HTML5" },
    { icon: "fab fa-css3-alt", name: "CSS3" },
    { icon: "fab fa-js", name: "JavaScript" },
    { icon: "fab fa-react", name: "React.js" },
    { icon: "fab fa-node-js", name: "Node.js" },
    { icon: "fas fa-database", name: "MongoDB" },
    { icon: "fab fa-tailwindcss", name: "Tailwind CSS" },
    { icon: "fas fa-code", name: "TypeScript" }
  ];

  return (
    <div className="relative bg-[#212428] text-white overflow-hidden">

      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
          fpsLimit: 60,
          particles: {
            number: { value: 35 },
            color: { value: ["#ff014f", "#4ecdc4"] },
            move: { enable: true, speed: 1.2 },
            size: { value: 2.5, random: true },
            line_linked: { enable: true, distance: 180, opacity: 0.2 }
          }
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-10 py-20">

        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="text-center lg:text-left space-y-5">

              <p className="text-gray-400 text-sm sm:text-lg">
                Welcome to my world
              </p>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">
                Hi, I'm Sifat
              </h1>

              <h2
                ref={typedRef}
                className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#FF014F] min-h-[60px]"
              />

              <p className="text-gray-300 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base lg:text-lg">
                I build modern web applications using React, Tailwind CSS and JavaScript.
              </p>

              {/* Social */}
              <div className="flex justify-center lg:justify-start gap-4">
                {[Linkedin, Github, Twitter, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    className="p-3 bg-[#FF014F]/20 rounded-full hover:bg-[#FF014F] transition duration-300 hover:scale-110"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button className="px-8 py-3 bg-[#ff014f] rounded-lg font-bold hover:bg-[#e6003d] transition">
                  Hire Me
                </button>

                <a
                  href={cv}
                  download
                  className="px-8 py-3 border-2 border-[#ff014f] text-[#ff014f] rounded-lg font-bold hover:bg-[#ff014f] hover:text-white transition"
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src={bg}
                alt="profile"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain drop-shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 bg-[#212428]/50">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10">
            My Work & Experience
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">

            {[
              { num: "50+", label: "React Projects" },
              { num: "150+", label: "Wix Websites" },
              { num: "90+", label: "Squarespace Sites" },
              { num: "100+", label: "App Development" }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#2a2d33] p-6 rounded-xl border border-[#FF014F]/20 hover:border-[#FF014F]/50 transition"
              >
                <h3 className="text-4xl font-bold text-[#FF014F]">{item.num}</h3>
                <p className="mt-3 text-gray-300">{item.label}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Technology Slider */}
      <section className="py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8">
            Technologies I Work With
          </h2>

          <div className="overflow-hidden bg-[#2a2d33]/60 border border-[#ff014f]/20 rounded-xl p-6">
            <div className="flex gap-6 animate-[slide_50s_linear_infinite] w-max">

              {[...techItems, ...techItems].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-[#212428] px-6 py-3 rounded-xl border border-[#ff014f]/20 whitespace-nowrap"
                >
                  <i className={`${item.icon} text-[#ff014f] text-xl`}></i>
                  <span>{item.name}</span>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      <div className="relative z-10">
        <Heronice />
        <AboutMe />
      </div>

    </div>
  );
};

export default Home;