import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-cover text-base-content pt-10 pb-12 md:pb-16">
      {/* উপরের সাদা লাইন */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/70"></div>

      {/* মূল কন্টেন্ট — Header-এর সাথে align করার জন্য */}
      <div className="max-w-[84%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          {/* Services */}
          <nav className="space-y-3">
            <h6 className="footer-title text-white mb-3 text-lg font-semibold">Services</h6>
            <a className="link link-hover block text-gray-300 hover:text-[#FF014F] transition-colors">
              Branding
            </a>
            <a className="link link-hover block text-gray-300 hover:text-[#FF014F] transition-colors">
              Design
            </a>
            <a className="link link-hover block text-gray-300 hover:text-[#FF014F] transition-colors">
              Marketing
            </a>
            <a className="link link-hover block text-gray-300 hover:text-[#FF014F] transition-colors">
              Advertisement
            </a>
          </nav>

          {/* Company */}
          <nav className="space-y-3">
            <h6 className="footer-title text-white mb-3 text-lg font-semibold">Company</h6>
            <a className="link link-hover block text-gray-300 hover:text-[#FF014F] transition-colors">
              About us
            </a>
            <a className="link link-hover block text-gray-300 hover:text-[#FF014F] transition-colors">
              Contact
            </a>
            <a className="link link-hover block text-gray-300 hover:text-[#FF014F] transition-colors">
              Jobs
            </a>
            <a className="link link-hover block text-gray-300 hover:text-[#FF014F] transition-colors">
              Press kit
            </a>
          </nav>

          {/* Legal */}
          <nav className="space-y-3">
            <h6 className="footer-title text-white mb-3 text-lg font-semibold">Legal</h6>
            <a className="link link-hover block text-gray-300 hover:text-[#FF014F] transition-colors">
              Terms of use
            </a>
            <a className="link link-hover block text-gray-300 hover:text-[#FF014F] transition-colors">
              Privacy policy
            </a>
            <a className="link link-hover block text-gray-300 hover:text-[#FF014F] transition-colors">
              Cookie policy
            </a>
          </nav>

          {/* Newsletter */}
          <div className="space-y-4 lg:col-span-1">
            <h6 className="footer-title text-white mb-3 text-lg font-semibold">Newsletter</h6>
            <form className="w-full max-w-xs">
              <label className="text-gray-300 mb-2 block text-sm">
                Enter your email address
              </label>
              <div className="join w-full">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item flex-1 bg-transparent text-white placeholder-gray-500 border-gray-600 focus:border-[#FF014F]"
                />
                <button className="btn bg-[#FF014F] hover:bg-[#e6003d] join-item text-white border-none">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Optional: Copyright line */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} SHIFAT. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;