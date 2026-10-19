import React from "react";
import {
  Download,
  MapPin,
  Briefcase,
  Mail,
  Sparkles,
  ArrowRight,
  Code,
  Layers,
  Globe,
  Cpu,
} from "lucide-react";
import bg from "../../../assets/Image/ChatGPT_Image_Feb_9__2026__12_21_30_PM-removebg-preview.png";
import cv from "../../../assets/Image/shifat cv.pdf";

export default function AboutMe() {
  const skillsList = [
    { name: "React.js", percent: 90, color: "#00DF82" },
    { name: "Next.js", percent: 85, color: "#00DF82" },
    { name: "JavaScript (ES6+)", percent: 90, color: "#00DF82" },
    { name: "Tailwind CSS", percent: 95, color: "#00DF82" },
    { name: "Wix & Squarespace", percent: 95, color: "#00DF82" },
    { name: "HTML & CSS", percent: 95, color: "#00DF82" },
  ];

  return (
    <section id="about" className="relative bg-[#08090D] text-white py-20 lg:py-28 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#00DF82]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 3-Column Grid matching reference image: Bio, Center Portrait, Skills Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: ABOUT ME BIO ================= */}
          <div className="lg:col-span-5 space-y-6">
            
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#00DF82] mb-2">
                ABOUT ME
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                About <span className="text-[#00DF82]">Me</span>
              </h2>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              I'm Mostakim Hossain Shifat, a passionate Frontend Developer with a strong interest in building modern web applications. I have experience working with React, Next.js, Tailwind CSS, Wix, Squarespace, and other modern technologies. I love solving problems, learning new things, and creating clean, responsive, and user-friendly websites.
            </p>

            {/* 2x2 Info Grid matching reference image */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              
              <div className="flex items-center gap-2.5 text-xs text-gray-300">
                <MapPin size={16} className="text-[#00DF82] flex-shrink-0" />
                <span>Bangladesh</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-gray-300">
                <Briefcase size={16} className="text-[#00DF82] flex-shrink-0" />
                <span>Available for Freelance</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-gray-300 truncate">
                <Mail size={16} className="text-[#00DF82] flex-shrink-0" />
                <span className="truncate">mostakimshifat476@gmail.com</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-gray-300">
                <Sparkles size={16} className="text-[#00DF82] flex-shrink-0" />
                <span>Open to Opportunities</span>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap gap-4 items-center">
              <a
                href={cv}
                download="Mostakim_Hossain_Shifat_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs bg-[#00DF82] hover:bg-[#00c975] text-[#08090D] shadow-[0_0_20px_rgba(0,223,130,0.35)] hover:shadow-[0_0_25px_rgba(0,223,130,0.55)] hover:scale-105 transition-all duration-300"
              >
                <span>Download CV</span>
                <Download size={14} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs bg-white/[0.04] border border-white/[0.1] text-gray-200 hover:text-[#00DF82] hover:border-[#00DF82]/60 hover:bg-white/[0.08] transition-all duration-300"
              >
                <span>Let's Talk</span>
                <ArrowRight size={14} />
              </a>
            </div>

          </div>

          {/* ================= CENTER COLUMN: PORTRAIT IN CARD ================= */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative w-full max-w-xs group">
              
              {/* Outer soft glow */}
              <div className="absolute -inset-1 bg-gradient-to-t from-[#00DF82]/30 to-emerald-600/10 rounded-3xl blur-md opacity-50 group-hover:opacity-80 transition duration-500" />
              
              <div className="relative rounded-3xl bg-[#0F121A] border border-[#00DF82]/40 overflow-hidden p-2 shadow-2xl">
                <img
                  src={bg}
                  alt="Mostakim Hossain Shifat"
                  className="rounded-2xl w-full h-[360px] sm:h-[400px] object-cover object-top transition duration-500 group-hover:scale-102"
                />
              </div>

            </div>
          </div>

          {/* ================= RIGHT COLUMN: SKILLS PROGRESS BARS ================= */}
          <div id="skills" className="lg:col-span-4 space-y-5">
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              My <span className="text-[#00DF82]">Skills</span>
            </h3>

            <div className="space-y-4 pt-1">
              {skillsList.map((skill, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-gray-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00DF82]" />
                      {skill.name}
                    </span>
                    <span className="text-gray-400">{skill.percent}%</span>
                  </div>

                  {/* Progress bar track matching reference image */}
                  <div className="h-1.5 w-full bg-white/[0.08] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#00DF82] to-[#00b368] rounded-full shadow-[0_0_10px_rgba(0,223,130,0.6)]"
                      style={{ width: `${skill.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}