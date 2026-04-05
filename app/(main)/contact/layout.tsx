import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Aviatech Consulting | Get in Touch",
  description:
    "Contact Aviatech Consulting for EASA aviation training enquiries, regulatory audit requests, and aerospace consulting services. Our team responds within 24 hours.",
  keywords: [
    "contact Aviatech Consulting",
    "aviation consulting enquiry",
    "EASA training contact",
    "aerospace consulting contact",
    "aviation audit request",
  ],
  alternates: { canonical: "https://aviatech-consulting.com/contact" },
  openGraph: {
    title: "Contact Aviatech Consulting | Get in Touch",
    description:
      "Reach out for EASA aviation training, regulatory audits, and aerospace consulting. We respond within 24 hours.",
    url: "https://aviatech-consulting.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
