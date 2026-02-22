import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-[#1B1F23] text-base-content pt-12 pb-14 md:pb-18">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/20"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Footer Grid */}
        <div className="grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-10 lg:gap-14">

          {/* Services */}
          <nav className="space-y-3">
            <h6 className="text-white text-lg font-semibold mb-4">Services</h6>
            {["Branding", "Design", "Marketing", "Advertisement"].map((item) => (
              <a
                key={item}
                className="block text-gray-400 hover:text-[#FF014F] transition"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Company */}
          <nav className="space-y-3">
            <h6 className="text-white text-lg font-semibold mb-4">Company</h6>
            {["About us", "Contact", "Jobs", "Press kit"].map((item) => (
              <a
                key={item}
                className="block text-gray-400 hover:text-[#FF014F] transition"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Legal */}
          <nav className="space-y-3">
            <h6 className="text-white text-lg font-semibold mb-4">Legal</h6>
            {["Terms of use", "Privacy policy", "Cookie policy"].map((item) => (
              <a
                key={item}
                className="block text-gray-400 hover:text-[#FF014F] transition"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Newsletter */}
          <div className="space-y-5 lg:col-span-1">
            <h6 className="text-white text-lg font-semibold mb-4">
              Newsletter
            </h6>

            <form className="space-y-3">
              <label className="text-gray-400 text-sm block">
                Enter your email address
              </label>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="username@site.com"
                  className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 text-white focus:border-[#FF014F] outline-none"
                />

                <button className="px-6 py-3 rounded-lg bg-[#FF014F] hover:bg-[#e6003d] text-white transition w-full sm:w-auto">
                  Subscribe
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-14 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} SHIFAT. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;