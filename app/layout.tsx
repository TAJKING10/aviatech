import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Aviatech Consulting",
    default: "Aviatech Consulting - Premier Aviation Consulting Firm",
  },
  description:
    "Aviatech Consulting delivers strategic excellence in flight operations, safety management, regulatory compliance, and training programs for aviation organizations worldwide.",
  keywords: [
    "aviation consulting",
    "flight operations",
    "safety management",
    "regulatory compliance",
    "aviation training",
    "fleet management",
  ],
  authors: [{ name: "Aviatech Consulting" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aviatech.aero",
    siteName: "Aviatech Consulting",
    title: "Aviatech Consulting - Premier Aviation Consulting Firm",
    description:
      "Strategic aviation consulting solutions for commercial, military, and business aviation organizations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
