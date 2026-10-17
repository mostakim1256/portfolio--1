import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2, Linkedin, Github, Twitter, Instagram, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Construct pre-formatted message for WhatsApp
    const text = 
      `*New Portfolio Inquiry*%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(formData.name)}%0A` +
      `📧 *Email:* ${encodeURIComponent(formData.email)}%0A` +
      `📌 *Subject:* ${encodeURIComponent(formData.subject || "Project Discussion")}%0A%0A` +
      `💬 *Message:*%0A${encodeURIComponent(formData.message)}`;

    const whatsappUrl = `https://wa.me/8801518994147?text=${text}`;

    // Open WhatsApp with pre-filled message
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const contactDetails = [
    {
      icon: <MessageCircle className="text-[#25D366]" size={22} />,
      title: "WhatsApp",
      value: "+880 1518-994147",
      link: "https://wa.me/8801518994147",
      badge: "Instant Reply",
    },
    {
      icon: <Mail className="text-[#FF014F]" size={22} />,
      title: "Email Address",
      value: "mostakimshifat476@gmail.com",
      link: "mailto:mostakimshifat476@gmail.com",
      badge: "Official",
    },
    {
      icon: <Phone className="text-[#38bdf8]" size={22} />,
      title: "Direct Call",
      value: "+880 1518-994147",
      link: "tel:+8801518994147",
      badge: "Voice",
    },
    {
      icon: <MapPin className="text-[#a855f7]" size={22} />,
      title: "Location",
      value: "Dhaka, Bangladesh (Open Worldwide)",
      link: "#",
      badge: "Remote",
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/mostakim1256" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  ];

  return (
    <section id="contact" className="relative bg-[#0e1118] text-white py-20 lg:py-28 overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-[#FF014F]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF014F]/10 border border-[#FF014F]/30 text-[#FF014F] text-sm font-semibold tracking-wide uppercase mb-3">
            <Sparkles size={14} />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Get In <span className="text-[#FF014F]">Touch</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Ready to start your next website or have questions? Send a direct message to my WhatsApp or Email and I'll respond swiftly!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF014F] to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl p-8 bg-[#131620] border border-white/[0.08] shadow-xl space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Let's Talk About Your Next <span className="text-[#FF014F]">Project</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I am actively taking on new freelance projects for <span className="text-white font-medium">Wix, Squarespace, and React Frontend</span>. Connect with me directly on WhatsApp for the quickest response!
              </p>

              {/* Direct WhatsApp Action Button */}
              <a
                href="https://wa.me/8801518994147"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-[1.02]"
              >
                <MessageCircle size={18} />
                <span>Chat Directly on WhatsApp</span>
              </a>

              {/* Contact List */}
              <div className="space-y-3.5 pt-2">
                {contactDetails.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#FF014F]/40 hover:bg-white/[0.05] transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/[0.08] group-hover:bg-[#FF014F] group-hover:border-[#FF014F] group-hover:text-white transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">{item.title}</p>
                        <p className="text-sm font-semibold text-white group-hover:text-[#FF014F] transition-colors">{item.value}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/[0.05] text-gray-400 border border-white/[0.06]">
                      {item.badge}
                    </span>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Follow My Profiles</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#FF014F] hover:bg-[#FF014F] hover:text-white text-gray-300 flex items-center justify-center transition-all duration-300 hover:scale-110"
                        aria-label={social.label}
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 bg-[#131620] border border-white/[0.08] shadow-2xl relative">
              
              {/* Form Title & Badge */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                <div>
                  <h4 className="text-xl font-bold text-white">Send Instant Inquiry</h4>
                  <p className="text-xs text-gray-400 mt-1">Fills and sends directly to Shifat's WhatsApp</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-[#25D366] font-semibold bg-[#25D366]/10 px-3 py-1.5 rounded-full border border-[#25D366]/20">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>WhatsApp Enabled</span>
                </span>
              </div>

              {/* Success Notification Alert */}
              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 flex items-center gap-3 animate-fadeIn">
                  <CheckCircle2 size={20} className="flex-shrink-0" />
                  <p className="text-sm font-medium">WhatsApp message launched! Shifat will connect with you right away.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-500 focus:border-[#FF014F] focus:ring-1 focus:ring-[#FF014F] outline-none transition text-sm"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-500 focus:border-[#FF014F] focus:ring-1 focus:ring-[#FF014F] outline-none transition text-sm"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Project / Inquiry Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Wix Website Redesign / React Frontend Project"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-500 focus:border-[#FF014F] focus:ring-1 focus:ring-[#FF014F] outline-none transition text-sm"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell me about your project, timeline, and requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-500 focus:border-[#FF014F] focus:ring-1 focus:ring-[#FF014F] outline-none transition resize-none text-sm"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-[#25D366] to-[#1eb855] text-white shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_35px_rgba(37,211,102,0.6)] hover:scale-[1.02] active:scale-[0.99] transition-all duration-300"
                  >
                    <MessageCircle size={18} />
                    <span>Send to WhatsApp (01518994147)</span>
                  </button>

                  <a
                    href="mailto:mostakimshifat476@gmail.com"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm bg-white/[0.04] border border-white/[0.08] text-gray-300 hover:text-white hover:bg-white/[0.08] hover:border-[#FF014F]/40 transition-all text-center"
                  >
                    <Mail size={16} />
                    <span>Send via Email Instead</span>
                  </a>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
