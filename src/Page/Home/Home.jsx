import React, { useEffect, useRef, useCallback } from "react";
import Typed from "typed.js";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Heronice from "./Homecomponents/Heronice";
import AboutMe from "./Homecomponents/Aboutme";
import { Linkedin, Github, Twitter, Instagram } from "lucide-react";

// Assets
import cv from "../../assets/Image/shifat cv.pdf";
import bg from "../../assets/Image/ChatGPT_Image_Feb_9__2026__12_21_30_PM-removebg-preview.png";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Frontend Developer", "I build Modern Web Applications"],
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // স্লাইডারের টেক লিস্ট (এখানেই রাখা আছে)
  const techItems = [
    { icon: "fab fa-html5", name: "HTML5" },
    { icon: "fab fa-css3-alt", name: "CSS3" },
    { icon: "fab fa-js", name: "JavaScript (ES6+)" },
    { icon: "fab fa-react", name: "React.js" },
    { icon: "fab fa-node-js", name: "Node.js" },
    { icon: "fas fa-database", name: "MongoDB" },
    { icon: "fas fa-server", name: "Express.js" },
    { icon: "fab fa-tailwindcss", name: "Tailwind CSS" },
    { icon: "fas fa-bolt", name: "Redux Toolkit" },
    { icon: "fas fa-terminal", name: "Git & GitHub" },
    { icon: "fab fa-npm", name: "npm / yarn" },
    { icon: "fas fa-code", name: "TypeScript" },
    { icon: "fas fa-shield-alt", name: "JWT Auth" },
    { icon: "fas fa-cloud", name: "REST API" },
  ];

  return (
    <div className="relative bg-[#212428] text-white overflow-hidden">
      {/* PARTICLES */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
          particles: {
            number: { value: 60 },
            color: { value: "#ff014f" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 4 } },
            move: { enable: true, speed: 2 },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-screen py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[84%] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* LEFT - Text Content */}
            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left">
              <p className="text-lg md:text-xl text-gray-400 tracking-wide">
                Welcome to my world
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Hi, I'm Sifat
              </h1>

              <h2
                ref={typedRef}
                className="text-3xl sm:text-4xl md:text-5xl font-bold min-h-[60px] text-[#FF014F]"
              />

              <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-2xl mx-auto lg:mx-0">
                I build modern, fast and responsive web applications using
                <br className="hidden sm:block" />
                <span className="font-semibold text-white">React</span>,
                <span className="font-semibold text-white"> Tailwind CSS</span> &{" "}
                <span className="font-semibold text-white">JavaScript</span>.
              </p>

              {/* SOCIAL ICONS */}
              <div className="flex justify-center lg:justify-start gap-4 mt-6">
                <a
                  href="#"
                  className="p-3 bg-[#FF014F]/20 rounded-full hover:bg-[#FF014F] hover:scale-110 transition-all duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-[#FF014F]/20 rounded-full hover:bg-[#FF014F] hover:scale-110 transition-all duration-300"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-[#FF014F]/20 rounded-full hover:bg-[#FF014F] hover:scale-110 transition-all duration-300"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-[#FF014F]/20 rounded-full hover:bg-[#FF014F] hover:scale-110 transition-all duration-300"
                >
                  <Instagram size={24} />
                </a>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-6 mt-8">
                <a
                  href="#"
                  className="px-8 py-4 bg-[#ff014f] rounded-lg font-bold text-lg hover:bg-[#e6003d] transition-all duration-300 shadow-lg hover:shadow-[#ff014f]/40"
                >
                  Hire Me
                </a>

                <a
                  href={cv}
                  download
                  className="px-8 py-4 bg-transparent border-2 border-[#ff014f] text-[#ff014f] rounded-lg font-bold text-lg hover:bg-[#ff014f] hover:text-white transition-all duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* RIGHT - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative max-w-md lg:max-w-lg w-full">
                <img
                  src={bg}
                  alt="Sifat"
                  className="w-full object-contain drop-shadow-2xl rounded-2xl"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heronice Section */}
      <div className="relative z-10">
        <Heronice />
      </div>

      {/* === স্লাইডার সেকশন যোগ করা হয়েছে === */}
      <section className="relative z-10 py-12 md:py-20">
        <div className="max-w-[84%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-white">
            Technologies I Work With
          </h2>

          {/* স্লাইডার */}
          <div className="slider-wrapper">
            <style jsx>{`
              .slider-wrapper {
                width: 100%;
                overflow: hidden;
                position: relative;
                padding: 20px 0;
                background: rgba(33, 36, 40, 0.4);
                border-radius: 16px;
                border: 1px solid rgba(255, 1, 79, 0.12);
              }

              .slider-track {
                display: flex;
                animation: slide 50s linear infinite;
                width: max-content;
              }

              .slider-track:hover {
                animation-play-state: paused;
              }

              .slider-items {
                display: flex;
                gap: 1.5rem;
                padding: 0 1.5rem;
              }

              .tech-card {
                flex: 0 0 auto;
                display: flex;
                align-items: center;
                gap: 0.9rem;
                padding: 0.9rem 1.6rem;
                background: rgba(42, 45, 51, 0.7);
                border: 1px solid rgba(255, 1, 79, 0.2);
                border-radius: 12px;
                color: #e0e0e0;
                font-weight: 500;
                white-space: nowrap;
                transition: all 0.35s ease;
                backdrop-filter: blur(6px);
              }

              .tech-card i {
                font-size: 1.9rem;
                color: #ff014f;
                transition: transform 0.4s ease;
              }

              .tech-card span {
                font-size: 1.05rem;
              }

              .tech-card:hover {
                transform: translateY(-5px);
                background: rgba(255, 1, 79, 0.08);
                border-color: #ff014f80;
                box-shadow: 0 12px 32px rgba(255, 1, 79, 0.18);
              }

              .tech-card:hover i {
                transform: rotate(12deg) scale(1.12);
              }

              @keyframes slide {
                from { transform: translateX(0); }
                to   { transform: translateX(-50%); }
              }

              @media (max-width: 768px) {
                .slider-track { animation-duration: 65s; }
                .tech-card { padding: 0.7rem 1.3rem; gap: 0.7rem; }
                .tech-card i { font-size: 1.6rem; }
                .tech-card span { font-size: 0.95rem; }
              }

              @media (max-width: 480px) {
                .slider-items { gap: 1rem; }
                .tech-card { padding: 0.6rem 1.1rem; min-width: 140px; }
              }
            `}</style>

            <div className="slider-track">
              <div className="slider-items">
                {techItems.map((item, index) => (
                  <div key={index} className="tech-card">
                    <i className={item.icon}></i>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>

              <div className="slider-items">
                {techItems.map((item, index) => (
                  <div key={`dup-${index}`} className="tech-card">
                    <i className={item.icon}></i>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AboutMe Section */}
      <div className="relative z-10">
        <AboutMe />
      </div>
    </div>
  );
};

export default Home;