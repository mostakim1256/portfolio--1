import React, { useEffect, useRef, useState, useMemo } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

import Heronice from "./Homecomponents/Heronice";
import AboutMe from "./Homecomponents/Aboutme";
import ProjectsSection from "./Homecomponents/ProjectsSection";
import TestimonialsSection from "./Homecomponents/TestimonialsSection";
import BlogSection from "./Homecomponents/BlogSection";
import ContactSection from "./Homecomponents/ContactSection";

import {
  Linkedin,
  Github,
  Facebook,
  Instagram,
  Code2,
  Briefcase,
  Users,
  Star,
  ArrowRight,
  Download,
  CheckCircle2,
} from "lucide-react";

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
        "Wix Studio & Editor Expert",
        "Squarespace 7.1 Specialist",
        "Frontend Web Developer",
        "HTML, CSS & Tailwind Pro",
        "React & Next.js Designer",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1600,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  // Green particles theme
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
            distance: 180,
            links: {
              opacity: 0.5,
              color: "#00DF82",
            },
          },
          push: {
            quantity: 3,
          },
        },
      },
      particles: {
        color: {
          value: ["#00DF82", "#10B981", "#34D399", "#ffffff"],
        },
        links: {
          color: "#00DF82",
          distance: 140,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8,
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
            area: 850,
          },
          value: 45,
        },
        opacity: {
          value: { min: 0.2, max: 0.6 },
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
    { icon: Github, href: "https://github.com/mostakim1256", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <div className="relative bg-[#08090D] text-white selection:bg-[#00DF82] selection:text-[#08090D] overflow-hidden">

      {/* Reactive Particle Background in Emerald Green */}
      {particlesInit && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
        />
      )}

      {/* ===================== HERO SECTION ===================== */}
      <section id="home" className="relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16">
        
        {/* Soft Ambient Green Glow behind hero */}
        <div className="absolute top-20 right-1/4 w-[550px] h-[550px] bg-[#00DF82]/10 blur-[180px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-emerald-600/5 blur-[160px] pointer-events-none rounded-full" />

        <div className="w-full max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">

            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 text-center lg:text-left space-y-5 sm:space-y-6"
            >

              <p className="text-gray-400 text-sm sm:text-base lg:text-lg font-medium tracking-wide">
                Hi, I'm
              </p>

              <div>
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] text-white">
                  Mostakim Hossain <span className="text-[#00DF82]">Shifat</span>
                </h1>
                
                <div className="flex items-center justify-center lg:justify-start gap-2 mt-2">
                  <h2
                    ref={typedRef}
                    className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-200 min-h-[36px] sm:min-h-[48px] flex items-center"
                  />
                </div>
              </div>

              <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 text-xs sm:text-sm lg:text-base leading-relaxed px-1 sm:px-0">
                I build modern, responsive, and high-converting websites using <span className="text-white font-semibold">Wix Studio</span>, <span className="text-white font-semibold">Squarespace 7.1</span>, <span className="text-white font-semibold">HTML5/CSS3</span>, <span className="text-white font-semibold">Tailwind CSS</span>, and <span className="text-white font-semibold">JavaScript</span>, alongside reactive interfaces with <span className="text-white font-semibold">React & Next.js</span>. Delivering 45+ pixel-perfect client websites.
              </p>

              {/* Call to Actions matching reference */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2">
                <a
                  href="#projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#00DF82] hover:bg-[#00c975] rounded-full font-bold text-xs sm:text-sm text-[#08090D] shadow-[0_0_25px_rgba(0,223,130,0.4)] hover:shadow-[0_0_35px_rgba(0,223,130,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <span>View My Projects</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href={cv}
                  download="Mostakim_Hossain_Shifat_CV.pdf"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/[0.04] border border-white/[0.12] rounded-full font-bold text-xs sm:text-sm text-gray-200 hover:text-[#00DF82] hover:border-[#00DF82]/60 hover:bg-white/[0.08] active:scale-95 transition-all duration-300"
                >
                  <Download size={16} />
                  <span>Download CV</span>
                </a>
              </div>

              {/* Social Icons row in circular dark cards */}
              <div className="flex justify-center lg:justify-start gap-3 pt-2 sm:pt-3">
                {socialLinks.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-[#00DF82] hover:bg-[#00DF82]/15 text-gray-300 hover:text-[#00DF82] hover:shadow-[0_0_15px_rgba(0,223,130,0.35)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                      aria-label={item.label}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>

            </motion.div>

            {/* Right Center Image Column matching the reference! */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-4 lg:mt-0">

              {/* Floating "Available for Freelance Projects" Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="self-center sm:self-end mb-4 mr-0 sm:mr-4 z-20"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2 rounded-2xl bg-[#111420]/95 border border-white/[0.1] hover:border-[#00DF82]/50 backdrop-blur-xl shadow-xl transition-all duration-300 hover:scale-102 group"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00DF82] animate-pulse" />
                  <div className="text-left">
                    <p className="text-[10px] sm:text-[11px] font-bold text-white">Available for Freelance Projects</p>
                    <p className="text-[9px] sm:text-[10px] text-gray-400 group-hover:text-[#00DF82] transition-colors flex items-center gap-1">
                      <span>Open to new opportunities</span>
                      <ArrowRight size={10} />
                    </p>
                  </div>
                </a>
              </motion.div>

              {/* Main Photo with Vibrant Neon Green Circular Ring */}
              <div className="relative w-64 sm:w-80 lg:w-96 flex items-center justify-center">

                {/* Glowing Circular Ring strictly BEHIND the image (z-0) */}
                <div className="absolute top-2 sm:top-4 lg:top-6 w-52 h-52 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-[#00DF82] shadow-[0_0_50px_rgba(0,223,130,0.5),inset_0_0_30px_rgba(0,223,130,0.3)] animate-pulse z-0 pointer-events-none" />
                <div className="absolute top-2 sm:top-4 lg:top-6 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-tr from-[#00DF82]/25 via-emerald-600/10 to-transparent blur-2xl z-0 pointer-events-none" />

                {/* Main Profile Image - strictly in FRONT on top of circle (z-10) */}
                <div className="relative z-10 w-full flex items-center justify-center">
                  <img
                    src={bg}
                    alt="Mostakim Hossain Shifat"
                    style={{
                      maskImage: "linear-gradient(to bottom, black 82%, transparent 99%)",
                      WebkitMaskImage: "linear-gradient(to bottom, black 82%, transparent 99%)",
                    }}
                    className="w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:scale-102 select-none"
                  />
                  {/* Subtle blend only at the bottom edge */}
                  <div className="absolute -bottom-1 left-0 right-0 h-14 bg-gradient-to-t from-[#08090D] via-[#08090D]/80 to-transparent pointer-events-none" />
                </div>

                {/* Decorative Script "Code Create Inspire" on the right */}
                <div className="absolute -right-2 sm:-right-8 top-1/2 -translate-y-1/2 rotate-12 z-20 pointer-events-none hidden sm:block">
                  <div className="font-handwriting text-2xl lg:text-3xl font-bold text-white/90 drop-shadow-[0_2px_10px_rgba(0,223,130,0.5)] tracking-wider leading-snug">
                    <p>Code</p>
                    <p className="text-[#00DF82]">Create</p>
                    <p>Inspire</p>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* ===================== HORIZONTAL STATS BAR ===================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 sm:mt-16 w-full rounded-2xl bg-[#0F121A] border border-white/[0.08] p-4 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 items-center">
              
              {/* Stat 1 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center text-center sm:text-left gap-2.5 sm:gap-4 p-2 sm:p-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00DF82]/10 border border-[#00DF82]/30 flex items-center justify-center text-[#00DF82] flex-shrink-0 shadow-[0_0_15px_rgba(0,223,130,0.2)]">
                  <Code2 size={20} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white">5+</h3>
                  <p className="text-[10px] sm:text-xs text-gray-400 font-medium">Years Learning & Practicing</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center text-center sm:text-left gap-2.5 sm:gap-4 p-2 sm:p-0 lg:border-l lg:border-white/[0.08]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00DF82]/10 border border-[#00DF82]/30 flex items-center justify-center text-[#00DF82] flex-shrink-0 shadow-[0_0_15px_rgba(0,223,130,0.2)]">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white">45+</h3>
                  <p className="text-[10px] sm:text-xs text-gray-400 font-medium">Projects Completed</p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center text-center sm:text-left gap-2.5 sm:gap-4 p-2 sm:p-0 lg:border-l lg:border-white/[0.08]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00DF82]/10 border border-[#00DF82]/30 flex items-center justify-center text-[#00DF82] flex-shrink-0 shadow-[0_0_15px_rgba(0,223,130,0.2)]">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white">45+</h3>
                  <p className="text-[10px] sm:text-xs text-gray-400 font-medium">Happy Clients</p>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center text-center sm:text-left gap-2.5 sm:gap-4 p-2 sm:p-0 lg:border-l lg:border-white/[0.08]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00DF82]/10 border border-[#00DF82]/30 flex items-center justify-center text-[#00DF82] flex-shrink-0 shadow-[0_0_15px_rgba(0,223,130,0.2)]">
                  <Star size={20} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white">100%</h3>
                  <p className="text-[10px] sm:text-xs text-gray-400 font-medium">Dedication & Passion</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ===================== ABOUT ME + SKILLS SECTION ===================== */}
      <AboutMe />

      {/* ===================== SERVICES SECTION ===================== */}
      <Heronice />

      {/* ===================== FEATURED PROJECTS ===================== */}
      <ProjectsSection />

      {/* ===================== WHAT CLIENTS SAY (TESTIMONIALS) ===================== */}
      <TestimonialsSection />

      {/* ===================== LATEST BLOG & TIPS ===================== */}
      <BlogSection />

      {/* ===================== CONTACT / LET'S WORK TOGETHER ===================== */}
      <ContactSection />

    </div>
  );
};

export default Home;