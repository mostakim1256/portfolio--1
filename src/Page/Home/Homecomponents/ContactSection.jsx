import React, { useState } from "react";
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
  CheckCircle2,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Wix & Squarespace Project",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Send formatted message directly to WhatsApp 01518994147
    const text =
      `*New Portfolio Inquiry*%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(formData.name)}%0A` +
      `📧 *Email:* ${encodeURIComponent(formData.email)}%0A` +
      `📌 *Subject:* ${encodeURIComponent(formData.subject)}%0A%0A` +
      `💬 *Message:*%0A${encodeURIComponent(formData.message)}`;

    const whatsappUrl = `https://wa.me/8801518994147?text=${text}`;
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "Wix & Squarespace Project", message: "" });
    }, 4000);
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/mostakim1256" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  ];

  return (
    <section id="contact" className="relative bg-[#08090D] text-white py-20 lg:py-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching reference image */}
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#00DF82] mb-1.5">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Let's Work <span className="text-[#00DF82]">Together</span>
          </h2>
          <p className="mt-2 text-gray-400 text-xs sm:text-sm max-w-xl">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>

        {/* 3 Columns matching reference image: Info Left, Form Center, Promo Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= COLUMN 1: LEFT CONTACT INFO ================= */}
          <div className="lg:col-span-3 space-y-5">
            
            <div className="flex items-center gap-3 text-xs text-gray-300">
              <div className="w-8 h-8 rounded-full bg-[#00DF82]/10 border border-[#00DF82]/30 flex items-center justify-center text-[#00DF82] flex-shrink-0">
                <Mail size={14} />
              </div>
              <a href="mailto:mostakimshifat476@gmail.com" className="hover:text-[#00DF82] transition truncate">
                mostakimshifat476@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs text-gray-300">
              <div className="w-8 h-8 rounded-full bg-[#00DF82]/10 border border-[#00DF82]/30 flex items-center justify-center text-[#00DF82] flex-shrink-0">
                <MapPin size={14} />
              </div>
              <span>Dhaka, Bangladesh</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-gray-300">
              <div className="w-8 h-8 rounded-full bg-[#00DF82]/10 border border-[#00DF82]/30 flex items-center justify-center text-[#00DF82] flex-shrink-0">
                <Phone size={14} />
              </div>
              <a href="https://wa.me/8801518994147" target="_blank" rel="noopener noreferrer" className="hover:text-[#00DF82] transition">
                +880 1518-994147
              </a>
            </div>

            {/* Social Icons matching reference image */}
            <div className="pt-4 flex items-center gap-2.5">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-[#00DF82] hover:bg-[#00DF82]/15 text-gray-300 hover:text-[#00DF82] flex items-center justify-center transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>

          </div>

          {/* ================= COLUMN 2: CENTER FORM ================= */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl p-6 sm:p-7 bg-[#0F121A] border border-white/[0.08]">
              
              {submitted && (
                <div className="mb-4 p-3 rounded-xl bg-[#00DF82]/10 border border-[#00DF82]/40 text-[#00DF82] flex items-center gap-2 text-xs">
                  <CheckCircle2 size={16} />
                  <span>Message sent to WhatsApp! Shifat will respond shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Your Name */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-500 focus:border-[#00DF82] outline-none text-xs transition"
                    />
                  </div>

                  {/* Your Email */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-400 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-500 focus:border-[#00DF82] outline-none text-xs transition"
                    />
                  </div>
                </div>

                {/* Subject Select */}
                <div>
                  <label className="block text-[11px] font-semibold text-gray-400 mb-1.5">
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111420] border border-white/[0.08] text-white focus:border-[#00DF82] outline-none text-xs transition"
                  >
                    <option value="Wix Website Design">Wix Website Design & Development</option>
                    <option value="Squarespace Customization">Squarespace Customization</option>
                    <option value="Frontend & React App">Frontend & React Web Application</option>
                    <option value="General Freelance Inquiry">General Freelance Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-semibold text-gray-400 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-500 focus:border-[#00DF82] outline-none text-xs transition resize-none"
                  />
                </div>

                {/* Submit Button matching reference */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full font-bold text-xs bg-[#00DF82] hover:bg-[#00c975] text-[#08090D] shadow-[0_0_20px_rgba(0,223,130,0.35)] hover:shadow-[0_0_25px_rgba(0,223,130,0.55)] transition-all duration-300"
                >
                  <span>Send Message</span>
                  <Send size={14} />
                </button>

              </form>

            </div>
          </div>

          {/* ================= COLUMN 3: RIGHT PROMO CARD ================= */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl p-6 sm:p-7 bg-[#0F121A] border border-white/[0.08] text-center space-y-4 flex flex-col items-center justify-center min-h-[300px]">
              
              <div className="w-14 h-14 rounded-2xl bg-[#00DF82]/10 border border-[#00DF82]/30 flex items-center justify-center text-[#00DF82] shadow-[0_0_20px_rgba(0,223,130,0.25)]">
                <Rocket size={26} />
              </div>

              <h4 className="text-base font-extrabold text-white">
                Let's Build Something Great
              </h4>

              <p className="text-gray-400 text-xs leading-relaxed max-w-[200px]">
                Your ideas + My skills = <span className="text-[#00DF82] font-semibold">Amazing results</span>.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
