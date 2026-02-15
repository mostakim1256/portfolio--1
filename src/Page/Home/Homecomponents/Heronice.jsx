import React from "react";

export default function WhatIDo() {   // নামটা আরও বোঝা যায় এমন করলাম (Heronice এর বদলে)
  return (
    <section className="bg-[#212428] text-white py-12 md:py-16 lg:py-20">
      {/* মূল কন্টেন্ট কন্টেইনার — Header এর সাথে align */}
      <div className="max-w-[84%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#FF014F] font-semibold tracking-wider uppercase text-sm md:text-base">
            Features
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4">
            What <span className="text-[#FF014F]">I Do</span>
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {/* Card Template – সব কার্ড একই স্টাইলে */}
          {[
            {
              title: "Frontend Developer",
              description:
                "I am a passionate Frontend Developer skilled in building responsive and dynamic web applications using the MERN stack (MongoDB, Express.js, React, Node.js). I focus on creating intuitive user interfaces, optimizing performance, and integrating APIs to deliver seamless web experiences.",
            },
            {
              title: "App Developer",
              description:
                "I am a skilled App Developer specializing in building high-performance mobile and web applications. I focus on creating user-friendly interfaces, integrating APIs, and ensuring seamless functionality across devices.",
            },
            {
              title: "UX/UI Developer",
              description:
                "I am a dedicated UX/UI Developer passionate about designing intuitive and visually appealing user interfaces. I specialize in creating seamless user experiences, responsive layouts, and interactive designs.",
            },
            {
              title: "Squarespace Developer",
              description:
                "I am a skilled Squarespace Developer with experience in designing, customizing, and optimizing Squarespace websites. I create visually appealing, responsive, and user-friendly websites tailored to client needs.",
            },
            {
              title: "Wix Developer",
              description:
                "I am a skilled Wix Developer specializing in designing, customizing, and optimizing Wix websites. I create visually appealing, responsive websites that enhance online presence.",
            },
            {
              title: "Process Optimization",
              description:
                "I am a dedicated Process Optimization Specialist focused on improving business workflows, increasing efficiency, and reducing operational costs. I analyze processes and implement strategic solutions.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`
                group relative bg-[#2a2d33] rounded-2xl p-6 md:p-8 
                transition-all duration-500 ease-out
                hover:scale-[1.03] hover:-translate-y-2
                hover:shadow-[0_20px_50px_-15px_rgba(255,1,79,0.45)]
                border border-transparent hover:border-[#FF014F]/30
              `}
            >
              {/* Hover gradient overlay – এখন সঠিকভাবে দেখা যাবে */}
              <div
                className={`
                  absolute inset-0 bg-gradient-to-br from-[#FF014F]/10 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500
                `}
              />

              <div
                className={`
                  w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-[#FF014F]/70 mb-6 md:mb-8
                  group-hover:border-white/80 transition-colors duration-500
                  flex items-center justify-center
                `}
              >
                {/* আইকন যোগ করতে চাইলে এখানে রাখতে পারো */}
              </div>

              <h3
                className={`
                  text-xl md:text-2xl font-semibold mb-4 
                  group-hover:text-white transition-colors duration-500
                `}
              >
                {item.title}
              </h3>

              <p
                className={`
                  text-gray-400 group-hover:text-gray-200 transition-colors duration-500 
                  leading-relaxed text-sm md:text-base
                `}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}