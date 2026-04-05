import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviation Services | Regulatory Audits & Technical Training",
  description:
    "Aviatech Consulting offers EASA-compliant regulatory audits, technical training, fleet management, and safety management services for aviation organisations worldwide.",
  keywords: [
    "EASA regulatory audit",
    "aviation technical training",
    "fleet management consulting",
    "aviation safety management",
    "EASA Part-66 training",
    "aerospace consulting services",
  ],
  alternates: { canonical: "https://aviatech-consulting.com/services" },
  openGraph: {
    title: "Aviation Services | Regulatory Audits & Technical Training | Aviatech",
    description:
      "EASA-compliant audits, Part-66 technical training, fleet management, and safety consulting for aviation organisations.",
    url: "https://aviatech-consulting.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
