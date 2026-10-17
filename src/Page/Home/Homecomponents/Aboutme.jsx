import React from "react";
import { Download, Sparkles, Code, CheckCircle, ArrowRight, GraduationCap, Briefcase } from "lucide-react";
import bg from "../../../assets/Image/ChatGPT_Image_Feb_9__2026__12_21_30_PM-removebg-preview.png";
import cv from "../../../assets/Image/shifat cv.pdf";

export default function AboutMe() {
  const skills = [
    "Wix Development",
    "Squarespace",
    "React.js",
    "MERN Frontend",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "HTML5 & Modern CSS",
    "REST APIs",
    "DaisyUI",
    "Responsive Design",
    "Git & GitHub",
    "Figma to Web",
  ];

  const highlights = [
    {
      icon: Briefcase,
      title: "1+ Year Experience & 45+ Projects",
      desc: "Delivered over 45 successful client websites on Wix, Squarespace, and custom code.",
    },
    {
      icon: GraduationCap,
      title: "Diploma in Engineering",
      desc: "Successfully completed from Kurigram Polytechnic Institute with strong technical foundations.",
    },
    {
      icon: Code,
      title: "MERN Stack (Frontend Completed)",
      desc: "Proficient in React, state management, API handling, and scalable component systems.",
    },
    {
      icon: CheckCircle,
      title: "Pixel-Perfect & Responsive UI",
      desc: "Creating high-converting, mobile-friendly designs with fast loading speeds.",
    },
  ];

  return (
    <section id="about" className="relative bg-[#0e1118] text-white py-20 lg:py-28 overflow-hidden">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#FF014F]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF014F]/10 border border-[#FF014F]/30 text-[#FF014F] text-sm font-semibold tracking-wide uppercase mb-3">
            <Sparkles size={14} />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            About <span className="text-[#FF014F]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF014F] to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Glowing Modern Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md group">
              
              {/* Animated Glow Border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#FF014F] via-purple-600 to-[#FF014F] rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-700 animate-pulse" />
              
              <div className="relative rounded-3xl bg-[#131620] border border-white/[0.1] overflow-hidden p-3 shadow-2xl">
                <img
                  src={bg}
                  alt="Md Mostakim Hossain Shifat"
                  className="rounded-2xl w-full h-[400px] sm:h-[460px] object-cover object-top transition duration-500 group-hover:scale-102"
                />

                {/* Floating experience badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl backdrop-blur-md bg-black/75 border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Specialty</p>
                    <p className="text-sm font-bold text-white">Wix, Squarespace & Frontend Dev</p>
                  </div>
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF014F] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF014F]"></span>
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Skills */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Hi, I'm <span className="text-[#FF014F]">Md Mostakim Hossain Shifat</span>
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                I am a web specialist with an engineering background, having completed my <span className="text-white font-semibold">Diploma in Engineering from Kurigram Polytechnic Institute</span>. 
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Over the past <span className="text-white font-semibold">1+ year</span>, I have successfully executed and delivered <span className="text-white font-semibold">45+ client projects</span>, specializing in <span className="text-[#FF014F] font-semibold">Wix</span> and <span className="text-[#FF014F] font-semibold">Squarespace</span> development. In addition, I have completed comprehensive training in <span className="text-white font-semibold">MERN Stack Frontend Development</span> (React.js, Tailwind CSS, JavaScript ES6+), giving me the unique capability to build both fast no-code CMS platforms and custom code-driven web applications.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3.5 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#FF014F]/40 hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#FF014F]/10 border border-[#FF014F]/30 flex items-center justify-center flex-shrink-0 text-[#FF014F]">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                      <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Skills Badges */}
            <div className="pt-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-3 flex items-center gap-2">
                <Code size={16} className="text-[#FF014F]" />
                <span>Technologies & Platforms I Master</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-white/[0.04] border border-white/[0.08] text-gray-200 hover:text-white hover:border-[#FF014F]/60 hover:bg-[#FF014F]/10 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href={cv}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-[#FF014F] to-[#e00045] text-white shadow-[0_4px_20px_rgba(255,1,79,0.35)] hover:shadow-[0_4px_25px_rgba(255,1,79,0.55)] hover:scale-105 transition-all duration-300"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-white/[0.05] border border-white/[0.1] text-gray-200 hover:text-white hover:bg-white/[0.1] hover:border-[#FF014F]/40 transition-all duration-300"
              >
                <span>Hire Me</span>
                <ArrowRight size={16} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}