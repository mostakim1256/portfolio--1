import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Layout,
  Globe,
  Zap,
  ShieldCheck,
  Smartphone,
  ArrowRight,
  Sparkles,
  Layers,
  Palette,
  ExternalLink,
} from "lucide-react";

export default function WhatIDo() {
  const services = [
    {
      title: "Wix Studio & Editor Mastery",
      badge: "Top Speciality",
      description:
        "Full custom design and rebuilds on Wix Studio, Wix Editor and Wix Harmony. Responsive breakpoints, custom interactions, and animations.",
      icon: <Globe size={22} className="text-[#00DF82]" />,
    },
    {
      title: "Squarespace 7.1 Web Design",
      badge: "Expert",
      description:
        "Bespoke Squarespace websites built with Fluid Engine, custom CSS/JS styling, e-commerce integrations, booking funnels, and clean aesthetics.",
      icon: <Layout size={22} className="text-[#00DF82]" />,
    },
    {
      title: "Frontend Development",
      badge: "Core Skill",
      description:
        "Pixel-perfect, accessible, and responsive user interfaces crafted with HTML5, modern CSS3, JavaScript (ES6+), and Tailwind CSS.",
      icon: <Code size={22} className="text-[#00DF82]" />,
    },
    {
      title: "React.js & Next.js UI",
      badge: "Modern Frontend",
      description:
        "Interactive frontend components and single-page web experiences using React.js, Next.js, and modern component libraries like DaisyUI.",
      icon: <Smartphone size={22} className="text-[#00DF82]" />,
    },
    {
      title: "Website Speed & SEO Audit",
      badge: "Performance",
      description:
        "Comprehensive optimization for Core Web Vitals, image compression, structured schema markup, and on-page technical SEO for top Google rankings.",
      icon: <Zap size={22} className="text-[#00DF82]" />,
    },
    {
      title: "CMS Maintenance & Support",
      badge: "Care & Updates",
      description:
        "Reliable long-term maintenance, fast turnaround bug fixes, content updates, and post-launch consulting across all your web projects.",
      icon: <ShieldCheck size={22} className="text-[#00DF82]" />,
    },
  ];

  return (
    <section id="services" className="relative bg-[#08090D] text-white py-24 lg:py-28 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#00DF82]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-[#00DF82] mb-2 flex items-center gap-1.5">
              <Sparkles size={13} />
              <span>WHAT I DO BEST</span>
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              My <span className="text-[#00DF82]">Services</span>
            </h2>
            <p className="mt-2 text-gray-400 text-xs sm:text-sm max-w-xl">
              Specialized in CMS mastery (Wix & Squarespace) and modern frontend development with 45+ completed projects.
            </p>
          </motion.div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-[#00DF82] transition-colors group"
          >
            <span>Discuss a Project</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 6 Luxury Animated Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-2xl p-7 bg-gradient-to-br from-[#0F121A] to-[#0A0D14] border border-white/[0.08] hover:border-[#00DF82]/60 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,223,130,0.15)] flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top hover line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00DF82] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header row inside card */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#00DF82]/10 border border-[#00DF82]/30 group-hover:bg-[#00DF82]/20 group-hover:border-[#00DF82]/70 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(0,223,130,0.2)] group-hover:shadow-[0_0_20px_rgba(0,223,130,0.4)]">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/[0.04] text-[#00DF82] border border-[#00DF82]/20">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#00DF82] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-6 mt-4 border-t border-white/[0.05] flex items-center justify-between text-xs text-gray-500 group-hover:text-[#00DF82] transition-colors">
                <span className="text-[11px] font-semibold">Client-Ready Solution</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
