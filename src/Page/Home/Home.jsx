import React, { useEffect, useRef, useState, useMemo } from "react";
import Typed from "typed.js";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

import Heronice from "./Homecomponents/Heronice";
import AboutMe from "./Homecomponents/Aboutme";
import ProjectsSection from "./Homecomponents/ProjectsSection";
import ContactSection from "./Homecomponents/ContactSection";

import { Linkedin, Github, Twitter, Instagram, Code2, Globe, Users, Star, ArrowRight, Download, GraduationCap } from "lucide-react";

import cv from "../../assets/Image/shifat cv.pdf";
import bg from "../../assets/Image/63d67696-5794-4197-a2ce-73042459eca0-removebg-preview (1).png";

const Home = () => {
  const typedRef = useRef(null);
  const [particlesInit, setParticlesInit] = useState(false);

  // Initialize tsparticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setParticlesInit(true);
    });
  }, []);

  // Typed.js initialization
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Frontend & MERN Developer",
        "Wix & Squarespace Expert",
        "45+ Client Projects Done",
        "Modern UI/UX Implementer",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  const particlesOptions = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: 0 },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 200,
            links: {
              opacity: 0.6,
              color: "#FF014F",
            },
          },
          push: {
            quantity: 3,
          },
        },
      },
      particles: {
        color: {
          value: ["#FF014F", "#00f2fe", "#a855f7", "#ffffff"],
        },
        links: {
          color: "#ffffff",
          distance: 140,
          enable: true,
          opacity: 0.16,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 50,
        },
        opacity: {
          value: { min: 0.25, max: 0.75 },
        },
        size: {
          value: { min: 1.5, max: 3.5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <div className="relative bg-[#0e1118] text-white selection:bg-[#FF014F] selection:text-white overflow-hidden">

      {/* High-End Interactive Particle Background */}
      {particlesInit && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
        />
      )}

      {/* HERO SECTION */}
      <section id="home" className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#FF014F]/10 blur-[160px] pointer-events-none rounded-full" />

        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">
                  Available for New Projects
                </span>
              </div>

              {/* Title & Introduction */}
              <div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                  Hi, I'm <span className="text-white">Sifat</span>
                </h1>
                <div className="flex items-center justify-center lg:justify-start gap-2 mt-2">
                  <h2
                    ref={typedRef}
                    className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#FF014F] min-h-[55px] flex items-center"
                  />
                </div>
              </div>

              <p className="text-gray-300 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed">
                Specialized in <span className="text-white font-semibold">Wix & Squarespace development</span> alongside <span className="text-white font-semibold">React & MERN Frontend</span>. With 1+ year of hands-on experience and 45+ successfully delivered projects, I build modern, high-converting web solutions.
              </p>

              {/* Social Icons */}
              <div className="flex justify-center lg:justify-start gap-3 pt-2">
                {socialLinks.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#FF014F] hover:bg-[#FF014F] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                      aria-label={item.label}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#FF014F] to-[#e00045] rounded-xl font-bold text-sm text-white shadow-[0_4px_25px_rgba(255,1,79,0.4)] hover:shadow-[0_4px_35px_rgba(255,1,79,0.6)] hover:scale-105 transition-all duration-300"
                >
                  <span>Hire Me</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href={cv}
                  download
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/[0.04] border border-white/[0.1] rounded-xl font-bold text-sm text-gray-200 hover:text-white hover:bg-white/[0.08] hover:border-[#FF014F]/50 transition-all duration-300"
                >
                  <Download size={16} />
                  <span>Download CV</span>
                </a>
              </div>
            </div>

            {/* Right Image Column with Live Animated BG Effects */}
            <div className="lg:col-span-5 flex justify-center relative group w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">

              {/* Live Animated Glowing Radial Orbits */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="absolute w-[90%] h-[90%] rounded-full border border-dashed border-[#FF014F]/30 animate-[spin_50s_linear_infinite]" />
                <div className="absolute w-[80%] h-[80%] rounded-full border-2 border-[#FF014F]/20 bg-gradient-to-tr from-[#FF014F]/10 via-transparent to-[#9333ea]/10 blur-md animate-[pulse_6s_ease-in-out_infinite]" />
                <div className="absolute w-[70%] h-[70%] rounded-full bg-gradient-to-tr from-[#FF014F]/20 via-transparent to-[#FF014F]/5 blur-2xl animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-[75%] h-[75%] rounded-full border-b-2 border-r-2 border-[#FF014F]/40 animate-[spin_12s_linear_infinite]" />
              </div>

              {/* Main Profile Image */}
              <img
                src={bg}
                alt="Sifat - Frontend Developer"
                className="w-full object-contain drop-shadow-[0_20px_50px_rgba(255,1,79,0.25)] relative z-10 transition-transform duration-500 group-hover:scale-105"
                style={{
                  maskImage: "linear-gradient(to bottom, black 65%, transparent 98%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 98%)",
                }}
              />

              {/* Bottom Blending Overlay */}
              <div className="absolute -bottom-2 left-0 w-full h-36 bg-gradient-to-t from-[#0e1118] via-[#0e1118]/80 to-transparent z-20 pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative z-10 pb-16 pt-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Frosted Glass Container */}
          <div className="relative rounded-3xl p-6 sm:p-8 backdrop-blur-xl bg-[#131620]/80 border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-[#FF014F]/40 transition-all duration-500">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
              {[
                {
                  icon: Code2,
                  num: "45+",
                  label: "Projects Completed",
                },
                {
                  icon: Globe,
                  num: "1+ Year",
                  label: "Practical Experience",
                },
                {
                  icon: Star,
                  num: "100%",
                  label: "Client Satisfaction",
                },
                {
                  icon: GraduationCap,
                  num: "Diploma Engr.",
                  label: "Kurigram Polytechnic",
                },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-4 sm:gap-5 justify-start lg:justify-center ${
                      index !== 3 ? "lg:border-r lg:border-white/[0.08]" : ""
                    } pr-0 lg:pr-4`}
                  >
                    <div className="relative flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-[#FF014F]/10 border border-[#FF014F]/30 shadow-[0_0_20px_rgba(255,1,79,0.25)] group-hover:scale-105 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-[#FF014F]" />
                    </div>

                    <div className="text-left">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">
                        {item.num}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 font-medium mt-1">
                        {item.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <AboutMe />

      {/* SERVICES / WHAT I DO SECTION */}
      <Heronice />

      {/* FEATURED PROJECTS SECTION */}
      <ProjectsSection />

      {/* CONTACT SECTION */}
      <ContactSection />

    </div>
  );
};

export default Home;