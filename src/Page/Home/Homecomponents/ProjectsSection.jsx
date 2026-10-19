import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, UserCheck, Layers } from "lucide-react";
import defaultProjectImg from "../../../assets/Image/portfolio.png";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects (45+)" },
    { id: "wix", label: "Wix Websites" },
    { id: "squarespace", label: "Squarespace" },
    { id: "react", label: "React & Code" },
  ];

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      client: "Personal Project",
      category: "react",
      platform: "React 19",
      description:
        "Modern developer portfolio built with React 19, Tailwind CSS, live particle constellation, and dark green cyberpunk aesthetics.",
      image: defaultProjectImg,
      tags: ["React", "Tailwind CSS", "Framer"],
      liveUrl: "https://shifatportfolio.vercel.app/",
      githubUrl: "https://github.com/mostakim1256/portfolio--1",
    },
    {
      id: 2,
      title: "VMC Pharmacy Platform",
      client: "danielbobbriggs",
      category: "wix",
      platform: "Wix",
      description:
        "Comprehensive healthcare and pharmacy website on Wix. Clean patient-first interface, prescription service sections, and mobile layout.",
      image: "https://images.unsplash.com/photo-1586015555751-63c2c54784a3?auto=format&fit=crop&w=900&q=80",
      tags: ["Wix", "Tailwind CSS", "DaisyUI"],
      liveUrl: "https://www.vmcpharmacy.com/",
      githubUrl: "https://www.vmcpharmacy.com/",
    },
    {
      id: 3,
      title: "E-Commerce & Power Washing",
      client: "appwashing",
      category: "wix",
      platform: "Wix",
      description:
        "Commercial and residential pressure washing business website with estimate inquiry forms, gallery showcase, and local SEO.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
      tags: ["Wix", "Tailwind CSS", "Stripe"],
      liveUrl: "https://www.allpurposepowerwashing.com/",
      githubUrl: "https://www.allpurposepowerwashing.com/",
    },
    {
      id: 4,
      title: "Business & Education Platform",
      client: "nisawilliams1",
      category: "squarespace",
      platform: "Squarespace",
      description:
        "Executive leadership and educational consulting platform on Squarespace. Clean typography, curriculum layout, and booking.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80",
      tags: ["Wix", "Squarespace", "JavaScript"],
      liveUrl: "https://eqprofessor.com/home",
      githubUrl: "https://eqprofessor.com/home",
    },
    {
      id: 5,
      title: "Project 40 Fitness & Nutrition",
      client: "steve_nutripath",
      category: "wix",
      platform: "Wix",
      description:
        "Fitness coaching and nutrition web platform with member plans, training schedule, and energetic responsive layout.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
      tags: ["Wix", "Fitness", "Nutrition"],
      liveUrl: "https://www.project40fitness.com/",
      githubUrl: "https://www.project40fitness.com/",
    },
    {
      id: 6,
      title: "White Oak Strong Community",
      client: "luneandline",
      category: "squarespace",
      platform: "Squarespace",
      description:
        "Community foundation and non-profit organization website with donation pathways, event calendar, and impact storytelling.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80",
      tags: ["Squarespace", "Non-Profit", "CSS"],
      liveUrl: "https://www.whiteoakstrong.org/home",
      githubUrl: "https://www.whiteoakstrong.org/home",
    },
    {
      id: 7,
      title: "FCO Outdoor Living & Construction",
      client: "Rudy",
      category: "squarespace",
      platform: "Squarespace",
      description:
        "Luxury outdoor patio construction and architectural landscape showcase on Squarespace with high-resolution visual portfolios.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      tags: ["Squarespace", "Landscape", "Design"],
      liveUrl: "https://www.fcooutdoorliving.com/",
      githubUrl: "https://www.fcooutdoorliving.com/",
    },
    {
      id: 8,
      title: "Experience Flote Wellness Studio",
      client: "des_micaela",
      category: "squarespace",
      platform: "Squarespace",
      description:
        "Serene sensory float spa and wellness sanctuary website designed on Squarespace with tranquil aesthetic and booking.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80",
      tags: ["Squarespace", "Wellness", "Booking"],
      liveUrl: "https://www.experienceflote.com/",
      githubUrl: "https://www.experienceflote.com/",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative bg-[#08090D] text-white py-20 lg:py-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching reference image */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#00DF82] mb-1.5">
              MY RECENT WORK
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Featured <span className="text-[#00DF82]">Projects</span>
            </h2>
            <p className="mt-2 text-gray-400 text-xs sm:text-sm max-w-xl">
              Some of my recent projects. Check out what I've built using modern technologies.
            </p>
          </div>

          <a
            href="https://github.com/mostakim1256"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-[#00DF82] transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => {
            const count =
              cat.id === "all"
                ? projects.length
                : projects.filter((p) => p.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === cat.id
                    ? "bg-[#00DF82] text-[#08090D] font-bold shadow-[0_0_15px_rgba(0,223,130,0.4)]"
                    : "bg-white/[0.03] text-gray-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.08]"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeFilter === cat.id ? "bg-black/20 text-[#08090D]" : "bg-white/5 text-gray-400"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid: 4 columns matching reference image on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#0F121A] border border-white/[0.08] hover:border-[#00DF82]/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,223,130,0.15)] flex flex-col justify-between"
            >
              {/* Thumbnail Image */}
              <div className="relative h-44 w-full overflow-hidden bg-black/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Client / Platform Tag */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[#00DF82] border border-[#00DF82]/30">
                    {project.platform}
                  </span>
                  {project.client && (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-gray-300 border border-white/10 flex items-center gap-1">
                      <UserCheck size={10} className="text-[#00DF82]" />
                      <span className="truncate max-w-[90px]">{project.client}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#00DF82] transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/[0.03] text-gray-400 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Demo & GitHub link in green matching reference image */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#00DF82] hover:underline"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={13} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
                  >
                    <span>Details</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
