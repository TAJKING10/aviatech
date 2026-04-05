import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aviatech-consulting.com"),
  title: {
    template: "%s | Aviatech Consulting",
    default: "Aviatech Consulting | EASA Aviation Training & Aerospace Consulting",
  },
  description:
    "Aviatech Consulting provides EASA Part-66 compliant aviation training, regulatory audits, and aerospace consulting services. Book modules M1–M17 for B1.1, B1.2, and B2 certifications.",
  keywords: [
    "EASA aviation training",
    "EASA Part-66",
    "aviation consulting",
    "aerospace consulting",
    "B1.1 training",
    "B1.2 training",
    "B2 avionics training",
    "aircraft maintenance training",
    "aviation regulatory compliance",
    "M1 mathematics aviation",
    "M3 electrical fundamentals",
    "M11A turbine aeroplane",
    "M15 gas turbine engine",
    "aviation safety management",
    "Aviatech Consulting",
  ],
  authors: [{ name: "Aviatech Consulting", url: "https://aviatech-consulting.com" }],
  creator: "Aviatech Consulting",
  publisher: "Aviatech Consulting",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aviatech-consulting.com",
    siteName: "Aviatech Consulting",
    title: "Aviatech Consulting | EASA Aviation Training & Aerospace Consulting",
    description:
      "EASA Part-66 aviation training, regulatory audits, and aerospace consulting. Modules M1–M17 for B1.1, B1.2, and B2 certifications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aviatech Consulting | EASA Aviation Training & Aerospace Consulting",
    description:
      "EASA Part-66 aviation training and aerospace consulting. Book training modules for B1.1, B1.2, and B2 certifications.",
    creator: "@aviatech",
  },
  alternates: {
    canonical: "https://aviatech-consulting.com",
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
