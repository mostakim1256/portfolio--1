import React from "react";
import { NavLink } from "react-router-dom";
import { Home, User, FolderKanban, Mail } from "lucide-react";

// Image import
import logo from "../../../../src/assets/Image/12.png";

const Sidebar = () => {
    return (
        <aside className="bg-gradient-to-b from-gray-900 via-gray-800 to-black fixed top-4 left-4 h-[95vh] w-64 text-white rounded-2xl shadow-xl p-6 flex flex-col justify-between">

            {/* Top Section */}
            <div>
                {/* Profile Image */}
                <div className="flex flex-col items-center mb-8">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-green-400 shadow-lg hover:shadow-2xl hover:scale-105 transition duration-500">
                        <img
                            src={logo}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <h1 className="text-3xl font-bold mt-4 text-center tracking-wide">
                        SHIFAT
                    </h1>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-4">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg transition duration-300 
                            ${isActive ? "bg-green-600" : "hover:bg-gray-700"}`
                        }
                    >
                        <Home size={20} /> Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg transition duration-300 
                            ${isActive ? "bg-green-600" : "hover:bg-gray-700"}`
                        }
                    >
                        <User size={20} /> About
                    </NavLink>

                    <NavLink
                        to="/myjob"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg transition duration-300 
                            ${isActive ? "bg-green-600" : "hover:bg-gray-700"}`
                        }
                    >
                        <FolderKanban size={20} /> My Job
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg transition duration-300 
                            ${isActive ? "bg-green-600" : "hover:bg-gray-700"}`
                        }
                    >
                        <Mail size={20} /> Contact
                    </NavLink>
                </nav>
            </div>

            {/* Footer */}
            <div className="text-center text-gray-400 text-sm">
                © 2025 Sifat Portfolio
            </div>
        </aside>
    );
};

export default Sidebar;
