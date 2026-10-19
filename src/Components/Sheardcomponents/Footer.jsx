import React from "react";
import { ArrowUp, Github, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/mostakim1256", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-[#06070A] border-t border-white/[0.06] text-white py-10 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Row matching reference image */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full border border-[#00DF82]/80 flex items-center justify-center bg-[#00DF82]/10 shadow-[0_0_10px_rgba(0,223,130,0.3)]">
              <span className="text-xs font-bold text-[#00DF82]">S</span>
            </div>
            <div>
              <span className="text-sm font-bold tracking-wider text-white">SHIFAT</span>
              <p className="text-[10px] text-gray-400">Frontend Developer</p>
            </div>
          </div>

          {/* Navigation Links in Center */}
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-gray-400">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-[#00DF82] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Socials & Back-to-Top Button */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-[#00DF82] hover:bg-[#00DF82]/15 text-gray-400 hover:text-[#00DF82] flex items-center justify-center transition-all duration-300"
                    aria-label={item.label}
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>

            {/* Back to top circle button in Green matching reference */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#00DF82] hover:bg-[#00c975] text-[#08090D] flex items-center justify-center shadow-[0_0_15px_rgba(0,223,130,0.4)] transition-transform hover:scale-110"
              aria-label="Back to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-2">
          <p>© {new Date().getFullYear()} Shifat. All rights reserved.</p>
          <p>Designed & Developed with Passion</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;