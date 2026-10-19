import React from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight, Quote, Sparkles } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Daniel Briggs",
      role: "Client — VMC Pharmacy (@danielbobbriggs)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      quote:
        "Working with Shifat was an amazing experience. He is professional, skilled and delivered our pharmacy web platform on Wix right on time. Highly recommended!",
      stars: 5,
    },
    {
      name: "Rafsan / Appwashing",
      role: "Founder — All Purpose Power Washing",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      quote:
        "Great communication and clean UI. He understood our local service requirements perfectly and delivered a high-converting, responsive website with fast speed.",
      stars: 5,
    },
    {
      name: "Nisa Williams",
      role: "Director — EQ Professor (@nisawilliams1)",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      quote:
        "Very talented and dedicated developer. He transformed our Squarespace platform with clean typography, custom styling, and booking flows. Will definitely work with him again!",
      stars: 5,
    },
  ];

  return (
    <section className="relative bg-[#08090D] text-white py-24 lg:py-28 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#00DF82]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-[#00DF82] mb-1.5 flex items-center gap-1.5">
              <Sparkles size={13} />
              <span>TESTIMONIALS</span>
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              What Clients <span className="text-[#00DF82]">Say</span>
            </h2>
            <p className="mt-2 text-gray-400 text-xs sm:text-sm max-w-xl">
              Authentic feedback from real business owners across the US, UK, and worldwide.
            </p>
          </motion.div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-[#00DF82] transition-colors group"
          >
            <span>Work With Me</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 3 Luxury Animated Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group rounded-2xl p-7 bg-gradient-to-br from-[#0F121A] to-[#0A0D14] border border-white/[0.08] hover:border-[#00DF82]/50 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,223,130,0.12)] flex flex-col justify-between relative overflow-hidden"
            >
              {/* Quote Watermark Icon */}
              <Quote size={50} className="absolute -top-1 -right-1 text-white/[0.03] group-hover:text-[#00DF82]/10 transition-colors pointer-events-none" />

              <div>
                {/* Author Info with Avatar */}
                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#00DF82]/50 shadow-[0_0_12px_rgba(0,223,130,0.3)]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#00DF82] transition-colors">{item.name}</h4>
                    <p className="text-[11px] text-gray-400 font-medium">{item.role}</p>
                  </div>
                </div>

                {/* Stars in Vibrant Green */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className="text-[#00DF82] fill-[#00DF82] drop-shadow-[0_0_6px_rgba(0,223,130,0.6)]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] text-gray-500">
                <span className="text-[#00DF82] font-semibold">Verified Client Review</span>
                <span>5.0 ★ Rating</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
