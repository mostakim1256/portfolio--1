import React from "react";
import {
  Code,
  Smartphone,
  Layout,
  Globe,
  Brush,
  Settings,
} from "lucide-react"; // lucide-react থেকে আইকনগুলো ইমপোর্ট

export default function WhatIDo() {
  return (
    // 🔽 Section padding কমানো হয়েছে যাতে উপরে-নিচে gap কম থাকে
    <section className="bg-[#212428] text-white py-8 md:py-10 lg:py-12">

      {/* মূল কন্টেন্ট কন্টেইনার — Header এর সাথে align */}
      <div className="max-w-[84%] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== Title Section ===== */}
        <div className="text-left mb-10">
          {/* ছোট subtitle */}
          <p className="text-[#FF014F] font-semibold tracking-wider uppercase text-sm md:text-base">
            Features
          </p>

          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            What <span className="text-[#FF014F]">I Do</span>
          </h1>
        </div>

        {/* ===== Cards Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            {
              title: "Frontend Developer",
              description:
                "I build responsive and dynamic web applications using React, Tailwind, and modern JavaScript.",
              icon: <Code size={32} strokeWidth={2} />,
            },
            {
              title: "App Developer",
              description:
                "I create fast and user-friendly applications with clean UI and smooth functionality.",
              icon: <Smartphone size={32} strokeWidth={2} />,
            },
            {
              title: "UX/UI Developer",
              description:
                "Designing intuitive interfaces and better user experiences is one of my strengths.",
              icon: <Layout size={32} strokeWidth={2} />,
            },
            {
              title: "Squarespace Developer",
              description:
                "I design and customize professional Squarespace websites for clients.",
              icon: <Globe size={32} strokeWidth={2} />,
            },
            {
              title: "Wix Developer",
              description:
                "I build modern and responsive websites using Wix platform.",
              icon: <Brush size={32} strokeWidth={2} />,
            },
            {
              title: "Process Optimization",
              description:
                "I improve workflows and create efficient digital solutions.",
              icon: <Settings size={32} strokeWidth={2} />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                group relative bg-[#2a2d33] rounded-2xl p-6
                transition-all duration-500
                hover:scale-[1.03] hover:-translate-y-2
                hover:shadow-[0_20px_50px_-15px_rgba(255,1,79,0.45)]
              "
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF014F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon circle */}
              <div className="w-16 h-16 rounded-full border-4 border-[#FF014F]/70 mb-6 flex items-center justify-center text-[#FF014F]">
                {item.icon}
              </div>

              {/* Card title */}
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              {/* Card description */}
              <p className="text-gray-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
