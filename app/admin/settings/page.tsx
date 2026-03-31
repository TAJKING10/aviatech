"use client";

import { useState } from "react";
import {
  Globe, Bell, Shield, Palette, Mail, Save, Eye, EyeOff,
  Upload, Toggle, CheckCircle, AlertCircle
} from "lucide-react";

const tabs = [
  { id: "general", label: "General", icon: Globe },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "branding", label: "Branding", icon: Palette },
  { id: "security", label: "Security", icon: Shield },
  { id: "email", label: "Email", icon: Mail },
];

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [saved, setSaved] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);

  const [generalSettings, setGeneralSettings] = useState({
    siteName: "Aviatech Consulting",
    tagline: "Elevating Aviation Excellence",
    siteUrl: "https://aviatech.aero",
    timezone: "America/New_York",
    dateFormat: "MMM DD, YYYY",
    currency: "USD",
    language: "en",
    maintenanceMode: false,
  });

  const [notifications, setNotifications] = useState({
    newBookingEmail: true,
    newMessageEmail: true,
    newApplicationEmail: true,
    weeklyReportEmail: true,
    paymentReceivedEmail: true,
    bookingCancelledEmail: true,
    browserNotifications: false,
    smsNotifications: false,
  });

  const [branding, setBranding] = useState({
    primaryColor: "#0A1628",
    secondaryColor: "#1E3A8A",
    accentColor: "#F59E0B",
    logoText: "AVIATECH",
    taglineText: "Consulting",
    footerText: "© 2026 Aviatech Consulting. All rights reserved.",
  });

  const handleSave = async () => {
    await new Promise((r) => setTimeout(r, 800));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-[#0A1628]">Settings</h1>
          <p className="text-gray-500 text-sm mt-0.5">Manage site configuration, branding, and notifications</p>
        </div>
        <button
          onClick={handleSave}
          className={`flex items-center gap-2 font-semibold px-5 py-2.5 rounded-xl text-sm transition-all duration-200 ${
            saved
              ? "bg-emerald-100 text-emerald-700"
              : "bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] shadow-lg shadow-[#F59E0B]/20"
          }`}
        >
          {saved ? (
            <><CheckCircle className="w-4 h-4" /> Saved!</>
          ) : (
            <><Save className="w-4 h-4" /> Save Changes</>
          )}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Tab Sidebar */}
        <div className="lg:w-56 flex-shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 p-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 space-y-4">

          {/* General Settings */}
          {activeTab === "general" && (
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="font-black text-[#0A1628] text-lg mb-5">Site Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { label: "Site Name", key: "siteName", placeholder: "Aviatech Consulting" },
                    { label: "Tagline", key: "tagline", placeholder: "Elevating Aviation Excellence" },
                    { label: "Site URL", key: "siteUrl", placeholder: "https://aviatech.aero" },
                  ].map(({ label, key, placeholder }) => (
                    <div key={key} className={key === "siteUrl" ? "sm:col-span-2" : ""}>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
                      <input
                        type="text"
                        value={(generalSettings as any)[key]}
                        onChange={(e) => setGeneralSettings((prev) => ({ ...prev, [key]: e.target.value }))}
                        placeholder={placeholder}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:border-[#1E3A8A] transition-colors"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Timezone</label>
                    <select
                      value={generalSettings.timezone}
                      onChange={(e) => setGeneralSettings((p) => ({ ...p, timezone: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:border-[#1E3A8A] bg-white transition-colors"
                    >
                      <option value="America/New_York">Eastern Time (UTC-5)</option>
                      <option value="America/Chicago">Central Time (UTC-6)</option>
                      <option value="America/Los_Angeles">Pacific Time (UTC-8)</option>
                      <option value="Europe/London">London (UTC+0)</option>
                      <option value="Europe/Paris">Paris (UTC+1)</option>
                      <option value="Asia/Dubai">Dubai (UTC+4)</option>
                      <option value="Asia/Singapore">Singapore (UTC+8)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Currency</label>
                    <select
                      value={generalSettings.currency}
                      onChange={(e) => setGeneralSettings((p) => ({ ...p, currency: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:border-[#1E3A8A] bg-white transition-colors"
                    >
                      <option value="USD">USD — US Dollar</option>
                      <option value="EUR">EUR — Euro</option>
                      <option value="GBP">GBP — British Pound</option>
                      <option value="AED">AED — UAE Dirham</option>
                      <option value="SGD">SGD — Singapore Dollar</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="font-black text-[#0A1628] text-lg mb-5">Site Status</h2>
                <div className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-xl">
                  <div>
                    <p className="font-semibold text-[#0A1628] text-sm">Maintenance Mode</p>
                    <p className="text-gray-500 text-xs mt-0.5">When enabled, visitors will see a maintenance page</p>
                  </div>
                  <button
                    onClick={() => setGeneralSettings((p) => ({ ...p, maintenanceMode: !p.maintenanceMode }))}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      generalSettings.maintenanceMode ? "bg-[#F59E0B]" : "bg-gray-200"
                    }`}
                  >
                    <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                      generalSettings.maintenanceMode ? "translate-x-6" : "translate-x-0"
                    }`} />
                  </button>
                </div>
                {generalSettings.maintenanceMode && (
                  <div className="mt-3 flex items-center gap-2 text-amber-600 bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Maintenance mode is active. Your site is not publicly accessible.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Notifications */}
          {activeTab === "notifications" && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="font-black text-[#0A1628] text-lg mb-5">Email Notifications</h2>
              <div className="space-y-3">
                {[
                  { key: "newBookingEmail", label: "New Booking", desc: "Receive an email when a new booking is made" },
                  { key: "newMessageEmail", label: "New Contact Message", desc: "Receive an email when a contact form is submitted" },
                  { key: "newApplicationEmail", label: "New Application", desc: "Receive an email when a new application is submitted" },
                  { key: "weeklyReportEmail", label: "Weekly Summary Report", desc: "Receive a weekly report every Monday" },
                  { key: "paymentReceivedEmail", label: "Payment Received", desc: "Receive an email when a payment is processed" },
                  { key: "bookingCancelledEmail", label: "Booking Cancelled", desc: "Receive an email when a booking is cancelled" },
                  { key: "browserNotifications", label: "Browser Notifications", desc: "Receive push notifications in the browser" },
                  { key: "smsNotifications", label: "SMS Notifications", desc: "Receive SMS alerts for critical events" },
                ].map(({ key, label, desc }) => (
                  <div key={key} className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-xl">
                    <div>
                      <p className="font-semibold text-[#0A1628] text-sm">{label}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                    </div>
                    <button
                      onClick={() => setNotifications((p) => ({ ...p, [key]: !(p as any)[key] }))}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        (notifications as any)[key] ? "bg-[#F59E0B]" : "bg-gray-200"
                      }`}
                    >
                      <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                        (notifications as any)[key] ? "translate-x-6" : "translate-x-0"
                      }`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Branding */}
          {activeTab === "branding" && (
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="font-black text-[#0A1628] text-lg mb-5">Brand Colors</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {[
                    { label: "Primary Color", key: "primaryColor" },
                    { label: "Secondary Color", key: "secondaryColor" },
                    { label: "Accent Color", key: "accentColor" },
                  ].map(({ label, key }) => (
                    <div key={key}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div
                            className="w-10 h-10 rounded-lg border border-gray-200 cursor-pointer"
                            style={{ background: (branding as any)[key] }}
                          />
                          <input
                            type="color"
                            value={(branding as any)[key]}
                            onChange={(e) => setBranding((p) => ({ ...p, [key]: e.target.value }))}
                            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                          />
                        </div>
                        <input
                          type="text"
                          value={(branding as any)[key]}
                          onChange={(e) => setBranding((p) => ({ ...p, [key]: e.target.value }))}
                          className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono focus:outline-none focus:border-[#1E3A8A]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="font-black text-[#0A1628] text-lg mb-5">Logo & Text</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Logo Text</label>
                    <input
                      type="text"
                      value={branding.logoText}
                      onChange={(e) => setBranding((p) => ({ ...p, logoText: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#1E3A8A] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Logo Upload</label>
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-[#1E3A8A]/40 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                      <p className="text-gray-500 text-sm">Drop your logo here, or <span className="text-[#1E3A8A] font-medium">browse</span></p>
                      <p className="text-gray-400 text-xs mt-1">SVG, PNG recommended · Max 2MB</p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Footer Text</label>
                    <input
                      type="text"
                      value={branding.footerText}
                      onChange={(e) => setBranding((p) => ({ ...p, footerText: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#1E3A8A] transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Security */}
          {activeTab === "security" && (
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="font-black text-[#0A1628] text-lg mb-5">Admin Access</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Current Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#1E3A8A] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">New Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#1E3A8A] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm New Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#1E3A8A] transition-colors" />
                  </div>
                  <button className="bg-[#0A1628] hover:bg-[#1E3A8A] text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors">
                    Update Password
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="font-black text-[#0A1628] text-lg mb-5">API Key</h2>
                <div className="flex items-center gap-3 mb-4">
                  <input
                    type={showApiKey ? "text" : "password"}
                    value="sk_live_avt_3f8a9b2c1d4e5f6g7h8i9j0k"
                    readOnly
                    className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-mono bg-[#F8FAFC] text-gray-500"
                  />
                  <button
                    onClick={() => setShowApiKey(!showApiKey)}
                    className="p-2.5 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors"
                  >
                    {showApiKey ? <EyeOff className="w-4 h-4 text-gray-500" /> : <Eye className="w-4 h-4 text-gray-500" />}
                  </button>
                </div>
                <button className="text-red-600 hover:text-red-700 font-semibold text-sm transition-colors">
                  Regenerate API Key
                </button>
              </div>
            </div>
          )}

          {/* Email */}
          {activeTab === "email" && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="font-black text-[#0A1628] text-lg mb-5">Email Configuration</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { label: "From Name", value: "Aviatech Consulting" },
                  { label: "From Email", value: "noreply@aviatech.aero" },
                  { label: "Reply-To Email", value: "info@aviatech.aero" },
                  { label: "SMTP Host", value: "smtp.sendgrid.net" },
                  { label: "SMTP Port", value: "587" },
                  { label: "SMTP Username", value: "apikey" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
                    <input
                      type="text"
                      defaultValue={value}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#1E3A8A] transition-colors"
                    />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">SMTP Password</label>
                  <input
                    type="password"
                    defaultValue="SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#1E3A8A] transition-colors"
                  />
                </div>
              </div>
              <div className="mt-5">
                <button className="flex items-center gap-2 bg-[#0A1628] hover:bg-[#1E3A8A] text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors">
                  <Mail className="w-4 h-4" /> Send Test Email
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
