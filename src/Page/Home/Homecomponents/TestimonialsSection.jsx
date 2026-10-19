import React from "react";
import { Star, ArrowRight } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Daniel Briggs",
      role: "Client — VMC Pharmacy (@danielbobbriggs)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      quote:
        "Working with Shifat was an amazing experience. He is professional, skilled and delivered our pharmacy web platform right on time. Highly recommended!",
      stars: 5,
    },
    {
      name: "Rafsan / Appwashing",
      role: "Founder — All Purpose Power Washing",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      quote:
        "Great communication and clean code. He understood our local service requirements perfectly and delivered a modern and responsive website.",
      stars: 5,
    },
    {
      name: "Nisa Williams",
      role: "Director — EQ Professor (@nisawilliams1)",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      quote:
        "Very talented and dedicated developer. He transformed our Squarespace platform with clean typography and booking. Will definitely work with him again!",
      stars: 5,
    },
  ];

  return (
    <section className="relative bg-[#08090D] text-white py-20 lg:py-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching reference image */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#00DF82] mb-1.5">
              TESTIMONIALS
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              What Clients <span className="text-[#00DF82]">Say</span>
            </h2>
            <p className="mt-2 text-gray-400 text-xs sm:text-sm max-w-xl">
              Real feedback from real clients. Their words keep me motivated.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-[#00DF82] transition-colors"
          >
            <span>View All Testimonials</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 sm:p-7 bg-[#0F121A] border border-white/[0.08] hover:border-[#00DF82]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Author Info with Avatar */}
                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#00DF82]/40"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.name}</h4>
                    <p className="text-[11px] text-gray-400">{item.role}</p>
                  </div>
                </div>

                {/* Stars in Green */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-[#00DF82] fill-[#00DF82]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
