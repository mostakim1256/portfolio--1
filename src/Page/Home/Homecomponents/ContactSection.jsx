import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Facebook,
  Instagram,
  Rocket,
  Sparkles,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Wix & Squarespace Project",
    message: "",
  });

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/mostakim1256" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  ];

  return (
    <section id="contact" className="relative bg-[#08090D] text-white py-24 lg:py-28 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00DF82]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-[#00DF82] mb-1.5 flex items-center gap-1.5">
              <Sparkles size={13} />
              <span>GET IN TOUCH</span>
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Let's Work <span className="text-[#00DF82]">Together</span>
            </h2>
            <p className="mt-2 text-gray-400 text-xs sm:text-sm max-w-xl">
              Have a project in mind or want a custom website? Fill out the form below to email me directly, or reach out on WhatsApp.
            </p>
          </motion.div>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= COLUMN 1: CONTACT DETAILS ================= */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="space-y-4">
              
              {/* Email Card (updated to mostakimshifat32@gmail.com) */}
              <a
                href="mailto:mostakimshifat32@gmail.com"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#0F121A] border border-white/[0.08] hover:border-[#00DF82]/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00DF82]/10 border border-[#00DF82]/30 flex items-center justify-center text-[#00DF82] group-hover:scale-110 transition-transform">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Direct Email</p>
                  <p className="text-sm font-bold text-white truncate group-hover:text-[#00DF82] transition-colors">
                    mostakimshifat32@gmail.com
                  </p>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/8801518994147"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#0F121A] border border-white/[0.08] hover:border-[#00DF82]/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00DF82]/10 border border-[#00DF82]/30 flex items-center justify-center text-[#00DF82] group-hover:scale-110 transition-transform">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">WhatsApp & Phone</p>
                  <p className="text-sm font-bold text-white group-hover:text-[#00DF82] transition-colors">+880 1518-994147</p>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#0F121A] border border-white/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-[#00DF82]/10 border border-[#00DF82]/30 flex items-center justify-center text-[#00DF82]">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Location</p>
                  <p className="text-sm font-bold text-white">Kurigram / Dhaka, Bangladesh</p>
                </div>
              </div>

            </div>

            {/* Social Icons row */}
            <div className="pt-2">
              <p className="text-xs text-gray-400 mb-3 font-semibold">Connect with me on:</p>
              <div className="flex gap-2.5">
                {socialLinks.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#00DF82] hover:bg-[#00DF82]/15 text-gray-300 hover:text-[#00DF82] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                      aria-label={item.label}
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
            </div>

          </motion.div>

          {/* ================= COLUMN 2: CONTACT FORM WITH EMAIL SENDING ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl p-6 sm:p-8 bg-[#0F121A] border border-white/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              
              <form
                action="https://formsubmit.co/mostakimshifat32@gmail.com"
                method="POST"
                className="space-y-4"
              >
                {/* FormSubmit Configuration Settings */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="_subject"
                  value="[🚀 PORTFOLIO LEAD] New Client Inquiry via Website"
                />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Thank you for reaching out to Mostakim Shifat! I have received your message and will get back to you shortly."
                />

                {/* Name */}
                <div>
                  <label className="block text-[11px] font-semibold text-gray-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-500 focus:border-[#00DF82] outline-none text-xs transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-semibold text-gray-400 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-500 focus:border-[#00DF82] outline-none text-xs transition"
                  />
                </div>

                {/* Subject Dropdown */}
                <div>
                  <label className="block text-[11px] font-semibold text-gray-400 mb-1.5">
                    Project Type
                  </label>
                  <select
                    name="Project Type"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F121A] border border-white/[0.08] text-white focus:border-[#00DF82] outline-none text-xs transition cursor-pointer"
                  >
                    <option value="Wix Studio / Editor Project">Wix Studio / Editor Project</option>
                    <option value="Squarespace 7.1 Web Design">Squarespace 7.1 Web Design</option>
                    <option value="Frontend Development (Tailwind/HTML/CSS/JS)">Frontend Web Development</option>
                    <option value="React & Next.js Interface">React & Next.js Interface</option>
                    <option value="General Freelance Inquiry">General Freelance Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-semibold text-gray-400 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me about your project requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-500 focus:border-[#00DF82] outline-none text-xs transition resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-xs bg-[#00DF82] hover:bg-[#00c975] text-[#08090D] shadow-[0_0_20px_rgba(0,223,130,0.35)] hover:shadow-[0_0_30px_rgba(0,223,130,0.6)] transition-all duration-300 cursor-pointer"
                >
                  <span>Send Message to Email</span>
                  <Send size={14} />
                </motion.button>

                {/* WhatsApp Alternative Quick Link */}
                <div className="pt-2 text-center">
                  <span className="text-[11px] text-gray-400">Prefer instant messaging? </span>
                  <a
                    href="https://wa.me/8801518994147"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#00DF82] hover:underline"
                  >
                    Chat on WhatsApp (+880 1518-994147) &rarr;
                  </a>
                </div>

              </form>

            </div>
          </motion.div>

          {/* ================= COLUMN 3: RIGHT PROMO CARD WITH FLOATING ROCKET ================= */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl p-7 bg-gradient-to-b from-[#0F121A] to-[#0A0D14] border border-white/[0.08] text-center space-y-4 flex flex-col items-center justify-center min-h-[340px] relative overflow-hidden group">
              
              {/* Outer soft ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00DF82]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Floating Rocket Icon */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-16 h-16 rounded-2xl bg-[#00DF82]/10 border border-[#00DF82]/30 flex items-center justify-center text-[#00DF82] shadow-[0_0_25px_rgba(0,223,130,0.3)] group-hover:scale-110 transition-transform"
              >
                <Rocket size={30} />
              </motion.div>

              <h4 className="text-base font-extrabold text-white">
                Let's Build Something Great
              </h4>

              <p className="text-gray-400 text-xs leading-relaxed max-w-[210px]">
                Your design vision + My CMS & Frontend skills = <span className="text-[#00DF82] font-semibold">100% pixel-perfect success</span>.
              </p>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00DF82]/10 text-[#00DF82] border border-[#00DF82]/30 text-[10px] font-bold">
                  ⚡ 45+ Websites Delivered
                </span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
