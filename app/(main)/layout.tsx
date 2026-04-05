import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aviatech-consulting.com/#organization",
      name: "Aviatech Consulting",
      url: "https://aviatech-consulting.com",
      description:
        "Aviatech Consulting provides EASA Part-66 aviation training, regulatory audits, and aerospace consulting services worldwide.",
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@aviatech-consulting.com",
        contactType: "customer service",
      },
      sameAs: ["https://aviatech-consulting.com"],
    },
    {
      "@type": "WebSite",
      "@id": "https://aviatech-consulting.com/#website",
      url: "https://aviatech-consulting.com",
      name: "Aviatech Consulting",
      publisher: { "@id": "https://aviatech-consulting.com/#organization" },
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://aviatech-consulting.com/#education",
      name: "Aviatech Consulting — Aviation Training",
      url: "https://aviatech-consulting.com/booking",
      description:
        "EASA Part-66 compliant aviation training covering modules M1–M17 for B1.1, B1.2, and B2 licence categories.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "EASA Training Modules",
        itemListElement: [
          { "@type": "Course", name: "M1 Mathematics", description: "Arithmetic, Algebra, Geometry and Calculus fundamentals." },
          { "@type": "Course", name: "M2 Physics", description: "Statics, Kinetics, Thermodynamics, and Fluid Dynamics." },
          { "@type": "Course", name: "M3 Electrical Fundamentals", description: "Electron theory, DC and AC circuits." },
          { "@type": "Course", name: "M8 Basic Aerodynamics", description: "Physics of the atmosphere, aerodynamics, flight theory." },
          { "@type": "Course", name: "M9 Human Factors", description: "Human performance and limitations, crew resource management." },
          { "@type": "Course", name: "M10 Aviation Legislation", description: "EASA Part-66 and Part-147 regulatory framework." },
          { "@type": "Course", name: "M11A Turbine Aeroplane Aerodynamics, Structures & Systems", description: "Turbine aeroplane theory and systems." },
          { "@type": "Course", name: "M15 Gas Turbine Engine", description: "Engine performance, compressor, combustion and turbine sections." },
        ],
      },
    },
  ],
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
