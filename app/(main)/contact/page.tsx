"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Plane, Globe } from "lucide-react";

const offices = [
  {
    city: "New York",
    country: "United States",
    address: "1221 Avenue of the Americas, 40th Floor",
    zip: "New York, NY 10020",
    phone: "+1 (212) 555-0180",
    email: "ny@aviatech.aero",
    hours: "Mon–Fri: 8:00 AM – 6:00 PM EST",
    flag: "🇺🇸",
    primary: true,
  },
  {
    city: "London",
    country: "United Kingdom",
    address: "One Canada Square, Canary Wharf",
    zip: "London, E14 5AB",
    phone: "+44 20 7946 0580",
    email: "london@aviatech.aero",
    hours: "Mon–Fri: 8:00 AM – 6:00 PM GMT",
    flag: "🇬🇧",
    primary: false,
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    address: "DIFC, Gate Village Building 4",
    zip: "Dubai, UAE",
    phone: "+971 4 555 0220",
    email: "dubai@aviatech.aero",
    hours: "Sun–Thu: 8:00 AM – 5:00 PM GST",
    flag: "🇦🇪",
    primary: false,
  },
  {
    city: "Singapore",
    country: "Singapore",
    address: "8 Marina Boulevard, Marina Bay",
    zip: "Singapore 018981",
    phone: "+65 6888 0330",
    email: "sg@aviatech.aero",
    hours: "Mon–Fri: 9:00 AM – 6:00 PM SGT",
    flag: "🇸🇬",
    primary: false,
  },
];

const topics = [
  "Flight Operations Consulting",
  "Safety Management Systems",
  "Regulatory Compliance",
  "Training Programs",
  "Fleet Management",
  "Air Traffic Management",
  "General Inquiry",
  "Partnership/Collaboration",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    topic: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#0A1628] py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#1E3A8A]/30 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-[#F59E0B] font-semibold text-sm mb-5 uppercase tracking-wider">
            <div className="w-8 h-0.5 bg-[#F59E0B]" />
            Get In Touch
            <div className="w-8 h-0.5 bg-[#F59E0B]" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">Contact Us</h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Whether you have a question about our services or want to explore a partnership,
            our team is ready to help. Expect a response within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black text-[#0A1628] mb-2">We&apos;d love to hear from you</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Fill out the form and one of our senior consultants will be in touch within one business day.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "info@aviatech.aero" },
                  { icon: Phone, label: "Phone (HQ)", value: "+1 (212) 555-0180" },
                  { icon: Globe, label: "Global Offices", value: "New York · London · Dubai · Singapore" },
                  { icon: Clock, label: "Response Time", value: "Within 24 business hours" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100">
                    <div className="w-10 h-10 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#F59E0B]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium mb-0.5">{label}</div>
                      <div className="text-[#0A1628] font-semibold text-sm">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-[#1E3A8A] to-[#0A1628] h-48 flex items-center justify-center">
                <div className="text-center text-white/60">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-[#F59E0B]" />
                  <p className="text-sm font-medium">1221 Avenue of the Americas</p>
                  <p className="text-xs">New York, NY 10020</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6 success-icon">
                      <CheckCircle className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-black text-[#0A1628] mb-3">Message Sent!</h3>
                    <p className="text-gray-500 max-w-sm">
                      Thank you for reaching out to Aviatech. One of our consultants will respond
                      to you within one business day.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", company: "", topic: "", message: "" }); }}
                      className="mt-8 bg-[#0A1628] hover:bg-[#1E3A8A] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-xl font-black text-[#0A1628] mb-6">Send Us a Message</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name <span className="text-red-500">*</span></label>
                        <input
                          required
                          type="text"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          placeholder="Robert"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/10 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name <span className="text-red-500">*</span></label>
                        <input
                          required
                          type="text"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          placeholder="Avery"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/10 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="r.avery@airline.com"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/10 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/10 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Company / Organization</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Atlas Airways"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/10 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Topic <span className="text-red-500">*</span></label>
                      <select
                        required
                        name="topic"
                        value={form.topic}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/10 transition-all bg-white"
                      >
                        <option value="">Select a topic</option>
                        {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Message <span className="text-red-500">*</span></label>
                      <textarea
                        required
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your organization and what you're looking to achieve..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/10 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] disabled:opacity-70 text-[#0A1628] font-bold px-6 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#F59E0B]/25"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-[#0A1628]/30 border-t-[#0A1628] rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0A1628] mb-3">Our Global Offices</h2>
            <p className="text-gray-500">Four strategic locations serving clients across every time zone.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office) => (
              <div
                key={office.city}
                className={`rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  office.primary
                    ? "bg-[#0A1628] border-[#1E3A8A] text-white"
                    : "bg-[#F8FAFC] border-gray-100"
                }`}
              >
                <div className="text-3xl mb-3">{office.flag}</div>
                <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${office.primary ? "text-[#F59E0B]" : "text-[#F59E0B]"}`}>
                  {office.country}
                </div>
                <h3 className={`text-xl font-black mb-4 ${office.primary ? "text-white" : "text-[#0A1628]"}`}>
                  {office.city}
                  {office.primary && <span className="ml-2 text-xs bg-[#F59E0B] text-[#0A1628] px-2 py-0.5 rounded-full font-semibold">HQ</span>}
                </h3>
                <div className={`space-y-3 text-sm ${office.primary ? "text-gray-300" : "text-gray-500"}`}>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#F59E0B]" />
                    <span>{office.address}<br />{office.zip}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 flex-shrink-0 text-[#F59E0B]" />
                    {office.phone}
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 flex-shrink-0 text-[#F59E0B]" />
                    {office.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0 text-[#F59E0B]" />
                    <span className="text-xs">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
