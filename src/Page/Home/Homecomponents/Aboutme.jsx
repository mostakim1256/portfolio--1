import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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
  Layers,
  Award,
  Zap,
  Check,
} from "lucide-react";
import bg from "../../../assets/Image/ChatGPT_Image_Feb_9__2026__12_21_30_PM-removebg-preview.png";
import cv from "../../../assets/Image/shifat cv.pdf";

export default function AboutMe() {
  const sectionRef = useRef(null);

  // Mouse move tracking for interactive cursor glow
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  // Scroll parallax driven by Framer Motion
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring for fluid scroll parallax
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Background Parallax Transforms
  const bgImageY = useTransform(smoothProgress, [0, 1], [-70, 70]);
  const bgImageScale = useTransform(smoothProgress, [0, 1], [0.96, 1.08]);
  const watermarkY = useTransform(smoothProgress, [0, 1], [50, -50]);

  // Skill clusters representing authentic user expertise
  const skillCategories = [
    {
      title: "CMS Platforms Mastery",
      badge: "Primary Specialty",
      level: 98,
      desc: "Pixel-perfect visual architectures, custom interactions, and high-converting layouts.",
      skills: [
        "Wix Studio",
        "Wix Editor",
        "Wix Harmony",
        "Squarespace 7.1",
        "Fluid Engine",
        "Custom CSS/JS",
      ],
      icon: Globe,
      color: "#00DF82",
      enterFrom: "right", // Enters from Right
    },
    {
      title: "Core Frontend & Styling",
      badge: "Expert Level",
      level: 95,
      desc: "Clean semantic markup, cutting-edge responsive layouts, and modern CSS utilities.",
      skills: [
        "HTML5",
        "Modern CSS3",
        "Tailwind CSS",
        "DaisyUI",
        "JavaScript (ES6+)",
        "DOM Scripting",
      ],
      icon: Code2,
      color: "#00DF82",
      enterFrom: "left", // Enters from Left
    },
    {
      title: "Frontend Frameworks & UI",
      badge: "Proficient",
      level: 78,
      desc: "Interactive reactive user interfaces and single-page frontend web solutions.",
      skills: [
        "React.js (Frontend)",
        "Next.js (Frontend)",
        "Figma to Pixel-Code",
        "Responsive Breakpoints",
      ],
      icon: Layers,
      color: "#38bdf8",
      enterFrom: "right", // Enters from Right
    },
    {
      title: "Optimization & Delivery",
      badge: "High Performance",
      level: 92,
      desc: "Fast load times, pristine mobile UX, and structured technical on-page SEO.",
      skills: [
        "Core Web Vitals",
        "Speed Optimization",
        "Technical SEO",
        "Cross-Browser Testing",
      ],
      icon: Zap,
      color: "#a78bfa",
      enterFrom: "left", // Enters from Left
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative bg-[#08090D] text-white py-28 lg:py-36 overflow-hidden select-none"
    >
      {/* ================= BACKGROUND LAYER ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* Soft Ambient Neon Glow Behind Image on the LEFT */}
        <div className="absolute top-1/4 left-5 lg:left-12 w-[520px] h-[520px] bg-[#00DF82]/12 rounded-full blur-[170px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-emerald-600/5 rounded-full blur-[150px] pointer-events-none" />

        {/* Huge Scrolling Watermark Typography */}
        <motion.div
          style={{ y: watermarkY }}
          className="absolute inset-x-0 top-1/4 flex items-center justify-center opacity-[0.03] select-none"
        >
          <span className="text-[22vw] font-black tracking-tighter uppercase whitespace-nowrap text-white leading-none">
            ABOUT ME
          </span>
        </motion.div>

        {/* The Developer's Portrait Image on the LEFT with Scroll Parallax & Opacity */}
        <motion.div
          style={{
            y: bgImageY,
            scale: bgImageScale,
          }}
          className="absolute left-[-6%] sm:left-[0%] lg:left-[3%] top-[8%] lg:top-[4%] w-[85%] sm:w-[60%] lg:w-[46%] max-w-[590px] pointer-events-none z-0"
        >
          <img
            src={bg}
            alt="Mostakim Hossain Shifat - Background Parallax"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.3) 70%, transparent 95%), linear-gradient(to right, rgba(0,0,0,0.85) 50%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.3) 70%, transparent 95%), linear-gradient(to right, rgba(0,0,0,0.85) 50%, transparent 100%)",
            }}
            className="w-full h-auto object-contain opacity-25 lg:opacity-30 filter contrast-110 drop-shadow-[0_0_60px_rgba(0,223,130,0.25)] transition-opacity duration-700"
          />
        </motion.div>

        {/* Interactive Cursor Spotlight Glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-60"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 223, 130, 0.05), transparent 80%)`,
          }}
        />

        {/* Subtle grid mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(#00DF82_1px,transparent_1px)] [background-size:44px_44px] opacity-[0.025]" />
      </div>

      {/* ================= FOREGROUND CONTENT LAYER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Badge & Impact Headline */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 60, damping: 16 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#00DF82]/10 border border-[#00DF82]/30 text-[#00DF82] text-xs font-bold tracking-widest uppercase mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#00DF82] animate-ping" />
            <span>ABOUT ME &bull; THE DEVELOPER</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]"
          >
            Crafting Pixel-Perfect Websites with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DF82] via-emerald-400 to-teal-200">
              Precision & Speed
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.15 }}
            className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            Specialized in converting client ideas into ultra-fast, high-converting digital storefronts and portfolios using Wix Studio, Squarespace 7.1, and modern frontend code.
          </motion.p>
        </div>

        {/* 2-Column Asymmetric Layout with Alternating Mouse Wheel Slide-In Animations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Story Card: Slides in from the LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ type: "spring", stiffness: 55, damping: 16 }}
              className="rounded-3xl p-5 sm:p-9 bg-gradient-to-br from-[#0F131D]/90 to-[#0A0D15]/90 border border-white/[0.08] backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-4 sm:space-y-5 hover:border-[#00DF82]/40 transition-all duration-300"
            >
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#00DF82]/10 border border-[#00DF82]/30 flex items-center justify-center text-[#00DF82]">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">Mostakim Hossain Shifat</h3>
                  <p className="text-[11px] sm:text-xs text-[#00DF82] font-semibold">CMS Specialist & Frontend Web Developer</p>
                </div>
              </div>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                I hold a <strong className="text-white">Diploma in Engineering</strong> from <strong className="text-[#00DF82]">Kurigram Polytechnic Institute</strong>. With over 1 year of hands-on professional freelancing, I have delivered <strong className="text-white">45+ live client websites</strong> across the US, UK, and worldwide.
              </p>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                My approach is 100% focused on <strong className="text-gray-200">client-side visual excellence</strong>: whether mastering <strong className="text-white">Wix Studio, Wix Editor, and Wix Harmony</strong> or tailoring luxury <strong className="text-white">Squarespace 7.1</strong> Fluid Engine sites with custom CSS/JS. I also build lightning-fast web interfaces using <strong className="text-white">React.js, Next.js, and Tailwind CSS</strong>.
              </p>

              {/* Verified Checklist */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {[
                  "100% Client-Side Dedicated",
                  "45+ Delivered Websites",
                  "Zero Backend Overhead",
                  "Wix Studio Certified Standard",
                  "Kurigram Polytechnic Alum",
                  "SEO & Core Web Vitals Ready",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                    <span className="w-4 h-4 rounded-full bg-[#00DF82]/15 border border-[#00DF82]/40 flex items-center justify-center text-[#00DF82] flex-shrink-0">
                      <Check size={10} />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 border-t border-white/[0.08]">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href={cv}
                  download="Mostakim_Hossain_Shifat_CV.pdf"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full font-bold text-xs bg-[#00DF82] hover:bg-[#00c975] text-[#08090D] shadow-[0_0_25px_rgba(0,223,130,0.4)] transition-all duration-300"
                >
                  <span>Download CV</span>
                  <Download size={14} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs bg-white/[0.04] border border-white/[0.12] text-gray-200 hover:text-[#00DF82] hover:border-[#00DF82]/60 transition-all duration-300"
                >
                  <span>Let's Discuss a Project</span>
                  <ArrowRight size={14} />
                </motion.a>
              </div>

            </motion.div>

            {/* 4 Quick Executive Metrics with Alternating Left and Right Entrances */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Metric 1: Slides in from the LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 55, damping: 16 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-5 rounded-2xl bg-[#0F121A]/80 border border-white/[0.08] hover:border-[#00DF82]/50 transition-all duration-300 backdrop-blur-md"
              >
                <div className="w-9 h-9 rounded-xl bg-[#00DF82]/10 border border-[#00DF82]/30 flex items-center justify-center text-[#00DF82] mb-3">
                  <Briefcase size={18} />
                </div>
                <h4 className="text-2xl font-extrabold text-white">45+</h4>
                <p className="text-xs text-gray-400 mt-0.5">Projects Delivered</p>
                <span className="text-[10px] text-[#00DF82] font-semibold mt-2 inline-block">Wix & Squarespace</span>
              </motion.div>

              {/* Metric 2: Slides in from the RIGHT */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 55, damping: 16, delay: 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-5 rounded-2xl bg-[#0F121A]/80 border border-white/[0.08] hover:border-[#00DF82]/50 transition-all duration-300 backdrop-blur-md"
              >
                <div className="w-9 h-9 rounded-xl bg-[#00DF82]/10 border border-[#00DF82]/30 flex items-center justify-center text-[#00DF82] mb-3">
                  <GraduationCap size={18} />
                </div>
                <h4 className="text-sm font-extrabold text-white leading-tight">Diploma in Engg</h4>
                <p className="text-xs text-gray-400 mt-1">Kurigram Polytechnic</p>
                <span className="text-[10px] text-[#00DF82] font-semibold mt-2 inline-block">Completed Degree</span>
              </motion.div>

              {/* Metric 3: Slides in from the LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 55, damping: 16, delay: 0.12 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-5 rounded-2xl bg-[#0F121A]/80 border border-white/[0.08] hover:border-[#00DF82]/50 transition-all duration-300 backdrop-blur-md"
              >
                <div className="w-9 h-9 rounded-xl bg-[#00DF82]/10 border border-[#00DF82]/30 flex items-center justify-center text-[#00DF82] mb-3">
                  <MapPin size={18} />
                </div>
                <h4 className="text-sm font-extrabold text-white">Bangladesh</h4>
                <p className="text-xs text-gray-400 mt-1">Kurigram / Dhaka</p>
                <span className="text-[10px] text-[#00DF82] font-semibold mt-2 inline-block">Global Remote</span>
              </motion.div>

              {/* Metric 4: Slides in from the RIGHT */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 55, damping: 16, delay: 0.16 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-5 rounded-2xl bg-[#0F121A]/80 border border-white/[0.08] hover:border-[#00DF82]/50 transition-all duration-300 backdrop-blur-md"
              >
                <div className="w-9 h-9 rounded-xl bg-[#00DF82]/10 border border-[#00DF82]/30 flex items-center justify-center text-[#00DF82] mb-3">
                  <Award size={18} />
                </div>
                <h4 className="text-2xl font-extrabold text-white">100%</h4>
                <p className="text-xs text-gray-400 mt-0.5">Client Satisfaction</p>
                <span className="text-[10px] text-[#00DF82] font-semibold mt-2 inline-block">5-Star Feedback</span>
              </motion.div>

            </div>

          </div>

          {/* ================= RIGHT COLUMN: ALTERNATING SLIDE-IN SKILL CARDS ================= */}
          <div className="lg:col-span-6 space-y-5">
            
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#00DF82]">
                  TECHNICAL CAPABILITIES
                </p>
                <h3 className="text-2xl font-extrabold text-white mt-1">
                  Skills & Expertise <span className="text-[#00DF82]">Matrix</span>
                </h3>
              </div>
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/[0.04] text-gray-300 border border-white/[0.08]">
                Client-Side Stack
              </span>
            </div>

            {/* Alternating Capability Cards: Left vs Right on Wheel Scroll */}
            <div className="space-y-4">
              {skillCategories.map((cat, index) => {
                const IconComponent = cat.icon;
                const isRight = cat.enterFrom === "right";
                const initialX = isRight ? 130 : -130;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: initialX }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{
                      type: "spring",
                      stiffness: 55,
                      damping: 16,
                      delay: index * 0.08,
                    }}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="rounded-2xl p-6 bg-gradient-to-br from-[#0F121A]/95 to-[#090C14]/95 border border-white/[0.08] hover:border-[#00DF82]/60 transition-all duration-300 backdrop-blur-xl shadow-lg group relative overflow-hidden"
                  >
                    {/* Top ambient hover line */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00DF82] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#00DF82]/10 border border-[#00DF82]/30 flex items-center justify-center text-[#00DF82] group-hover:scale-110 transition-transform">
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white group-hover:text-[#00DF82] transition-colors">
                            {cat.title}
                          </h4>
                          <p className="text-[11px] text-gray-400 mt-0.5">{cat.desc}</p>
                        </div>
                      </div>

                      <div className="text-right flex-shrink-0">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#00DF82]/10 text-[#00DF82] border border-[#00DF82]/30">
                          {cat.badge}
                        </span>
                        <p className="text-xs font-extrabold text-white mt-1">{cat.level}%</p>
                      </div>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden my-3 relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${cat.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[#00DF82] to-emerald-400 rounded-full shadow-[0_0_10px_rgba(0,223,130,0.6)]"
                      />
                    </div>

                    {/* Skill Tags Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cat.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-white/[0.03] text-gray-300 border border-white/[0.08] hover:border-[#00DF82]/40 hover:text-white transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quality Commitment Footer Box: Slides in from the RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 55, damping: 16 }}
              className="p-4 rounded-2xl bg-gradient-to-r from-[#00DF82]/10 via-emerald-600/5 to-transparent border border-[#00DF82]/30 flex items-center gap-3"
            >
              <CheckCircle2 size={18} className="text-[#00DF82] flex-shrink-0" />
              <p className="text-xs text-gray-300 leading-snug">
                <strong className="text-white">Direct Client Promise:</strong> Fast turnaround, clean code, responsive across all screen sizes, and ongoing support for every website built.
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}