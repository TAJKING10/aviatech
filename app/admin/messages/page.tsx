import type { Metadata } from "next";
import { Search, Mail, MailOpen, Star, Trash2, Reply, Archive, Filter, Clock } from "lucide-react";

export const metadata: Metadata = { title: "Messages | Admin" };

interface Message {
  id: string;
  from: string;
  company: string;
  email: string;
  subject: string;
  preview: string;
  fullMessage: string;
  topic: string;
  date: string;
  time: string;
  read: boolean;
  starred: boolean;
  country: string;
}

const messages: Message[] = [
  {
    id: "msg-001",
    from: "James Harrington",
    company: "Atlas Airways",
    email: "j.harrington@atlas.com",
    subject: "SMS Implementation Support - Urgent",
    preview: "We're currently undergoing our IOSA audit in 6 weeks and need immediate support with...",
    fullMessage: "We're currently undergoing our IOSA audit in 6 weeks and need immediate support with our SMS documentation. Our safety officer recently left and we are not confident our current system will pass.",
    topic: "Safety Management Systems",
    date: "Mar 29, 2026",
    time: "09:14 AM",
    read: false,
    starred: true,
    country: "USA",
  },
  {
    id: "msg-002",
    from: "Amina Osei",
    company: "AfricAir Group",
    email: "a.osei@africair.gh",
    subject: "Request for Fleet Planning Proposal",
    preview: "We are evaluating a significant fleet expansion over the next 3 years and would like Aviatech to...",
    fullMessage: "We are evaluating a significant fleet expansion over the next 3 years and would like Aviatech to submit a proposal for strategic advisory services covering aircraft type selection, financing options, and MRO planning.",
    topic: "Fleet Management",
    date: "Mar 28, 2026",
    time: "03:45 PM",
    read: false,
    starred: false,
    country: "Ghana",
  },
  {
    id: "msg-003",
    from: "Dr. Henrik Larsson",
    company: "Nordic Air Authority",
    email: "h.larsson@naa.se",
    subject: "EASA Compliance Training - Q3 2026",
    preview: "Following our recent board decision, we would like to explore scheduling a comprehensive EASA compliance...",
    fullMessage: "Following our recent board decision, we would like to explore scheduling a comprehensive EASA compliance training program for our regulatory affairs team ahead of the new Q4 requirements taking effect.",
    topic: "Regulatory Compliance",
    date: "Mar 27, 2026",
    time: "11:22 AM",
    read: false,
    starred: false,
    country: "Sweden",
  },
  {
    id: "msg-004",
    from: "Fatima Al-Zahrawi",
    company: "Qatar Airways Group",
    email: "f.alzahrawi@qag.qa",
    subject: "Thank you - Fleet Module Follow-up",
    preview: "Thank you for an excellent training program last week. Our team found the fleet planning framework...",
    fullMessage: "Thank you for an excellent training program last week. Our team found the fleet planning framework particularly valuable. We would like to discuss follow-on advisory support for the actual implementation phase.",
    topic: "Fleet Management",
    date: "Mar 26, 2026",
    time: "08:05 AM",
    read: true,
    starred: true,
    country: "Qatar",
  },
  {
    id: "msg-005",
    from: "Tom Bradley",
    company: "UK CAA Services",
    email: "t.bradley@caa.co.uk",
    subject: "Partnership Inquiry - Training Delivery",
    preview: "We are exploring partnerships with certified aviation training providers for our new digital learning...",
    fullMessage: "We are exploring partnerships with certified aviation training providers for our new digital learning initiative. Given Aviatech's reputation, I wanted to reach out personally to see if this is something we could discuss further.",
    topic: "Partnership/Collaboration",
    date: "Mar 25, 2026",
    time: "02:15 PM",
    read: true,
    starred: false,
    country: "UK",
  },
  {
    id: "msg-006",
    from: "Yuki Sato",
    company: "ANA Holdings",
    email: "y.sato@ana.jp",
    subject: "CRM Training Feedback",
    preview: "I am writing to share the results following our CRM training sessions conducted in February...",
    fullMessage: "I am writing to share the results following our CRM training sessions conducted in February. We have seen a measurable improvement in crew coordination scores and our internal safety reporting has increased by 28%, which we attribute directly to the training.",
    topic: "Training Programs",
    date: "Mar 24, 2026",
    time: "10:30 AM",
    read: true,
    starred: false,
    country: "Japan",
  },
  {
    id: "msg-007",
    from: "Carlos Mendes",
    company: "LATAM Group",
    email: "c.mendes@latam.com",
    subject: "Urgent: FAA Audit in 10 Days",
    preview: "We have an unannounced FAA audit in 10 days and have identified several gaps in our Operations Specifications...",
    fullMessage: "We have an unannounced FAA audit in 10 days and have identified several gaps in our Operations Specifications. Do you have any consultants available for immediate on-site support in Miami?",
    topic: "Regulatory Compliance",
    date: "Mar 23, 2026",
    time: "04:55 PM",
    read: false,
    starred: true,
    country: "Brazil",
  },
  {
    id: "msg-008",
    from: "Priya Patel",
    company: "IndiaSky Express",
    email: "p.patel@indiasky.in",
    subject: "General Inquiry - Aviation Consulting Services",
    preview: "I came across Aviatech through an IATA publication and would like to understand your service offerings...",
    fullMessage: "I came across Aviatech through an IATA publication and would like to understand your service offerings for a startup regional airline that received its AOC six months ago. We need help professionalizing our operations.",
    topic: "General Inquiry",
    date: "Mar 22, 2026",
    time: "09:00 AM",
    read: true,
    starred: false,
    country: "India",
  },
];

const unreadCount = messages.filter((m) => !m.read).length;

export default function AdminMessagesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#0A1628]">Messages</h1>
          <p className="text-gray-500 text-sm mt-0.5">
            {unreadCount} unread · {messages.length} total messages
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-white border border-gray-200 hover:border-gray-300 text-gray-600 font-medium px-4 py-2 rounded-lg text-sm transition-colors">
            <Archive className="w-4 h-4" /> Archive All Read
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Unread", value: unreadCount, color: "text-[#1E3A8A]", bg: "bg-blue-50" },
          { label: "Starred", value: messages.filter(m => m.starred).length, color: "text-[#F59E0B]", bg: "bg-amber-50" },
          { label: "This Week", value: messages.length, color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Avg Response", value: "2.4h", color: "text-purple-600", bg: "bg-purple-50" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
            <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
            <div className="text-gray-500 text-sm">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Search + Filter */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#1E3A8A] transition-colors"
          />
        </div>
        <select className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-[#1E3A8A] bg-white">
          <option>All Topics</option>
          <option>Safety Management Systems</option>
          <option>Fleet Management</option>
          <option>Regulatory Compliance</option>
          <option>Training Programs</option>
          <option>Partnership/Collaboration</option>
          <option>General Inquiry</option>
        </select>
        <select className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-[#1E3A8A] bg-white">
          <option>All Messages</option>
          <option>Unread Only</option>
          <option>Starred</option>
        </select>
      </div>

      {/* Messages List */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden divide-y divide-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-4 px-5 py-4 hover:bg-[#F8FAFC] transition-colors cursor-pointer group ${
              !message.read ? "bg-blue-50/30" : ""
            }`}
          >
            {/* Avatar */}
            <div className="w-10 h-10 bg-gradient-to-br from-[#1E3A8A] to-[#0A1628] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
              {message.from.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`font-bold text-sm ${!message.read ? "text-[#0A1628]" : "text-gray-700"}`}>
                    {message.from}
                  </span>
                  <span className="text-gray-400 text-xs">{message.company}</span>
                  {!message.read && (
                    <span className="w-2 h-2 bg-[#1E3A8A] rounded-full" />
                  )}
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {message.date}
                  </span>
                </div>
              </div>
              <p className={`text-sm mb-1 ${!message.read ? "font-semibold text-[#0A1628]" : "text-gray-700"}`}>
                {message.subject}
              </p>
              <p className="text-gray-400 text-xs truncate">{message.preview}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="bg-[#F8FAFC] border border-gray-200 text-gray-500 text-xs px-2 py-0.5 rounded-full">
                  {message.topic}
                </span>
                <span className="text-gray-300 text-xs">{message.country}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
              <button className="p-1.5 hover:bg-blue-50 text-blue-600 rounded-lg transition-colors" title="Reply">
                <Reply className="w-4 h-4" />
              </button>
              <button className={`p-1.5 rounded-lg transition-colors ${message.starred ? "text-[#F59E0B]" : "hover:bg-amber-50 text-gray-400 hover:text-[#F59E0B]"}`} title="Star">
                <Star className={`w-4 h-4 ${message.starred ? "fill-[#F59E0B]" : ""}`} />
              </button>
              <button className="p-1.5 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-lg transition-colors" title="Delete">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
