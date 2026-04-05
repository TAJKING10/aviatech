import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Aviatech Consulting | EASA Part-66 Aviation Specialists",
  description:
    "Learn about Aviatech Consulting — our mission, team, and expertise in EASA Part-66 compliance, aerospace training, and aviation regulatory consulting.",
  keywords: [
    "about Aviatech Consulting",
    "EASA Part-66 specialists",
    "aviation consulting team",
    "aerospace training experts",
    "aviation regulatory experts",
  ],
  alternates: { canonical: "https://aviatech-consulting.com/about" },
  openGraph: {
    title: "About Aviatech Consulting | EASA Part-66 Aviation Specialists",
    description:
      "Our mission, team, and expertise in EASA Part-66 compliance, aerospace training, and aviation regulatory consulting.",
    url: "https://aviatech-consulting.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
