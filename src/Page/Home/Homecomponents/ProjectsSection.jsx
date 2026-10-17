import React, { useState } from "react";
import { Sparkles, ArrowUpRight, UserCheck, ExternalLink, Globe } from "lucide-react";
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
    // --- WIX PROJECTS ---
    {
      id: 1,
      title: "VMC Pharmacy Platform",
      client: "danielbobbriggs",
      category: "wix",
      platform: "Wix",
      description:
        "Comprehensive healthcare and pharmacy website on Wix. Clean patient-first interface, prescription service sections, store locator, and full mobile optimization.",
      image: "https://images.unsplash.com/photo-1586015555751-63c2c54784a3?auto=format&fit=crop&w=900&q=80",
      tags: ["Wix", "Healthcare", "Pharmacy", "Mobile-First"],
      liveUrl: "https://www.vmcpharmacy.com/",
    },
    {
      id: 2,
      title: "All Purpose Power Washing",
      client: "appwashing",
      category: "wix",
      platform: "Wix",
      description:
        "Commercial and residential pressure washing business website on Wix. Built with estimate request inquiry forms, before/after gallery, and local SEO.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
      tags: ["Wix", "Home Services", "Local SEO", "Lead Gen"],
      liveUrl: "https://www.allpurposepowerwashing.com/",
    },
    {
      id: 3,
      title: "Project 40 Fitness & Nutrition",
      client: "steve_nutripath",
      category: "wix",
      platform: "Wix",
      description:
        "High-energy fitness coaching and health coaching portal on Wix. Features member training packages, nutrition guides, and responsive layout.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
      tags: ["Wix", "Fitness & Coaching", "Nutrition", "Booking"],
      liveUrl: "https://www.project40fitness.com/",
    },

    // --- SQUARESPACE PROJECTS ---
    {
      id: 4,
      title: "EQ Professor Coaching & Education",
      client: "nisawilliams1",
      category: "squarespace",
      platform: "Squarespace",
      description:
        "Professional executive leadership and EQ consulting platform built on Squarespace. Clean typography, program syllabus layout, and seamless consultation booking.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80",
      tags: ["Squarespace", "Executive Coaching", "Fluid Engine", "Typography"],
      liveUrl: "https://eqprofessor.com/home",
    },
    {
      id: 5,
      title: "White Oak Strong Community",
      client: "luneandline",
      category: "squarespace",
      platform: "Squarespace",
      description:
        "Community foundation and non-profit organization website on Squarespace. Features impact storytelling, community events calendar, and donation gateways.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80",
      tags: ["Squarespace", "Non-Profit", "Community", "Custom CSS"],
      liveUrl: "https://www.whiteoakstrong.org/home",
    },
    {
      id: 6,
      title: "FCO Outdoor Living & Construction",
      client: "Rudy",
      category: "squarespace",
      platform: "Squarespace",
      description:
        "Luxury outdoor patio construction and architectural landscape showcase on Squarespace with high-resolution visual portfolios and quote booking.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      tags: ["Squarespace", "Outdoor Living", "Landscape", "Portfolio"],
      liveUrl: "https://www.fcooutdoorliving.com/",
    },
    {
      id: 7,
      title: "Geer Fabrication Industrial Works",
      client: "joeygeer777",
      category: "squarespace",
      platform: "Squarespace",
      description:
        "Industrial custom metal fabrication website on Squarespace. Showcases precision manufacturing equipment, product catalog, and RFQ request forms.",
      image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
      tags: ["Squarespace", "Industrial", "Metal Fabrication", "Manufacturing"],
      liveUrl: "https://www.geerfabrication.com/",
    },
    {
      id: 8,
      title: "Experience Flote Wellness Studio",
      client: "des_micaela",
      category: "squarespace",
      platform: "Squarespace",
      description:
        "Serene sensory float spa and wellness sanctuary website designed on Squarespace. Features tranquil aesthetics, service pricing tiers, and appointment booking.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80",
      tags: ["Squarespace", "Wellness & Spa", "Appointment Booking", "Fluid Engine"],
      liveUrl: "https://www.experienceflote.com/",
    },

    // --- REACT & CODE ---
    {
      id: 9,
      title: "Personal Developer Portfolio",
      client: "Personal Project",
      category: "react",
      platform: "React 19",
      description:
        "Modern developer portfolio engineered with React 19, Tailwind CSS, live particle constellation background, responsive drawer, and glassmorphic aesthetics.",
      image: defaultProjectImg,
      tags: ["React 19", "Tailwind CSS", "Vite", "Particles.js"],
      liveUrl: "https://shifatportfolio.vercel.app/",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const getPlatformBadgeStyle = (platform) => {
    switch (platform) {
      case "Wix":
        return "bg-blue-500/15 text-blue-400 border-blue-500/30";
      case "Squarespace":
        return "bg-amber-500/15 text-amber-300 border-amber-500/30";
      default:
        return "bg-[#FF014F]/15 text-[#FF014F] border-[#FF014F]/30";
    }
  };

  return (
    <section id="projects" className="relative bg-[#0e1118] text-white py-20 lg:py-28 overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF014F]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF014F]/10 border border-[#FF014F]/30 text-[#FF014F] text-sm font-semibold tracking-wide uppercase mb-3">
            <Sparkles size={14} />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Featured <span className="text-[#FF014F]">Live Projects</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Explore live commercial websites I have designed and delivered for international clients across <span className="text-white font-medium">Wix</span>, <span className="text-white font-medium">Squarespace</span>, and <span className="text-white font-medium">React</span>.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF014F] to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => {
            const count =
              cat.id === "all"
                ? projects.length
                : projects.filter((p) => p.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === cat.id
                    ? "bg-[#FF014F]/15 text-[#FF014F] border border-[#FF014F]/50 shadow-[0_0_15px_rgba(255,1,79,0.25)] font-bold scale-105"
                    : "bg-white/[0.03] text-gray-400 hover:text-[#FF014F] hover:bg-white/[0.06] border border-white/[0.06]"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  activeFilter === cat.id ? "bg-[#FF014F]/20 text-[#FF014F]" : "bg-white/5 text-gray-400"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#131620] border border-white/[0.08] hover:border-[#FF014F]/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,1,79,0.3)] flex flex-col justify-between"
            >
              {/* Project Image & Overlay */}
              <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-black/40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#131620] via-transparent to-transparent opacity-90" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${getPlatformBadgeStyle(project.platform)}`}>
                    {project.platform}
                  </span>

                  {project.client && (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/75 backdrop-blur-md text-gray-300 border border-white/10 flex items-center gap-1.5">
                      <UserCheck size={12} className="text-[#FF014F]" />
                      <span>{project.client}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/[0.04] text-gray-300 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#FF014F] transition-colors mb-2.5">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Action Link: Live Website */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white hover:text-[#FF014F] bg-white/[0.04] hover:bg-[#FF014F]/15 px-4 py-2.5 rounded-xl border border-white/[0.08] hover:border-[#FF014F]/60 hover:shadow-[0_0_20px_rgba(255,1,79,0.25)] transition-all duration-300 w-full justify-center"
                  >
                    <Globe size={14} />
                    <span>Visit Live Website</span>
                    <ArrowUpRight size={15} />
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
