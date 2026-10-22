import React, { useState, useEffect } from "react";
import { Download, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import cv from "../../../assets/Image/shifat cv.pdf";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["home", "about", "projects", "services", "skills", "blog", "contact"];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090D]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)] py-3.5"
          : "bg-transparent border-b border-white/[0.04] py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - 'S' Circle + SHIFAT */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-full border border-[#00DF82]/80 flex items-center justify-center bg-[#00DF82]/10 shadow-[0_0_12px_rgba(0,223,130,0.35)] group-hover:scale-105 transition-transform duration-300">
              <span className="text-sm font-extrabold text-[#00DF82]">S</span>
            </div>
            <span className="text-lg font-bold tracking-widest text-white group-hover:text-[#00DF82] transition-colors">
              SHIFAT
            </span>
          </a>

          {/* Center: Desktop Nav Pill Container */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                    isActive
                      ? "bg-[#00DF82] text-[#08090D] shadow-[0_0_15px_rgba(0,223,130,0.5)] font-bold"
                      : "text-gray-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden sm:flex items-center gap-3.5">
            {/* Theme Toggle Icon Dummy */}
            <button
              aria-label="Toggle theme"
              className="p-2 rounded-full text-gray-400 hover:text-[#00DF82] hover:bg-white/[0.05] transition"
            >
              <Sun size={18} />
            </button>

            {/* Download CV Button */}
            <a
              href={cv}
              download="Mostakim_Hossain_Shifat_CV.pdf"
              className="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold bg-[#00DF82] hover:bg-[#00c975] text-[#08090D] shadow-[0_0_20px_rgba(0,223,130,0.35)] hover:shadow-[0_0_25px_rgba(0,223,130,0.55)] transition-all duration-300 hover:scale-105"
            >
              <span>Download CV</span>
              <Download size={14} />
            </a>
          </div>

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-gray-300 hover:text-white bg-white/[0.04] active:scale-95 border border-white/[0.08] transition-all"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} className="text-[#00DF82]" /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay Backdrop */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1] lg:hidden animate-fade-in"
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[520px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-4 py-4 mx-3 sm:mx-4 mt-2 rounded-2xl bg-[#0F121A]/98 border border-white/[0.12] backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col gap-1.5">
          {navLinks.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#00DF82] text-[#08090D] font-bold shadow-[0_0_15px_rgba(0,223,130,0.4)]"
                    : "text-gray-300 hover:bg-white/[0.05] hover:text-[#00DF82]"
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#08090D]" />}
              </a>
            );
          })}

          <div className="pt-2 mt-1 border-t border-white/[0.08] grid grid-cols-2 gap-2">
            <a
              href={cv}
              download="Mostakim_Hossain_Shifat_CV.pdf"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-xs font-bold bg-[#00DF82] text-[#08090D] shadow-md hover:bg-[#00c975] transition"
            >
              <span>Download CV</span>
              <Download size={13} />
            </a>

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-xs font-bold bg-white/[0.06] border border-[#00DF82]/40 text-[#00DF82] hover:bg-[#00DF82]/10 transition"
            >
              <span>Hire Me</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;