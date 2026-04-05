import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviation Insights & Industry Reports",
  description:
    "Read Aviatech Consulting's latest aviation insights, aerospace research reports, and industry case studies covering EASA compliance, autonomous flight, and maintenance innovation.",
  keywords: [
    "aviation insights",
    "aerospace industry reports",
    "EASA compliance research",
    "autonomous flight deck",
    "aircraft maintenance innovation",
    "aviation case studies",
    "aerospace trends",
  ],
  alternates: { canonical: "https://aviatech-consulting.com/insights" },
  openGraph: {
    title: "Aviation Insights & Industry Reports | Aviatech Consulting",
    description:
      "Latest aerospace research, EASA compliance analysis, and aviation industry case studies from Aviatech Consulting.",
    url: "https://aviatech-consulting.com/insights",
  },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
