import React from "react";
import { ArrowUp, Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react";
import logo from "../../assets/Image/fb6c7776-e933-437f-85d7-a75ddd2d7e7f.jpg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/mostakim1256", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-[#090b10] border-t border-white/[0.08] text-white pt-16 pb-12 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-24 bg-[#FF014F]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-white/[0.06] items-center">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-3 group inline-block">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#FF014F]/80 p-0.5">
                <img src={logo} alt="Shifat" className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="text-2xl font-bold tracking-wider text-white">
                SHIFAT<span className="text-[#FF014F]">.</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Passionate Frontend Developer focused on creating beautiful, accessible, and high-performance digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Quick Navigation
            </h4>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#FF014F] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex flex-col md:items-end gap-4">
            <div className="flex gap-2">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#FF014F] hover:bg-[#FF014F] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300"
                    aria-label={item.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-[#FF014F] transition-colors group mt-2"
            >
              <span>Back to Top</span>
              <div className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/[0.08] group-hover:border-[#FF014F] flex items-center justify-center transition-all">
                <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Md Mostakim Hossain Shifat. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Built with <Heart size={13} className="text-[#FF014F] fill-[#FF014F]" /> using React & Tailwind
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;