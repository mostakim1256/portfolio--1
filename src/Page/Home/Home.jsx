import React, { useEffect, useRef, useCallback } from "react";
import Typed from "typed.js";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Heronice from "./Homecomponents/Heronice";
import AboutMe from "./Homecomponents/Aboutme";
import { Linkedin, Github, Twitter, Instagram, Code2, Globe, Users, Star } from "lucide-react";

import cv from "../../assets/Image/shifat cv.pdf";
import bg from "../../assets/Image/63d67696-5794-4197-a2ce-73042459eca0-removebg-preview (1).png";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Frontend Developer ", "Modern Web Apps And"],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true,
      showCursor: false,
    });

    return () => typed.destroy();
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative bg-[#1D1F24] text-white overflow-hidden">

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
                className="text-2xl sm:text-4xl lg:text-5xl whitespace-nowrap font-bold text-[#FF014F] min-h-[60px]"
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

            {/* Right Image with Live BG Effects */}
            <div className="flex justify-center relative group w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">

              {/* 1. Live Animated Background Effects */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="absolute w-[85%] h-[85%] rounded-full border border-dashed border-[#FF014F]/40 animate-[spin_40s_linear_infinite]" />
                <div className="absolute w-[75%] h-[75%] rounded-full border-2 border-[#FF014F]/20 bg-gradient-to-tr from-[#FF014F]/10 via-transparent to-[#9b00e8]/10 blur-md animate-[pulse_5s_ease-in-out_infinite]" />
                <div className="absolute w-[68%] h-[68%] rounded-full bg-gradient-to-tr from-[#FF014F]/25 via-transparent to-[#FF014F]/10 blur-2xl animate-[spin_15s_linear_infinite]" />
                <div className="absolute w-[65%] h-[65%] rounded-full border border-[#FF014F]/30 animate-[ping_4s_linear_infinite] opacity-25" />
                <div className="absolute w-[70%] h-[70%] rounded-full border-b-2 border-r-2 border-[#FF014F]/40 animate-[spin_10s_linear_infinite]" />
              </div>

              {/* 2. Main Profile Image with Smooth Fade Mask */}
              <img
                src={bg}
                alt="profile"
                className="w-full object-contain drop-shadow-[0_20px_50px_rgba(255,1,79,0.3)] relative z-10 transition-transform duration-500 hover:scale-105"
                style={{
                  maskImage: "linear-gradient(to bottom, black 60%, transparent 95%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 95%)",
                }}
              />

              {/* 3. Smooth Blending Overlay */}
              <div className="absolute -bottom-2 left-0 w-full h-40 bg-gradient-to-t from-[#1D1F24] via-[#1D1F24]/90 to-transparent z-20 pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* iPhone Glass Stats Section */}
      <section className="relative z-10 pb-16 pt-4 px-4 sm:px-6 lg:px-8">
        <div className="max-auto mx-auto px-24">

          {/* Frosted Glass Container */}
          <div className="relative rounded-3xl p-6 sm:p-8 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_1px_0_rgba(255,255,255,0.1)] hover:border-[#FF014F]/30 transition-all duration-500">

            {/* Background Internal Soft Pink Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF014F]/5 via-transparent to-[#FF014F]/5 rounded-3xl pointer-events-none" />

            {/* Grid Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">

              {[
                {
                  icon: Code2,
                  num: "50+",
                  label: "Projects Completed"
                },
                {
                  icon: Globe,
                  num: "150+",
                  label: "Websites Developed"
                },
                {
                  icon: Users,
                  num: "90+",
                  label: "Happy Clients"
                },
                {
                  icon: Star,
                  num: "100+",
                  label: "App Development"
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-4 sm:gap-5 justify-start lg:justify-center ${
                      index !== 3 ? "lg:border-r lg:border-white/[0.08]" : ""
                    } pr-0 lg:pr-4`}
                  >
                    {/* Glowing Glass Icon Circle */}
                    <div className="relative flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-b from-[#FF014F]/20 to-[#FF014F]/5 border border-[#FF014F]/40 shadow-[0_0_15px_rgba(255,1,79,0.35)] group-hover:scale-105 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-[#FF014F]" />
                    </div>

                    {/* Text Info */}
                    <div className="text-left">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FF014F] tracking-tight leading-none">
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

      <div className="relative z-10">
        <AboutMe />
        <Heronice />
      </div>

    </div>
  );
};

export default Home;