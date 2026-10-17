import React from "react";
import {
  Code,
  Smartphone,
  Layout,
  Globe,
  Brush,
  Zap,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function WhatIDo() {
  const services = [
    {
      title: "Wix Website Development",
      description:
        "Building high-converting, modern, and SEO-friendly sites using Wix Studio & Editor. Custom Velo coding, eCommerce store setup, and redesigns.",
      icon: <Brush size={28} className="text-[#FF014F]" />,
      badge: "45+ Delivered",
    },
    {
      title: "Squarespace Customization",
      description:
        "Designing bespoke, clean, and elegant Squarespace websites utilizing Fluid Engine, custom CSS injection, and responsive typography.",
      icon: <Globe size={28} className="text-[#FF014F]" />,
      badge: "CMS Expert",
    },
    {
      title: "MERN Stack Frontend",
      description:
        "Building dynamic, scalable single-page web applications using React.js, Tailwind CSS, modern state management, and REST APIs.",
      icon: <Code size={28} className="text-[#FF014F]" />,
      badge: "React & Tailwind",
    },
    {
      title: "Figma to Live Website",
      description:
        "Converting Figma, Adobe XD, or Sketch mockups into 100% pixel-perfect live websites on Wix, Squarespace, or custom React code.",
      icon: <Layout size={28} className="text-[#FF014F]" />,
      badge: "Design to Code",
    },
    {
      title: "Mobile-First Responsive Design",
      description:
        "Ensuring your web presence looks flawless and operates smoothly across all device sizes—from mobile phones to ultra-wide displays.",
      icon: <Smartphone size={28} className="text-[#FF014F]" />,
      badge: "Cross-Device",
    },
    {
      title: "Speed, SEO & Optimization",
      description:
        "Boosting Google Lighthouse speed scores, improving core web vitals, on-page SEO meta tags, and structured clean code.",
      icon: <Zap size={28} className="text-[#FF014F]" />,
      badge: "Speed & Ranking",
    },
  ];

  return (
    <section id="services" className="relative bg-[#0e1118] text-white py-20 lg:py-28 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#FF014F]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF014F]/10 border border-[#FF014F]/30 text-[#FF014F] text-sm font-semibold tracking-wide uppercase mb-3">
            <Sparkles size={14} />
            <span>My Core Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            What <span className="text-[#FF014F]">I Do</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            From custom React web applications to high-impact Wix & Squarespace platforms—delivering results that elevate businesses.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF014F] to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-7 bg-[#131620] border border-white/[0.08] hover:border-[#FF014F]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(255,1,79,0.25)] flex flex-col justify-between"
            >
              {/* Subtle top card glow */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF014F]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/[0.03] border border-white/[0.08] group-hover:border-[#FF014F]/60 group-hover:bg-[#FF014F]/10 group-hover:shadow-[0_0_20px_rgba(255,1,79,0.25)] transition-all duration-300">
                    <span className="text-[#FF014F] group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/[0.04] text-gray-400 border border-white/[0.06] group-hover:text-white group-hover:border-[#FF014F]/30 transition-colors">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF014F] transition-colors duration-300 flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#FF014F]" />
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                <span>Tailored Solutions</span>
                <span className="text-[#FF014F] font-semibold">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
