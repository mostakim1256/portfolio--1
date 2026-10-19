import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function BlogSection() {
  const blogs = [
    {
      title: "Mastering Wix Studio: Advanced Responsive Breakpoints",
      date: "Aug 15, 2025",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
      readTime: "4 min read",
      category: "Wix Studio",
    },
    {
      title: "Why Tailwind CSS is the Best Tool for Modern Frontend UI",
      date: "Aug 10, 2025",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
      readTime: "5 min read",
      category: "Tailwind CSS",
    },
    {
      title: "Squarespace 7.1 Fluid Engine: Custom CSS Tips & Tricks",
      date: "Aug 5, 2025",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      readTime: "3 min read",
      category: "Squarespace",
    },
    {
      title: "Top 5 Front-End Speed Optimization Techniques for 2025",
      date: "Aug 1, 2025",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      readTime: "6 min read",
      category: "Performance",
    },
  ];

  return (
    <section id="blog" className="relative bg-[#08090D] text-white py-24 lg:py-28 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#00DF82]/5 rounded-full blur-[150px] pointer-events-none" />

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
              <span>MY BLOG & INSIGHTS</span>
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Latest Blog & <span className="text-[#00DF82]">Tips</span>
            </h2>
            <p className="mt-2 text-gray-400 text-xs sm:text-sm max-w-xl">
              Practical guides and deep dives on Wix Studio, Squarespace, CSS styling, and frontend performance.
            </p>
          </motion.div>

          <a
            href="#blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-[#00DF82] transition-colors group"
          >
            <span>View All Posts</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 4 Luxury Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl bg-[#0F121A] border border-white/[0.08] hover:border-[#00DF82]/60 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,223,130,0.15)] flex flex-col justify-between"
            >
              {/* Blog Image */}
              <div className="relative h-44 w-full overflow-hidden bg-black/50">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[#00DF82] border border-[#00DF82]/40">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#00DF82] transition-colors line-clamp-2 mb-3 leading-snug">
                    {post.title}
                  </h3>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
                  <span className="text-gray-400">{post.date}</span>
                  <span className="text-[#00DF82] font-semibold flex items-center gap-1 group-hover:underline cursor-pointer">
                    <span>Read More</span>
                    <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
