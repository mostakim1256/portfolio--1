import React from "react";

export default function Heronice() {
  return (
    <section className="bg-[#212428] text-white py-24 px-6 md:px-10">
      {/* Title */}
      <div className="text-center mb-16">
        <p className="text-[#FF014F] font-semibold tracking-wider uppercase">
          Features
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mt-3">
          What <span className="text-[#FF014F]">I Do</span>
        </h1>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 max-w-[1400px] mx-auto">




        {/* Card 1 */}
        <div
          className={`
            group relative bg-[#2a2d33] rounded-2xl p-8 overflow-hidden
            transition-all duration-500 ease-out
            hover:scale-[1.04] hover:-translate-y-2
            hover:shadow-[0_20px_50px_-15px_rgba(255,1,79,0.45)]
          `}
        >
          {/* Gradient overlay on hover */}
          <div
            className={`
              absolute inset-0 bg-gradient-to-br from-[#FF014F] to-white 
              opacity-0 group-hover:opacity-0 transition-opacity duration-500
            `}
          />

          <div className="w-20 h-20 rounded-full border-4 border-[#FF014F]/70 mb-8 
                        group-hover:border-white/90 transition-colors duration-500" />

          <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors duration-500">
            Front end devoloper
          </h3>

          <p className="text-gray-400 group-hover:text-gray-100 transition-colors duration-500 leading-relaxed">
           I am a passionate Frontend Developer skilled in building responsive and dynamic web applications using the MERN stack (MongoDB, Express.js, React, Node.js). I focus on creating intuitive user interfaces, optimizing performance, and integrating APIs to deliver seamless web experiences.
          </p>
        </div>








        {/* Card 2 */}
        <div
          className={`
            group relative bg-[#2a2d33] rounded-2xl p-8 overflow-hidden
            transition-all duration-500 ease-out
            hover:scale-[1.04] hover:-translate-y-2
            hover:shadow-[0_20px_50px_-15px_rgba(255,1,79,0.45)]
          `}
        >
          <div
            className={`
              absolute inset-0 bg-gradient-to-br from-[#FF014F] to-white 
              opacity-0 group-hover:opacity-0 transition-opacity duration-500
            `}
          />

          <div className="w-20 h-20 rounded-full border-4 border-[#FF014F]/70 mb-8 
                        group-hover:border-white/90 transition-colors duration-500" />

          <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors duration-500">
            App devoloper
          </h3>

          <p className="text-gray-400 group-hover:text-gray-100 transition-colors duration-500 leading-relaxed">
          I am a skilled App Developer specializing in building high-performance mobile and web applications. I focus on creating user-friendly interfaces, integrating APIs, and ensuring seamless functionality across devices. My goal is to deliver applications that provide excellent user experiences and meet client requirements efficiently.
          </p>
        </div>






        {/* Card 3 */}
        <div
          className={`
            group relative bg-[#2a2d33] rounded-2xl p-8 overflow-hidden
            transition-all duration-500 ease-out
            hover:scale-[1.04] hover:-translate-y-2
            hover:shadow-[0_20px_50px_-15px_rgba(255,1,79,0.45)]
          `}
        >
          <div
            className={`
              absolute inset-0 bg-gradient-to-br from-[#FF014F] to-white 
              opacity-0 group-hover:opacity-0 transition-opacity duration-00
            `}
          />

          <div className="w-20 h-20 rounded-full border-4 border-[#FF014F]/70 mb-8 
                        group-hover:border-white/90 transition-colors duration-500" />

          <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors duration-500">
           UX/UI devoloper
          </h3>

          <p className="text-gray-400 group-hover:text-gray-100 transition-colors duration-500 leading-relaxed">
           I am a dedicated UX/UI Developer passionate about designing intuitive and visually appealing user interfaces. I specialize in creating seamless user experiences, responsive layouts, and interactive designs that enhance usability and engagement. My focus is on combining creativity with functionality to deliver high-quality digital products.
          </p>
        </div>






        {/* Card 4 */}
        <div
          className={`
            group relative bg-[#2a2d33] rounded-2xl p-8 overflow-hidden
            transition-all duration-500 ease-out
            hover:scale-[1.04] hover:-translate-y-2
            hover:shadow-[0_20px_50px_-15px_rgba(255,1,79,0.45)]
          `}
        >
          {/* Gradient overlay on hover */}
          <div
            className={`
              absolute inset-0 bg-gradient-to-br from-[#FF014F] to-white 
              opacity-0 group-hover:opacity-0 transition-opacity duration-500
            `}
          />

          <div className="w-20 h-20 rounded-full border-4 border-[#FF014F]/70 mb-8 
                        group-hover:border-white/90 transition-colors duration-500" />

          <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors duration-500">
            squarespace devoloper
          </h3>

          <p className="text-gray-400 group-hover:text-gray-100 transition-colors duration-500 leading-relaxed">
           I am a skilled Squarespace Developer with experience in designing, customizing, and optimizing Squarespace websites. I specialize in creating visually appealing, responsive, and user-friendly websites tailored to meet client needs. My focus is on combining design and functionality to deliver high-quality digital experiences.
          </p>
        </div>








        {/* Card 5 */}
        <div
          className={`
            group relative bg-[#2a2d33] rounded-2xl p-8 overflow-hidden
            transition-all duration-500 ease-out
            hover:scale-[1.04] hover:-translate-y-2
            hover:shadow-[0_20px_50px_-15px_rgba(255,1,79,0.45)]
          `}
        >
          <div
            className={`
              absolute inset-0 bg-gradient-to-br from-[#FF014F] to-white 
              opacity-0 group-hover:opacity-0 transition-opacity duration-500
            `}
          />

          <div className="w-20 h-20 rounded-full border-4 border-[#FF014F]/70 mb-8 
                        group-hover:border-white/90 transition-colors duration-500" />

          <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors duration-500">
             Wix devoloper
          </h3>

          <p className="text-gray-400 group-hover:text-gray-100 transition-colors duration-500 leading-relaxed">
            I am a skilled Wix Developer specializing in designing, customizing, and optimizing Wix websites. I create visually appealing, responsive, and user-friendly websites that meet client requirements and enhance online presence. My focus is on combining creative design with functionality to deliver high-quality web solutions.
          </p>
        </div>






        {/* Card 6 */}
        <div
          className={`
            group relative bg-[#2a2d33] rounded-2xl p-8 overflow-hidden
            transition-all duration-500 ease-out
            hover:scale-[1.04] hover:-translate-y-2
            hover:shadow-[0_20px_50px_-15px_rgba(255,1,79,0.45)]
          `}
        >
          <div
            className={`
              absolute inset-0 bg-gradient-to-br from-[#FF014F] to-white 
              opacity-0 group-hover:opacity-0 transition-opacity duration-00
            `}
          />

          <div className="w-20 h-20 rounded-full border-4 border-[#FF014F]/70 mb-8 
                        group-hover:border-white/90 transition-colors duration-500" />

          <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors duration-500">
            Process Optimization
          </h3>

          <p className="text-gray-400 group-hover:text-gray-100 transition-colors duration-500 leading-relaxed">
           I am a dedicated Process Optimization Specialist focused on improving business workflows, increasing efficiency, and reducing operational costs. I analyze existing processes, identify bottlenecks, and implement strategic solutions to streamline operations and enhance productivity. My goal is to deliver measurable improvements that drive business success.
          </p>
        </div>




      </div>
      <div>
        <button className="btn-active justify-center"> Larn More</button>
      </div>
    </section>
  );
}