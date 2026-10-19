import React from "react";
import { ArrowRight } from "lucide-react";

export default function BlogSection() {
  const blogs = [
    {
      title: "Why Tailwind CSS is My Favorite CSS Framework",
      date: "Aug 15, 2025",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
      readTime: "4 min read",
    },
    {
      title: "Getting Started with Next.js 15 & React Ecosystem",
      date: "Aug 10, 2025",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      readTime: "5 min read",
    },
    {
      title: "5 Tips to Improve Your Web Development Skills",
      date: "Aug 5, 2025",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      readTime: "3 min read",
    },
    {
      title: "The Future of Frontend & CMS Development in 2025",
      date: "Aug 1, 2025",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
      readTime: "6 min read",
    },
  ];

  return (
    <section id="blog" className="relative bg-[#08090D] text-white py-20 lg:py-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching reference image */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#00DF82] mb-1.5">
              MY BLOG
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Latest Blog & <span className="text-[#00DF82]">Tips</span>
            </h2>
            <p className="mt-2 text-gray-400 text-xs sm:text-sm max-w-xl">
              I share my thoughts, learning journey and useful tips about web development.
            </p>
          </div>

          <a
            href="#blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-[#00DF82] transition-colors"
          >
            <span>View All Posts</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* 4 Blog Cards Grid matching reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((post, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-[#0F121A] border border-white/[0.08] hover:border-[#00DF82]/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,223,130,0.12)] flex flex-col justify-between"
            >
              {/* Blog Image */}
              <div className="relative h-40 w-full overflow-hidden bg-black/50">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Blog Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#00DF82] transition-colors line-clamp-2 mb-3">
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
