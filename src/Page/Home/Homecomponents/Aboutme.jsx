import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  MapPin,
  Briefcase,
  Mail,
  Sparkles,
  ArrowRight,
  GraduationCap,
  CheckCircle2,
  Code2,
  Globe,
  Palette,
  ExternalLink,
  Flame,
} from "lucide-react";
import bg from "../../../assets/Image/ChatGPT_Image_Feb_9__2026__12_21_30_PM-removebg-preview.png";
import cv from "../../../assets/Image/shifat cv.pdf";

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("all");

  // Core CMS & Frontend Skills strictly reflecting user expertise
  const primarySkills = [
    {
      name: "Wix Studio, Editor & Harmony",
      percent: 98,
      category: "cms",
      badge: "Mastery",
      color: "#00DF82",
    },
    {
      name: "Squarespace 7.1 / Fluid Engine",
      percent: 95,
      category: "cms",
      badge: "Expert",
      color: "#00DF82",
    },
    {
      name: "HTML5 & Modern CSS3",
      percent: 95,
      category: "frontend",
      badge: "Expert",
      color: "#00DF82",
    },
    {
      name: "Tailwind CSS & DaisyUI",
      percent: 95,
      category: "frontend",
      badge: "Expert",
      color: "#00DF82",
    },
    {
      name: "JavaScript (ES6+) & DOM",
      percent: 90,
      category: "frontend",
      badge: "Advanced",
      color: "#00DF82",
    },
    {
      name: "React.js (Frontend UI)",
      percent: 78,
      category: "frontend",
      badge: "Proficient",
      color: "#38bdf8",
    },
    {
      name: "Next.js (Frontend Routing)",
      percent: 72,
      category: "frontend",
      badge: "Proficient",
      color: "#a78bfa",
    },
  ];

  const filteredSkills =
    activeTab === "all"
      ? primarySkills
      : primarySkills.filter((s) => s.category === activeTab);

  return (
    <section
      id="about"
      className="relative bg-[#08090D] text-white py-24 lg:py-32 overflow-hidden"
    >
      {/* ================= LUXURY AMBIENT BACKGROUND GLOWS ================= */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#00DF82]/10 rounded-full blur-[170px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-emerald-600/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Decorative animated crosshairs / grid glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#00DF82_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= 3-COLUMN LUXURY GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: BIO & GLASS CARDS ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00DF82]/10 border border-[#00DF82]/30 text-[#00DF82] text-xs font-bold tracking-wide">
              <Sparkles size={13} className="animate-spin text-[#00DF82]" style={{ animationDuration: "6s" }} />
              <span>WIX &bull; SQUARESPACE &bull; FRONTEND SPECIALIST</span>
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DF82] via-emerald-400 to-teal-300">Me</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#00DF82] to-transparent rounded-full mt-3" />
            </div>

            {/* Authentic bio highlighting user strengths & Kurigram Polytechnic Institute */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              I'm <span className="text-white font-semibold">Mostakim Hossain Shifat</span>, a dedicated Frontend & CMS Web Developer with a <span className="text-[#00DF82] font-semibold">Diploma in Engineering from Kurigram Polytechnic Institute</span>. With 1+ year of professional experience and <span className="text-[#00DF82] font-semibold">45+ successfully delivered client websites</span>, I specialize in crafting pixel-perfect, high-converting digital experiences.
            </p>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              My core mastery lies in <span className="text-white font-medium">Wix Studio, Wix Editor, Wix Harmony</span> and <span className="text-white font-medium">Squarespace 7.1</span>, paired with custom <span className="text-white font-medium">HTML5, CSS3, JavaScript</span>, and <span className="text-white font-medium">Tailwind CSS</span>. I also design clean, reactive interfaces with <span className="text-white font-medium">React.js & Next.js</span>.
            </p>

            {/* 2x2 Glassmorphism Micro-Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              
              {/* Card 1: Location */}
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                className="p-3.5 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-[#00DF82]/50 hover:shadow-[0_0_20px_rgba(0,223,130,0.15)] transition-all duration-300 flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#00DF82]/10 border border-[#00DF82]/30 flex items-center justify-center text-[#00DF82] group-hover:scale-110 transition-transform">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">Location</p>
                  <p className="text-xs font-bold text-white">Kurigram / Dhaka, BD</p>
                </div>
              </motion.div>

              {/* Card 2: Availability */}
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                className="p-3.5 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-[#00DF82]/50 hover:shadow-[0_0_20px_rgba(0,223,130,0.15)] transition-all duration-300 flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#00DF82]/10 border border-[#00DF82]/30 flex items-center justify-center text-[#00DF82] group-hover:scale-110 transition-transform">
                  <Briefcase size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">Freelance Status</p>
                  <p className="text-xs font-bold text-[#00DF82]">Available Now (45+ Done)</p>
                </div>
              </motion.div>

              {/* Card 3: Email */}
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                className="p-3.5 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-[#00DF82]/50 hover:shadow-[0_0_20px_rgba(0,223,130,0.15)] transition-all duration-300 flex items-center gap-3 group sm:col-span-1"
              >
                <div className="w-9 h-9 rounded-xl bg-[#00DF82]/10 border border-[#00DF82]/30 flex items-center justify-center text-[#00DF82] group-hover:scale-110 transition-transform">
                  <Mail size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">Direct Email</p>
                  <p className="text-xs font-bold text-white truncate">mostakimshifat476@gmail.com</p>
                </div>
              </motion.div>

              {/* Card 4: Education */}
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                className="p-3.5 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-[#00DF82]/50 hover:shadow-[0_0_20px_rgba(0,223,130,0.15)] transition-all duration-300 flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#00DF82]/10 border border-[#00DF82]/30 flex items-center justify-center text-[#00DF82] group-hover:scale-110 transition-transform">
                  <GraduationCap size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">Education</p>
                  <p className="text-xs font-bold text-white">Diploma in Engg (KPI)</p>
                </div>
              </motion.div>

            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href={cv}
                download="Mostakim_Hossain_Shifat_CV.pdf"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-xs bg-[#00DF82] hover:bg-[#00c975] text-[#08090D] shadow-[0_0_25px_rgba(0,223,130,0.4)] hover:shadow-[0_0_35px_rgba(0,223,130,0.65)] transition-all duration-300"
              >
                <span>Download CV</span>
                <Download size={14} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-xs bg-white/[0.04] border border-white/[0.12] text-gray-200 hover:text-[#00DF82] hover:border-[#00DF82]/60 hover:bg-white/[0.08] transition-all duration-300"
              >
                <span>Let's Talk</span>
                <ArrowRight size={14} />
              </motion.a>
            </div>

          </motion.div>

          {/* ================= CENTER COLUMN: LUXURY ANIMATED PORTRAIT CARD ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-3 flex justify-center relative"
          >
            {/* Continuous Gentle Floating Animation */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="relative w-full max-w-xs"
            >
              
              {/* Outer Luxury Animated Glow Border */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#00DF82] via-emerald-500/40 to-teal-400/20 rounded-[30px] blur-md opacity-75 group-hover:opacity-100 transition duration-700 animate-pulse" />

              {/* Main Card Frame */}
              <div className="relative rounded-[28px] bg-[#0E121B] border-2 border-[#00DF82]/50 overflow-hidden p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
                
                {/* Photo */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#131926] to-[#0A0D14]">
                  <img
                    src={bg}
                    alt="Mostakim Hossain Shifat"
                    className="w-full h-[370px] sm:h-[410px] object-cover object-top transition duration-500 hover:scale-103"
                  />
                  {/* Subtle bottom shadow overlay */}
                  <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#0E121B] to-transparent pointer-events-none" />
                </div>

                {/* Subtitle tag at bottom of card */}
                <div className="mt-2 text-center pb-1">
                  <p className="text-xs font-bold text-white tracking-wide">Mostakim Hossain Shifat</p>
                  <p className="text-[10px] text-[#00DF82] font-semibold tracking-wider uppercase mt-0.5">
                    Wix, Squarespace & Frontend Pro
                  </p>
                </div>

              </div>

              {/* FLOATING LUXURY BADGE 1: Top Right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 sm:-right-6 z-20 px-3.5 py-1.5 rounded-2xl bg-[#0F1420]/95 border border-[#00DF82]/50 backdrop-blur-xl shadow-[0_10px_25px_rgba(0,0,0,0.7)] flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#00DF82] animate-ping" />
                <span className="text-[11px] font-bold text-white whitespace-nowrap">
                  ⚡ Wix Studio & Harmony
                </span>
              </motion.div>

              {/* FLOATING LUXURY BADGE 2: Bottom Left */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.3 }}
                className="absolute -bottom-4 -left-4 sm:-left-6 z-20 px-3.5 py-1.5 rounded-2xl bg-[#0F1420]/95 border border-[#00DF82]/50 backdrop-blur-xl shadow-[0_10px_25px_rgba(0,0,0,0.7)] flex items-center gap-2"
              >
                <Flame size={13} className="text-[#00DF82]" />
                <span className="text-[11px] font-bold text-white whitespace-nowrap">
                  45+ Real Projects
                </span>
              </motion.div>

            </motion.div>
          </motion.div>

          {/* ================= RIGHT COLUMN: SKILLS PROGRESS & METRICS ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            id="skills"
            className="lg:col-span-4 space-y-5"
          >
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#00DF82]">
                  MY EXPERTISE
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  My <span className="text-[#00DF82]">Skills</span>
                </h3>
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                    activeTab === "all"
                      ? "bg-[#00DF82] text-[#08090D] shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveTab("cms")}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                    activeTab === "cms"
                      ? "bg-[#00DF82] text-[#08090D] shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  CMS
                </button>
                <button
                  onClick={() => setActiveTab("frontend")}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                    activeTab === "frontend"
                      ? "bg-[#00DF82] text-[#08090D] shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Code
                </button>
              </div>
            </div>

            {/* Animated Skill Progress Bars */}
            <div className="space-y-4 pt-1">
              {filteredSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-1.5 group">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-gray-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00DF82] group-hover:scale-150 transition-transform" />
                      <span className="group-hover:text-white transition-colors">{skill.name}</span>
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/[0.05] text-[#00DF82] border border-[#00DF82]/20">
                        {skill.badge}
                      </span>
                      <span className="text-gray-400 text-xs font-bold">{skill.percent}%</span>
                    </div>
                  </div>

                  {/* Progress bar track */}
                  <div className="h-2 w-full bg-white/[0.07] rounded-full overflow-hidden p-0.5 relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#00DF82] via-emerald-400 to-[#00DF82] rounded-full shadow-[0_0_12px_rgba(0,223,130,0.7)] relative"
                    >
                      {/* Traveling Shimmer Light */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* Client-Focused Quality Guarantee Note */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#00DF82]/10 to-transparent border border-[#00DF82]/25 mt-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#00DF82] flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  <strong className="text-white">100% Client-Side Focused:</strong> Specialized in ultra-fast, responsive CMS setups and frontend styling without backend overhead.
                </p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}