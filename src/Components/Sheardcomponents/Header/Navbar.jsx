import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, User, FolderKanban, Mail, Menu, X, UserCircle, Settings, LogOut } from "lucide-react";

import logo from "../../../assets/Image/12.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const menuItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/about", icon: User, label: "About" },
    { to: "/myjob", icon: FolderKanban, label: "My Job" },
    { to: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#212428] backdrop-blur-md border-b border-[#ff014f]/20 text-white shadow-lg">
      <div className="max-w-[84%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* LEFT — Logo + Name */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="w-12 h-22 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-[#ff014f]/70 shadow-md hover:shadow-[#ff014f]/30 hover:scale-105 transition-all duration-300">
              <img src={logo} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-lg md:text-2xl font-bold tracking-tight">SHIFAT</h1>
          </div>

          {/* CENTER — Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10 flex-1 justify-center">
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-300
                  ${isActive
                    ? "bg-[#ff014f]/20 text-[#ff014f] border border-[#ff014f]/50 shadow-sm"
                    : "text-gray-300 hover:text-[#ff014f] hover:bg-[#ff014f]/10 border border-transparent hover:shadow-sm"
                  }`
                }
              >
                <item.icon size={18} />
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT — User Menu + Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Desktop User Menu */}
            <div className="relative hidden md:block">
              <button
                className="text-[#ff014f] p-2 rounded-full hover:bg-[#ff014f]/15 transition-all duration-300 focus:outline-none"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                aria-label="User menu"
              >
                <UserCircle size={28} />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-black/95 border border-[#ff014f]/30 rounded-xl shadow-2xl backdrop-blur-md z-50">
                  <div className="py-2">
                    <a href="#" className="flex items-center gap-3 px-5 py-3 text-gray-200 hover:bg-[#ff014f]/15 hover:text-[#ff014f] transition-colors" onClick={() => setIsUserMenuOpen(false)}>
                      <UserCircle size={18} /> Profile
                    </a>
                    <a href="#" className="flex items-center gap-3 px-5 py-3 text-gray-200 hover:bg-[#ff014f]/15 hover:text-[#ff014f] transition-colors" onClick={() => setIsUserMenuOpen(false)}>
                      <Settings size={18} /> Settings
                    </a>
                    <hr className="border-[#ff014f]/20 my-1" />
                    <a href="#" className="flex items-center gap-3 px-5 py-3 text-gray-200 hover:bg-[#ff014f]/15 hover:text-[#ff014f] transition-colors" onClick={() => setIsUserMenuOpen(false)}>
                      <LogOut size={18} /> Logout
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#ff014f] p-2 rounded-lg hover:bg-[#ff014f]/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-[#ff014f]/20 backdrop-blur-md animate-slideDown">
          <div className="px-4 py-5 flex flex-col gap-3">
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-5 py-4 rounded-xl text-base font-medium transition-all duration-300
                  ${isActive
                    ? "bg-[#ff014f]/20 text-[#ff014f] border border-[#ff014f]/50"
                    : "text-gray-200 hover:text-[#ff014f] hover:bg-[#ff014f]/10 border border-transparent"
                  }`
                }
              >
                <item.icon size={22} />
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Tailwind animation for mobile */}
      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;
