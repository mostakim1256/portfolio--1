import React from "react";
import {
  Code,
  Layout,
  Globe,
  Zap,
  ShieldCheck,
  Smartphone,
  ArrowRight,
} from "lucide-react";

export default function WhatIDo() {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Modern, responsive and interactive UI using React, Next.js, Tailwind CSS and modern JavaScript.",
      icon: <Code size={20} className="text-[#00DF82]" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Clean, modern and user-friendly interfaces for better user experiences.",
      icon: <Layout size={20} className="text-[#00DF82]" />,
    },
    {
      title: "Web Application",
      description:
        "Custom web apps with scalable and efficient code.",
      icon: <Smartphone size={20} className="text-[#00DF82]" />,
    },
    {
      title: "CMS Development",
      description:
        "Wix, Squarespace and other CMS platforms for your business.",
      icon: <Globe size={20} className="text-[#00DF82]" />,
    },
    {
      title: "Website Optimization",
      description:
        "Improve speed, SEO and performance for better results.",
      icon: <Zap size={20} className="text-[#00DF82]" />,
    },
    {
      title: "Maintenance & Support",
      description:
        "Ongoing support and updates to keep your site running smoothly.",
      icon: <ShieldCheck size={20} className="text-[#00DF82]" />,
    },
  ];

  return (
    <section id="services" className="relative bg-[#08090D] text-white py-20 lg:py-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching reference image */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#00DF82] mb-1.5">
              WHAT I DO
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              My <span className="text-[#00DF82]">Services</span>
            </h2>
            <p className="mt-2 text-gray-400 text-xs sm:text-sm max-w-xl">
              I provide end-to-end web solutions to help businesses and individuals grow online.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-[#00DF82] transition-colors"
          >
            <span>View All Services</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* 6 Cards Grid (2 rows x 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl p-6 sm:p-7 bg-[#0F121A] border border-white/[0.08] hover:border-[#00DF82]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,223,130,0.12)] flex flex-col justify-between"
            >
              <div>
                {/* Small Glowing Icon Box */}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#00DF82]/10 border border-[#00DF82]/30 mb-5 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00DF82] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
