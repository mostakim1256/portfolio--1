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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#ff014f]/20 text-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* বাম পাশ — শুধু লোগো + নাম */}
          <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-[#ff014f]/70 shadow-md hover:shadow-[#ff014f]/30 hover:scale-105 transition-all duration-300">
              <img src={logo} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight">SHIFAT</h1>
          </div>

          {/* মাঝখানে — ডেস্কটপ নেভিগেশন */}
          <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-10 flex-1">
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

          {/* ডান পাশ — ইউজার মেনু + মোবাইল টগল */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* ডেস্কটপ ইউজার বাটন */}
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

            {/* মোবাইল মেনু বাটন */}
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

      {/* মোবাইল ড্রপডাউন */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-[#ff014f]/20 backdrop-blur-md">
          <div className="px-4 py-5 flex flex-col gap-2">
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
    </header>
  );
};

export default Header;