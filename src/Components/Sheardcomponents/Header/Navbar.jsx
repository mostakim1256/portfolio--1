import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, User, FolderKanban, Mail, Menu, X, UserCircle, Settings, LogOut } from "lucide-react";

import logo from "../../../assets/Image/fb6c7776-e933-437f-85d7-a75ddd2d7e7f.jpg";

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
      
      {/* Container Responsive */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* Logo Section */}
          <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-[#ff014f]/70 shadow-md transition-transform hover:scale-105">
              <img src={logo} alt="Profile" className="w-full h-full object-cover" />
            </div>

            <h1 className="text-base sm:text-lg md:text-2xl font-bold tracking-tight">
              SHIFAT
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex flex-1 justify-center gap-6 lg:gap-8">
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#ff014f]/20 text-[#ff014f] border border-[#ff014f]/50"
                      : "text-gray-300 hover:text-[#ff014f] hover:bg-[#ff014f]/10"
                  }`
                }
              >
                <item.icon size={18} />
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3 md:gap-5">

            {/* User Menu */}
            <div className="relative hidden md:block">
              <button
                className="text-[#ff014f] p-2 rounded-full hover:bg-[#ff014f]/15 transition"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <UserCircle size={26} />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-3 w-52 bg-black/95 border border-[#ff014f]/30 rounded-xl shadow-2xl backdrop-blur-md">
                  {[
                    { icon: UserCircle, label: "Profile" },
                    { icon: Settings, label: "Settings" },
                    { icon: LogOut, label: "Logout" },
                  ].map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center gap-3 px-5 py-3 text-gray-200 hover:bg-[#ff014f]/15 hover:text-[#ff014f]"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <item.icon size={18} />
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#ff014f] p-2 rounded-lg hover:bg-[#ff014f]/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-[#ff014f]/20 backdrop-blur-md">
          <div className="px-4 py-5 flex flex-col gap-3">
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-5 py-4 rounded-xl text-base font-medium
                  ${
                    isActive
                      ? "bg-[#ff014f]/20 text-[#ff014f] border border-[#ff014f]/50"
                      : "text-gray-200 hover:text-[#ff014f] hover:bg-[#ff014f]/10"
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