import React, { useState, useEffect } from "react";
import { Home, User, FolderKanban, Mail, Menu, X, Sparkles, Send } from "lucide-react";
import logo from "../../../assets/Image/fb6c7776-e933-437f-85d7-a75ddd2d7e7f.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", href: "#home", icon: Home },
    { label: "About", href: "#about", icon: User },
    { label: "Services", href: "#services", icon: Sparkles },
    { label: "Projects", href: "#projects", icon: FolderKanban },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Simple active section detection
      const sections = ["home", "about", "services", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

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
          ? "bg-[#0e1118]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent border-b border-white/[0.04] py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#FF014F]/80 p-0.5 shadow-[0_0_15px_rgba(255,1,79,0.35)] group-hover:scale-105 transition-transform duration-300">
              <img
                src={logo}
                alt="Shifat"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-white group-hover:text-[#FF014F] transition-colors">
                SHIFAT<span className="text-[#FF014F]">.</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-gray-400 font-medium">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.replace("#", "");

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-[#FF014F]/15 text-[#FF014F] border border-[#FF014F]/40 shadow-[0_0_15px_rgba(255,1,79,0.25)] font-semibold"
                      : "text-gray-300 hover:text-[#FF014F] hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon size={15} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#FF014F] to-[#e00045] text-white shadow-[0_4px_20px_rgba(255,1,79,0.35)] hover:shadow-[0_4px_25px_rgba(255,1,79,0.55)] hover:scale-105 transition-all duration-300"
            >
              <span>Let's Talk</span>
              <Send size={15} />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/[0.06] border border-white/[0.08] transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} className="text-[#FF014F]" /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-5 mx-4 mt-3 rounded-2xl bg-[#131620]/95 border border-white/[0.1] backdrop-blur-2xl shadow-2xl flex flex-col gap-2">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.replace("#", "");

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#FF014F]/15 text-[#FF014F] border border-[#FF014F]/40 font-semibold"
                    : "text-gray-300 hover:bg-white/[0.04] hover:text-[#FF014F]"
                }`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center gap-2 mt-2 px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#FF014F] to-[#e00045] text-white shadow-lg text-center"
          >
            <span>Let's Talk</span>
            <Send size={16} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;