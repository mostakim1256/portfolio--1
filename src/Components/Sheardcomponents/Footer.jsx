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
    <footer className="relative bg-[#06070A] border-t border-white/[0.06] text-white py-14 sm:py-16 overflow-hidden">
      
      {/* Soft Ambient Glow in Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#00DF82]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Huge Background Watermark Typography "SHIFAT" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span
          className="text-[20vw] sm:text-[17vw] font-black tracking-widest uppercase leading-none whitespace-nowrap opacity-90"
          style={{
            WebkitTextStroke: "1.5px rgba(0, 223, 130, 0.18)",
            backgroundImage: "linear-gradient(to bottom, rgba(0, 223, 130, 0.20), rgba(255, 255, 255, 0.04) 65%, transparent 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          SHIFAT
        </span>
      </div>

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
              <p className="text-[10px] text-gray-400">Frontend Developer &bull; CMS Expert</p>
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
          <p>© {new Date().getFullYear()} Mostakim Hossain Shifat. All rights reserved.</p>
          <p>Designed & Developed with Passion</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;