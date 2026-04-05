import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redefining Maintenance Paradigms | Aviation Case Study",
  description:
    "Case study: How Aviatech Consulting reduced unplanned maintenance downtime by 22%, saving $4.2M over 18 months through predictive analytics and EASA-compliant maintenance protocols.",
  keywords: [
    "aircraft maintenance case study",
    "predictive maintenance aviation",
    "maintenance cost reduction",
    "EASA maintenance compliance",
    "aviation operations optimisation",
    "MRO case study",
  ],
  alternates: { canonical: "https://aviatech-consulting.com/insights/maintenance" },
  openGraph: {
    title: "Redefining Maintenance Paradigms | Aviatech Case Study",
    description:
      "22% downtime reduction, $4.2M savings over 18 months — Aviatech's predictive maintenance case study.",
    url: "https://aviatech-consulting.com/insights/maintenance",
  },
};

export default function MaintenanceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
