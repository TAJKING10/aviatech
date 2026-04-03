"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const industries = [
  {
    icon: "flight_takeoff",
    bgIcon: "flight",
    title: "Airlines",
    desc: "Optimizing fleet management, network planning, and passenger experience through data-driven operational intelligence.",
    variant: "standard",
  },
  {
    icon: "hub",
    bgIcon: "corporate_fare",
    title: "Airports",
    desc: "Modernizing ground operations and terminal logistics to maximize throughput and minimize environmental impact.",
    variant: "low",
  },
  {
    icon: "inventory_2",
    title: "Logistics & Cargo",
    desc: "Streamlining global supply chains with automated tracking and strategic route optimization for high-velocity freight.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWjxpCK82nocNafsjbRZQEfXy_a08ulR0OdWli3zQeeqCSodgyyr8n2UezNA1q8nhQQAR-xWXFYr4P7EFbgxRaAMNOXUvLoyL2OvgnxpHmDR91icwcJq8ORqc_Kv6ZGboKSqDbuityWNURuKQjpp3kQW42UCwpNK0ufVsP_eknij1_axcUJK37X_jy9EXz2zNHdNmU91NeAQILDBfRJUx3v4eOumGCEMxYlA8CvkGAsqXfz_tZnYRXDJH_TIhRVF_Sjvx9PzwMO1Qh",
    variant: "standard",
    rowSpan: 2,
  },
  {
    icon: "build_circle",
    title: "Aerospace Support",
    desc: "MRO strategies and supply chain resilience for component manufacturers and ground handling specialists.",
    variant: "low",
  },
  {
    icon: "memory",
    title: "Technology Vendors",
    desc: "Bridging the gap between software innovation and regulatory compliance for NextGen aviation systems.",
    variant: "standard",
  },
];

export default function IndustriesPage() {
  return (
    <div className="bg-surface font-body text-on-surface overflow-x-hidden">
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <motion.div 
              className="col-span-12 md:col-span-7"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-label text-primary uppercase tracking-[0.2rem] text-xs font-bold mb-4 block">Sector Expertise</span>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-[1.1] mb-8">
                Precision Solutions for the <span className="text-primary">Global Skyway</span>.
              </h1>
            </motion.div>
            <motion.div 
              className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col justify-end"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                Aviatech Consulting provides instrument-grade strategic guidance across the full aerospace ecosystem, from legacy carriers to emerging tech vendors.
              </p>
              <div className="h-1 w-24 bg-primary"></div>
            </motion.div>
          </div>
        </section>

        {/* Industry Grid: Bento Style */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "group relative rounded-xl overflow-hidden p-8 transition-all duration-300 hover:bg-surface-container-highest min-h-[320px]",
                  ind.variant === "low" ? "bg-surface-container-low" : "bg-surface-container",
                  ind.rowSpan === 2 && "md:row-span-2"
                )}
              >
                <div className="mb-12">
                  <span className="material-symbols-outlined text-4xl text-primary">{ind.icon}</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">{ind.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {ind.desc}
                </p>
                {ind.bgIcon && (
                  <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-8xl">{ind.bgIcon}</span>
                  </div>
                )}
                {ind.image && (
                  <div className="mt-8 relative h-64 w-full rounded-lg overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                    <Image src={ind.image} alt={ind.title} fill className="object-cover" />
                  </div>
                )}
              </motion.div>
            ))}

            {/* SMEs & Startups */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-1 md:col-span-2 group relative bg-primary-container text-white rounded-xl overflow-hidden p-8 flex flex-col md:flex-row items-center gap-8 transition-all duration-300"
            >
              <div className="flex-1 text-white">
                <div className="mb-6">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                </div>
                <h3 className="font-headline text-3xl font-bold mb-4">SMEs & Startups</h3>
                <p className="text-white/80 leading-relaxed max-w-md">
                  Scaling the future of flight. We provide lean, tactical consulting for boutique aerospace firms and emerging drone technologies.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded-md font-bold hover:bg-surface-bright transition-colors inline-block">
                  Explore SME Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Break: Tonal Shift */}
        <section className="mt-24 py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-headline text-4xl font-bold tracking-tight mb-6 text-on-surface">Cross-Sector Integration</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Our unique advantage lies in our ability to connect different sectors. We understand how airport infrastructure impacts airline efficiency, and how technology vendors must align with MRO workflows.
              </p>
              <ul className="mt-8 space-y-4">
                {["Regulatory Alignment", "Operational Synchronicity", "Data Liquidity"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="font-medium text-on-surface">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="relative z-10 w-full aspect-square rounded-xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN5VUNY9jKPh1jwQ7BkMEprxXG1Aava9pBu1nxBDASsLSIyqd0fTZSrrOQgd7wZoOqlhzOlLNNhnH_eFUvvgYf-qaeJLC46NViyoH-h5xXUk6MSWqBhCW6cl5N5ssBaBCG8URU5MlO4tihKQl-yAsxBzQmCLhaws4N9mfwt5LObkpAlgTarJwWJYGCLxFttAv2KSUaw509bLen4agoQ_jakic42cq8AyXwoB9kUWlgOjgP7EtykkE9FEV3rZe7TYrnFJ9MyG2BzDQS"
                  alt="airplane wing"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
