import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2, Linkedin, Github, Twitter, Instagram } from "lucide-react";

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
    
    // Simulate successful form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const contactDetails = [
    {
      icon: <Mail className="text-[#FF014F]" size={22} />,
      title: "Email Address",
      value: "mostakimshifat@gmail.com",
      link: "mailto:mostakimshifat@gmail.com",
    },
    {
      icon: <Phone className="text-[#FF014F]" size={22} />,
      title: "Phone & WhatsApp",
      value: "+880 1XXXXXXXXX",
      link: "tel:+8801000000000",
    },
    {
      icon: <MapPin className="text-[#FF014F]" size={22} />,
      title: "Location",
      value: "Dhaka, Bangladesh (Open to Remote)",
      link: "#",
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  ];

  return (
    <section id="contact" className="relative bg-[#0e1118] text-white py-20 lg:py-28 overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-[#FF014F]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-700/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF014F]/10 border border-[#FF014F]/30 text-[#FF014F] text-sm font-semibold tracking-wide uppercase mb-3">
            <Sparkles size={14} />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Get In <span className="text-[#FF014F]">Touch</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Have a project in mind, need a developer, or just want to connect? Send me a message and let's create something extraordinary together!
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
                I am currently open to freelance opportunities, contracts, and full-time frontend developer roles. Feel free to reach out anytime!
              </p>

              {/* Contact List */}
              <div className="space-y-4 pt-2">
                {contactDetails.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#FF014F]/40 hover:bg-white/[0.05] transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#FF014F]/10 border border-[#FF014F]/20 group-hover:bg-[#FF014F] group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">{item.title}</p>
                      <p className="text-sm font-semibold text-white group-hover:text-[#FF014F] transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Follow Me</p>
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
              
              {/* Success Notification Alert */}
              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 flex items-center gap-3 animate-fadeIn">
                  <CheckCircle2 size={20} className="flex-shrink-0" />
                  <p className="text-sm font-medium">Thank you! Your message has been sent successfully. I will get back to you soon.</p>
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
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Project Discussion / Freelance Inquiry"
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

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-[#FF014F] to-[#e00045] text-white shadow-[0_4px_25px_rgba(255,1,79,0.4)] hover:shadow-[0_4px_35px_rgba(255,1,79,0.6)] hover:scale-[1.02] active:scale-[0.99] transition-all duration-300"
                >
                  <span>Send Message</span>
                  <Send size={16} />
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
