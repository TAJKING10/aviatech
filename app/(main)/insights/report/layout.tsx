import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Future of Autonomous Flight Deck Integration | Special Report",
  description:
    "Aviatech Consulting's special report on autonomous flight deck integration — covering AI co-pilot architecture, regulatory landscape, EASA certification pathways, and training implications.",
  keywords: [
    "autonomous flight deck",
    "AI co-pilot",
    "flight deck integration",
    "autonomous aviation",
    "EASA certification autonomous",
    "aviation AI report",
    "future of flight",
  ],
  alternates: { canonical: "https://aviatech-consulting.com/insights/report" },
  openGraph: {
    title: "The Future of Autonomous Flight Deck Integration | Aviatech Report",
    description:
      "Deep dive into AI co-pilot architecture, regulatory pathways, and training implications for autonomous aviation.",
    url: "https://aviatech-consulting.com/insights/report",
  },
};

export default function ReportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
