import React, { useEffect, useRef, useCallback } from "react";
import Typed from "typed.js";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Heronice from "./Homecomponents/Heronice";

// Assets Import
import cv from "../../assets/Image/shifat cv.pdf";
import bg from "../../assets/Image/ChatGPT_Image_Feb_9__2026__12_21_30_PM-removebg-preview.png";

const Home = () => {
  const typedRef = useRef(null);

  // Typed.js Effect
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

  // Particles init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative bg-[#212428] text-white overflow-hidden">
      {/* PARTICLES BACKGROUND */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 60 },
            color: { value: "#ff014f" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 4 } },
            move: { enable: true, speed: 2 },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
            },
            modes: {
              repulse: { distance: 120 },
            },
          },
        }}
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-screen py-20 flex flex-col md:flex-row items-center justify-between">
        {/* LEFT CONTENT */}
        <div className="space-y-8 ">
          <p >Welcome to my world</p>
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight text-[#FF014F]">
            Hi, I'm Sifat
          </h1>

          <h2
            ref={typedRef}
            className="text-4xl md:text-5xl font-bold min-h-[60px]"
          ></h2>

          <p className="text-xl md:text-2xl leading-relaxed">
            I build modern, fast and responsive web applications using
            <br />
            <span className="font-semibold"> React</span>,
            <span className="font-semibold"> Tailwind CSS</span> &
            <span className="font-semibold"> JavaScript</span>.
          </p>

          <div className="flex gap-6 mt-8">
            <a
              href="/contact"
              className="px-8 py-4 bg-[#ff014f] rounded-lg font-bold text-lg  "
            >
              Hire Me
            </a>

            <a
              href={cv}
              download
              className="px-8 py-4 bg-[#ff014f] rounded-lg font-bold text-lg"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE WITH FADE EFFECT */}
        <div className="mt-12 md:mt-0 flex justify-end">
          <div className="relative">
            <img src={bg} alt="Sifat" className="max-w-md w-full" />

            {/* Fade Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#212428]" />
          </div>
        </div>
      </section>

      <section>
        <Heronice />
      </section>
    </div>
  );
};

export default Home;
