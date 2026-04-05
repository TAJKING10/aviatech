import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book EASA Aviation Training | Modules M1–M17",
  description:
    "Apply for EASA Part-66 aviation training modules M1–M17. Choose your B1.1, B1.2, or B2 category, select modules, and submit your training application online.",
  keywords: [
    "book EASA training",
    "EASA Part-66 application",
    "aviation training modules",
    "B1.1 training application",
    "B1.2 training booking",
    "B2 avionics training",
    "M1 to M17 training",
    "aircraft maintenance training application",
  ],
  alternates: { canonical: "https://aviatech-consulting.com/booking" },
  openGraph: {
    title: "Book EASA Aviation Training Modules M1–M17 | Aviatech Consulting",
    description:
      "Submit your EASA Part-66 training application online. Select B1.1, B1.2, or B2 and choose from modules M1 to M17.",
    url: "https://aviatech-consulting.com/booking",
  },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
